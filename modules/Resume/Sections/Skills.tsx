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

import React, { useMemo } from "react";
import DataRow from "../../../components/elements/DataRow";
import useSkillStore from "../../UserInput/Skills/store";
import { SkillDataObject } from "../../UserInput/Skills/types";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import Tags from "../components/Tags";
import TextItem from "../components/TextItem";
import TitleRow from "../components/TitleRow";

interface CategoriesProps {
  data: Array<SkillDataObject>;
}

const Categories: React.FC<CategoriesProps> = React.memo(({ data }) => (
  <>
    {data.map((item) => (
      <SectionContent key={item._id}>
        <DataRow>
          <TitleRow>{item.category}</TitleRow>
        </DataRow>
        <DataRow>
          <TextItem aria-label={`Skill List: ${item.category}`}>
            {item.skillsList.join(", ")}
          </TextItem>
        </DataRow>
      </SectionContent>
    ))}
  </>
));

const generateListFromCategories = (data: Array<SkillDataObject>) => {
  const list = [];
  data.map((obj) => obj.skillsList.map((item) => list.push(item)));
  return list;
};

const SkillsLayout = (props) => {
  const format = useSkillStore((state) => state.format);
  const data = useSkillStore((state) => state.data).filter(
    (item) => !item.isHidden
  );
  const listfromCategories = useMemo(
    () => generateListFromCategories(data),
    [data]
  );

  return (
    <SectionBox aria-label="Skills Layout" {...props}>
      <SectionTitle>Skills</SectionTitle>
      {format === "CATEGORIES" ? (
        <Categories data={data} />
      ) : (
        <Tags list={listfromCategories} />
      )}
    </SectionBox>
  );
};

export default SkillsLayout;
Categories.displayName = "Categories";
