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

import mixpanel from "mixpanel-browser";

//If there is no token in the env variables, the TEST_TOKEN will initialize Mixpanel
//It does not throw error just that nothing will be logged.
const KEY = process.env.NEXT_PUBLIC_MIXPANEL || 'TEST_TOKEN';

mixpanel.init(KEY);

const mp = mixpanel;
export default mp;
