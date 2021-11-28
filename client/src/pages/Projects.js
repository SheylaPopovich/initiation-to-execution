import React, { useState } from "react";
import Button from "@mui/material/Button";
import ProjectNavbar from "../components/Navbar/Navbar";

import KhanBan from "./KhanBan";
import Messages from "./Messages";
import Settings from "./Settings";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState("KhanBan");

  function renderPage() {
    if ((currentPage === "KhanBan")) {
      return <KhanBan />;
    }
    if ((currentPage === "Messages")) {
      return <Messages />;
    }
    if ((currentPage === "Settings")) {
      return <Settings />;
    }
  }

  return (
    <>
      <ProjectNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <h1>PROJECT TITLE HERE</h1>
      {renderPage()}
    </>
  );
}
