import { fetchTeacher } from "@/app/actions/teacherActions";
import TitleBar from "@/components/SiGA/TitleBar";

const HomePage = async () => {
  const { data } = await fetchTeacher();

  return (
    <>
      <TitleBar
        title={`Bem vindo(a) ${data.first_name + " " + data.last_name}`}
      />

      <div className="px-4">
        <span>Em breve informações aqui</span>
      </div>
    </>
  );
};

export default HomePage;
