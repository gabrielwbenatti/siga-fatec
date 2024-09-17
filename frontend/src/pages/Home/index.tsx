import { Outlet, useNavigate } from "react-router-dom";
import { SigaSideBarItem, SigaSideMenu } from "./components/SigaSideMenu";
import { BookOpen, ChartColumn, Library } from "lucide-react";
import { Toaster } from "react-hot-toast";

function HomePage() {
  const items = [
    {
      icon: <Library />,
      text: "Planejar",
      path: "/home/planning",
    },
    {
      icon: <BookOpen />,
      text: "Materiais",
      path: "/home/materials",
    },
    {
      icon: <ChartColumn />,
      text: "Avaliações",
      path: "/home/exams",
    },
    {
      icon: <ChartColumn />,
      text: "Análises",
      path: "/home/analytics",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Toaster />

      <div className="flex min-h-screen">
        <SigaSideMenu>
          {items.map((item, index) => (
            <SigaSideBarItem
              key={index}
              icon={item.icon}
              text={item.text}
              path={item.path}
              onClick={() => navigate(item.path)}
            />
          ))}
        </SigaSideMenu>

        <main className="flex-1 px-16 pt-10">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default HomePage;
