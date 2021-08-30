/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Button, ButtonGroup, ButtonProps } from "@chakra-ui/react";
import React from "react";
import { patchLayout } from "../../apis/patchTemplate";
import Section from "../../components/layouts/Section";
import { useCustomToast } from "../../hooks/useCustomToast";
import { usePatchParams } from "../../hooks/usePatchParams";
import useResumeStore from "../../store/resume.store";
import { Result, ResumeLayoutObject } from "../../store/types";

const Columns = () => {
  const layout = useResumeStore((state) => state.properties.layout);
  const { body } = layout;
  const updateLayout = useResumeStore((state) => state.updateLayout);
  const { token, resumeId } = usePatchParams();
  const { createToast } = useCustomToast();

  /**
   * Saves the layout to DB
   * @param nextBody Resume Layout Body array
   * @param columnType String - "single column" or "two-column"
   * @returns toast on success and error
   */
  const handleSubmit = async (
    nextBody: ResumeLayoutObject["body"],
    columnType: string
  ) => {
    updateLayout("body", nextBody);

    return await patchLayout(token, resumeId, {
      layout: { ...layout, body: nextBody },
    })
      .then((res: Result) => {
        updateLayout("body", res.template.layout.body);
        return createToast(`Resume converted to ${columnType}`, "success");
      })
      .catch(() =>
        createToast(
          `Couldn't convert resume to ${columnType}`,
          "error",
          "Please try again in sometime"
        )
      );
  };

  /**
   * Converts the two column body format to compatible single column format
   * @returns void
   */
  const convertToSingleColumn = async () => {
    //To prevent unintended side-effects if the body is already one-column
    if (body.length === 1) return;

    const nextBody = body.reduce((initial, item) => [...initial, ...item]);
    return await handleSubmit([nextBody], "single column");
  };

  /**
   * Converts the single row body to two column format
   * @returns void
   */
  const convertToTwoColumn = async () => {
    //To prevent unintended side-effects if the body is already two-column
    if (body.length === 2) return;

    const mid = Math.ceil(body[0].length / 2);
    const [col1, col2] = [body[0].slice(0, mid), body[0].slice(mid)];
    const nextBody = [col1, col2];
    return await handleSubmit(nextBody, "two-column");
  };

  /**
   * Generates the styling props depending on if the button is selected or not.
   * @param isSelected Condition which evaluates to true if the current button is selected
   * @returns ButtonProps Object
   */
  const getRestProps = (isSelected: boolean): ButtonProps => {
    const baseProps: ButtonProps = {
      colorScheme: "blue",
      _focus: {
        border: "none",
      },
    };

    const selectedProps: ButtonProps = {
      variant: "solid",
      ...baseProps,
    };

    const defaultProps: ButtonProps = {
      variant: "outline",
      ...baseProps,
    };

    return isSelected ? selectedProps : defaultProps;
  };

  return (
    <Section
      header={{
        title: "Body Style",
        subtitle: "Select between one or two column resume",
        mb: "2",
      }}
    >
      <ButtonGroup my="2" isAttached>
        <Button
          onClick={convertToTwoColumn}
          {...getRestProps(body.length === 2)}
        >
          Two Column
        </Button>
        <Button
          onClick={convertToSingleColumn}
          {...getRestProps(body.length === 1)}
        >
          Single Column
        </Button>
      </ButtonGroup>
    </Section>
  );
};

export default Columns;
