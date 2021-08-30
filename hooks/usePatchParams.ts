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

import Cookies from "js-cookie";
import useGlobalStore from "../store/global.store";
import useResumeStore from "../store/resume.store";
import { Status } from "../utils/constants";

export const usePatchParams = () => {
  const { setSaveStatus, setLastSavedAt } = useGlobalStore();
  const resumeId = useResumeStore((state) => state._id);
  const token = Cookies.get("token");

  return { setSaveStatus, setLastSavedAt, resumeId, token, Status };
};
