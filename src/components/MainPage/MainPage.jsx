import React, { useState } from "react";
import "./MainPage.css";
import { NavMenu } from "../NavMenu/NavMenu";
import { InteractiveMenu } from "../InteractiveMenu/InteractiveMenu";

export function MainPage() {
  const [allNumbers, setAllNumbers] = useState([]);

  return (
    <main className="main-page">
      <NavMenu />
      <InteractiveMenu allNumbers={allNumbers} setAll={setAllNumbers} />
    </main>
  );
}
