import { GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import BoxHeader from "../../components/common/BoxHeader";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import SEO from "../../modules/SEO";
import ChangePassword from "../../modules/Settings/Account/ChangePassword";
import SettingsLayoutGrid from "../../modules/Settings/LayoutGrid";
import SettingsSidebar from "../../modules/Settings/SettingsSidebar";

const SecuritySettings: NextPage = () => {
  return (
    <>
      <SEO title="Account Settings" />
      <Header />
      <SettingsLayoutGrid>
        <GridItem rowSpan={1} colSpan={4}>
          <BoxHeader
            title="Account Settings"
            subtitle="Account related settings like passwords, and preferences."
          />
        </GridItem>
        <SettingsSidebar />
        <GridItem rowSpan={2} colSpan={1}>
          <ChangePassword />
        </GridItem>
      </SettingsLayoutGrid>
      <Footer />
    </>
  );
};

export default SecuritySettings;
