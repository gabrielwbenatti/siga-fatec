import { Outlet, useNavigate } from "react-router-dom";
import { SigaSideBarItem, SigaSideMenu } from "./components/SideMenu";
import { BookOpen, Library } from "lucide-react";
import { useState } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
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
  ];

  return (
    <>
      <div className="flex h-screen">
        <SigaSideMenu>
          {items.map((item, index) => (
            <SigaSideBarItem
              key={index}
              icon={item.icon}
              text={item.text}
              onClick={() => {
                navigate(item.path);
                setCurrentIndex(index);
              }}
              active={index === currentIndex}
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
