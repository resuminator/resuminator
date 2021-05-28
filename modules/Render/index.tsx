import ReactDOMServer from "react-dom/server";
import Viewer from "../Viewer";

export const renderStaticResume = ({ ...props }) => {
  const resumeMarkup = ReactDOMServer.renderToStaticMarkup(
    <Viewer {...props} />
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
