import { Button, ButtonGroup, ButtonProps } from "@chakra-ui/react";
import React from "react";
import Section from "../../components/layouts/Section";
import useResumeStore from "../../store/resume.store";

const Columns = () => {
  const { body } = useResumeStore((state) => state.properties.layout);
  const updateLayout = useResumeStore((state) => state.updateLayout);

  const convertToSingleColumn = () => {
    if (body.length === 1) return;

    const nextBody = body.reduce((initial, item) => [...initial, ...item]);
    updateLayout("body", [nextBody]);
  };

  const convertToTwoColumn = () => {
    if (body.length === 2) return;

    const mid = Math.ceil(body[0].length / 2);
    const [col1, col2] = [body[0].slice(0, mid), body[0].slice(mid)];
    const nextBody = [col1, col2];
    updateLayout("body", nextBody);
  };

  const getRestProps = (isSelected: boolean): ButtonProps => {
    const baseProps: ButtonProps = {
      colorScheme: "purple",
      _focus: {
          border: "none"
      }
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
