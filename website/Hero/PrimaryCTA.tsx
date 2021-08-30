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

import { Button, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import MotionBox, { MotionBoxProps } from "../../components/layouts/MotionBox";
import mp from "../../services/mixpanel";

const PrimaryCTA: React.FC<MotionBoxProps> = ({ ...rest }) => {
  const router = useRouter();

  const routeToSignup = () => {
    router.push("/signup");
    mp.track("Signup Page CTA Trigger")
  }

  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      {...rest}
    >
      <Button
        variant="solid"
        size={useBreakpointValue({ base: "md", md: "lg" })}
        colorScheme="blue"
        rightIcon={<FiArrowRight />}
        onClick={routeToSignup}
      >
        Get Started Today
      </Button>
    </MotionBox>
  );
};

export default PrimaryCTA;
