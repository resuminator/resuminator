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
import { memo, useEffect } from "react";
import useGlobalStore from "../../store/global.store";
import useResumeStore from "../../store/resume.store";
import { Status } from "../../utils/constants";

// type ServerKeys =
//   | "education"
//   | "experience"
//   | "projects"
//   | "certifications"
//   | "customSections"
//   | "publications";

interface AutosaveProps<T> {
  data: T;
  patchFn: (token: string, resumeId: string, body: T) => Promise<any>;
}

const Autosave: React.FC<AutosaveProps<any>> = memo(({ data, patchFn }) => {
  const { setSaveStatus, setLastSavedAt } = useGlobalStore();
  const resumeId = useResumeStore((state) => state._id);

  useEffect(() => {
    const token = Cookies.get("token");

    const res = async () => {
      setSaveStatus(Status.loading);
      return await patchFn(token, resumeId, data)
        .then((res) => {
          setLastSavedAt(new Date(res.updatedAt));
          return setSaveStatus(Status.success);
        })
        .catch(() => setSaveStatus(Status.error));
    };

    const timeout = setTimeout(res, 3000);
    setSaveStatus(Status.idle);
    return () => clearTimeout(timeout);
  }, [data, resumeId, setSaveStatus, patchFn, setLastSavedAt]);

  return null;
});

Autosave.displayName = "Autosave";
export default Autosave;
