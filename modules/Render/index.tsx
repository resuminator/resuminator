import ReactDOMServer from "react-dom/server";
import ResumePaper from "../Resume";

export const renderStaticResume = ({ ...props }) => {
  const resumeMarkup = ReactDOMServer.renderToStaticMarkup(
    <ResumePaper {...props} />
  );

  return `
    <!doctype html>
     <html lang="en">
       <head>
         <meta charset="utf-8">
       </head>
       <body>
         ${resumeMarkup}
       </body>
     </html>
    `;
};
