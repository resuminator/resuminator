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

import { Button, ButtonGroup, ButtonGroupProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const LoginSignupButtons: React.FC<ButtonGroupProps> = ({ ...props }) => {
  const router = useRouter();

  const routeToLogin = () => {
    router.push("/login");
  };

  const routeToSignup = () => {
    router.push("/signup");
  };

  return (
    <ButtonGroup {...props}>
      <Button
        colorScheme="blue"
        size="md"
        variant="outline"
        onClick={routeToLogin}
      >
        Log in
      </Button>
      <Button
        colorScheme="blue"
        size="md"
        variant="solid"
        onClick={routeToSignup}
      >
        Sign up
      </Button>
    </ButtonGroup>
  );
};
export default LoginSignupButtons;
