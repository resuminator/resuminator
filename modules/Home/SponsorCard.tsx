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

import { Button } from '@chakra-ui/button'
import { Box, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import { BUY_ME_A_COFFEE } from '../../data/RefLinks'
import mp from '../../services/mixpanel'

const SponsorCard = () => {
  const trackMetric = (from: string, to: string) => {
    mp.track("Sponsor CTA Trigger", { from, to });
  };

  return (
    <Box width="100%" py="4">
      <Heading fontSize="md" mb="4">Sponsor this project 💛</Heading>
      <Text fontSize="sm" mb="2">We wish to keep Resuminator free. Forever. Buy it will be impossible without your support.</Text>
      <Text fontSize="sm" mb="4">You can support us project if this software makes your life easier.</Text>
      <Button as="a" href={BUY_ME_A_COFFEE} target="_blank" size="sm" colorScheme="yellow" onClick={() => trackMetric("Home Page", BUY_ME_A_COFFEE)}>Buy us a pizza 🍕</Button>
    </Box>
  )
}

export default SponsorCard
