import { fetchTeacher } from "@/app/actions/teacherActions";
import { Titlebar } from "@/components/SiGA/Titlebar";

const HomePage = async () => {
  const { data } = await fetchTeacher();

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title
          title={`Bem vindo(a) ${data.first_name + " " + data.last_name}`}
        />
      </Titlebar.Root>

      <div className="px-4">
        <span>Em breve informações aqui</span>
      </div>
    </>
  );
};

export default HomePage;
