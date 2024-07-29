import { useState } from "react";
import { SigaSideMenu, SigaSideMenuItem } from "./components/SideMenu";
import MaterialsPage from "./Materials";
import PlanningPage from "./Planning";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items: SigaSideMenuItem[] = [
    { title: "Planning", selected: true },
    { title: "Materials", selected: false },
    { title: "Analytics", selected: false },
  ];

  return (
    <>
      <div className="flex h-screen">
        <SigaSideMenu items={items} currentIndex={currentIndex} />

        <MaterialsPage />
      </div>
    </>
  );
}

export default HomePage;
