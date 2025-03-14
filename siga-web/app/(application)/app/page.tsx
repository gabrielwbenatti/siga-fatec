import { fetchTeacher } from "@/app/actions/teacherActions";
import TitleBar from "@/components/SiGA/TitleBar";

const HomePage = async () => {
  const { data } = await fetchTeacher();
  const teacherName = data.first_name + " " + data.last_name;

  return (
    <>
      <TitleBar title={`Bem vindo(a) ${teacherName}`} />

      <div className="p-4">
        <span>Em breve informações aqui</span>
      </div>
    </>
  );
};

export default HomePage;
