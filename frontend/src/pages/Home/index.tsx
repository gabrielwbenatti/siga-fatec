import { SigaSideBarItem, SigaSideMenu } from "./components/SideMenu";
import MaterialsPage from "./Materials";
import { BookOpen, ChartColumn, Library } from "lucide-react";

function HomePage() {
  return (
    <>
      <div className="flex h-screen">
        <SigaSideMenu>
          <SigaSideBarItem icon={<Library />} text="Planejar" active />
          <SigaSideBarItem icon={<BookOpen />} text="Materiais" />
          <SigaSideBarItem icon={<ChartColumn />} text="Análises" />
        </SigaSideMenu>

        <MaterialsPage />
      </div>
    </>
  );
}

export default HomePage;
