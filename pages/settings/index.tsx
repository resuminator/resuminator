import { GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import BoxHeader from "../../components/common/BoxHeader";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import SEO from "../../modules/SEO";
import PersonalDetails from "../../modules/Settings/General/PersonalDetails";
import ProfilePhoto from "../../modules/Settings/General/ProfilePhoto";
import SettingsLayoutGrid from "../../modules/Settings/LayoutGrid";
import SettingsSidebar from "../../modules/Settings/SettingsSidebar";

const Settings: NextPage = () => {
  return (
    <>
      <SEO title="General Settings" />
      <Header />
      <SettingsLayoutGrid>
        <GridItem rowSpan={1} colSpan={4}>
          <BoxHeader
            title="General Settings"
            subtitle="Change how your profile looks, update your personal info."
          />
        </GridItem>
        <SettingsSidebar />
        <GridItem rowSpan={1} colSpan={1}>
          <PersonalDetails />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <ProfilePhoto />
        </GridItem>
      </SettingsLayoutGrid>
      <Footer />
    </>
  );
};

export default Settings;
