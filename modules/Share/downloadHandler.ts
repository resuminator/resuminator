import { downloadPdf } from "../../apis/download";
import mp from "../../services/mixpanel";
import { Status } from "../../utils/constants";

export const handleDownload = async (
  token: string,
  id: string,
  resumeName: string,
  statusController: (value: Status) => void,
  toastController: (title: string, status: string, description?: string) => void
) => {
  mp.time_event("Download");
  statusController(Status.loading);

  //Triggering the download microservice API
  return await downloadPdf(token, id)
    .then((res) => {
      //Generating a File from the Blob recieved
      const blob = new Blob([res.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = resumeName;
      link.click();

      //Finishing Events
      mp.track("Download", { status: "success", id });
      toastController("PDF Generated Successfully", "success");
      statusController(Status.success);
    })
    .catch(() => {
      statusController(Status.error);
      mp.track("Download", { status: "error", id });
      toastController(
        "PDF Generation Failed",
        "error",
        "Please try again later. If the problem persists, contact us."
      );
    })
    .finally(() => {
      statusController(Status.idle);
    });
};
