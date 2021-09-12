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

import { GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useEffect } from "react";
import BoxHeader from "../../components/common/BoxHeader";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import SEO from "../../modules/SEO";
import PersonalDetails from "../../modules/Settings/General/PersonalDetails";
import ProfilePhoto from "../../modules/Settings/General/ProfilePhoto";
import SettingsLayoutGrid from "../../modules/Settings/LayoutGrid";
import SettingsSidebar from "../../modules/Settings/SettingsSidebar";
import mp from "../../services/mixpanel";
import Papercups from "../../services/papercups";

const Settings: NextPage = () => {
  useEffect(() => {
    mp.track("General Settings Page View");
  }, []);

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
      <Papercups />
    </>
  );
};

export default Settings;
