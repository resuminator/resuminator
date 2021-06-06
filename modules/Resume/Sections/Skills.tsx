import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";
import React, { useContext, useMemo } from "react";
import DataRow from "../../../components/elements/DataRow";
import { StylePropsContext } from "../../Design/StylePropsProvider";
import useSkillStore from "../../UserInput/Skills/store";
import { SkillDataObject } from "../../UserInput/Skills/types";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import Tags from "../components/Tags";
import TitleRow from "../components/TitleRow";

interface CategoriesProps {
  data: Array<SkillDataObject>;
}

const Categories: React.FC<CategoriesProps> = React.memo(({ data }) => {
  const { body } = useContext(StylePropsContext).font;
  const colorMode = useColorMode().colorMode;

  return (
    <>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow>
            <TitleRow>{item.category}</TitleRow>
          </DataRow>
          <DataRow>
            <Text
              aria-label={`Skill List: ${item.category}`}
              {...body}
              color={colorMode === "light" ? "gray.600" : "gray.400"}
            >
              {item.skillsList.join(", ")}
            </Text>
          </DataRow>
        </SectionContent>
      ))}
    </>
  );
});

const generateListFromCategories = (data: Array<SkillDataObject>) => {
  const list = [];
  data.map((obj) => obj.skillsList.map((item) => list.push(item)));
  return list;
};

const SkillsLayout = () => {
  const format = useSkillStore((state) => state.format);
  const data = useSkillStore((state) => state.data).filter(
    (item) => !item.isHidden
  );
  const listfromCategories = useMemo(
    () => generateListFromCategories(data),
    [data]
  );

  return (
    <Box aria-label="Skills Layout" w="inherit">
      <SectionTitle>Skills</SectionTitle>
      {format === "CATEGORIES" ? (
        <Categories data={data} />
      ) : (
        <Tags list={listfromCategories} />
      )}
    </Box>
  );
};

export default SkillsLayout;
Categories.displayName = "Categories";
