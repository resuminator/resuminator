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

import { Avatar } from "@chakra-ui/avatar";
import { Center } from "@chakra-ui/layout";
import React from "react";
import useResumeStore from "../../../store/resume.store";
import useContactStore from "../../UserInput/Contact/store";

const UserImageLayout = () => {
  const fullName = useContactStore((state) => state.fullName);
  const userImage = useContactStore((state) => state.userImage);
  const spacing = useResumeStore((state) => state.spacing);

  return userImage.length ? (
    <Center px={spacing * 8} py={spacing * 4} borderRadius="50%">
      <Avatar size="lg" name={fullName} src={userImage} />
    </Center>
  ) : null;
};

export default UserImageLayout;
