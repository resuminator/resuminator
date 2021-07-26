import Cookies from "js-cookie";
import { useEffect } from "react";
import useGlobalStore from "../../store/global.store";
import useResumeStore from "../../store/resume.store";
import { Status } from "../../utils/constants";

interface AutosaveProps<T> {
  data: T;
  patchFn: (token: string, resumeId: string, body: T) => Promise<any>;
}

const Autosave: React.FC<AutosaveProps<any>> = ({ data, patchFn }) => {
  const { setSaveStatus } = useGlobalStore();
  const resumeId = useResumeStore((state) => state._id);

  useEffect(() => {
    const token = Cookies.get("token");

    const res = async () => {
      setSaveStatus(Status.loading);
      return await patchFn(token, resumeId, data)
        .then(() => setSaveStatus(Status.success))
        .catch(() => setSaveStatus(Status.error));
    };

    const timeout = setTimeout(res, 3000);
    setSaveStatus(Status.idle);
    return () => clearTimeout(timeout);
  }, [data, resumeId, setSaveStatus, patchFn]);

  return null;
};

export default Autosave;
