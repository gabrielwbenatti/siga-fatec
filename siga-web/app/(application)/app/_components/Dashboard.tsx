"use client";

import { fetchTeacherDashboard } from "@/app/actions/teacherActions";
import { GridMenu } from "@/components/SiGA/GridMenu";
import { Titlebar } from "@/components/SiGA/Titlebar";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { TeacherDashboard } from "@/types/Teacher";
import { formatDate } from "@/utils/string_helper";
import { EyeIcon, FileIcon, UserCheck2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Dashboard = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(true);
  const [teacherData, setTeacherData] = useState<TeacherDashboard | null>(null);

  useEffect(() => {
    fetchTeacherDashboardData();
  }, []);

  const fetchTeacherDashboardData = async () => {
    try {
      setisLoading(true);
      const result = await fetchTeacherDashboard();

      if (!result.success && !result.data) {
        toast.error(result.error);
        setTeacherData(null);
      }

      setTeacherData(result.data);
    } catch (error) {
      console.log(error);
      setTeacherData(null);
    } finally {
      setisLoading(false);
    }
  };

  const handleUpcomingClassClick = (
    currentClassId: number,
    selectedClassId: number,
    selectedPlanId: number,
  ) => {
    if (currentClassId !== selectedClassId) {
      toast.error("Aula selecionada pertente a outra disciplina/turma");
      return;
    }
    router.push(ROUTES.PLANNING.CLASSES.EDIT(selectedPlanId));
  };

  if (isLoading || !teacherData) {
    return (
      <div className="mx-auto px-4 py-6">
        <div>Carregando...</div>
      </div>
    );
  }

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title
          title={`Bem vindo(a) ${teacherData.currentUser.first_name} ${teacherData.currentUser.last_name}`}
        />
      </Titlebar.Root>

      <div className="mx-auto px-4 py-6">
        {/* Próximas aulas */}
        <section className="mb-8">
          <div className="mb-4 text-xl font-semibold">Próximas Aulas</div>
          <div className="rounded-lg bg-white p-4 shadow">
            {teacherData.upcomingClasses.length > 0 ? (
              <ul>
                {teacherData?.upcomingClasses.map((plan) => (
                  <li key={plan.id} className="mb-3 border-b pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong>{plan.title}</strong>
                        <p>
                          {`${plan.class.discipline.name} - ${formatDate(plan.planned_date, "pt-BR")}`}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() =>
                          handleUpcomingClassClick(
                            teacherData.currentUser.class_id,
                            plan.class_id,
                            plan.id,
                          )
                        }
                      >
                        <EyeIcon /> Detalhes
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma aula planejada para os próximos dias.</p>
            )}
            <div className="mt-4 flex">
              <Link href={ROUTES.PLANNING.CLASSES.CREATE}>
                <Button>Planejar nova aula </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Atalhos */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Atalhos</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <GridMenu.Item
              href={ROUTES.EXECUTE.ATTENDANCE.LIST}
              icon={<FileIcon />}
              caption="Chamada Online"
            />
            <GridMenu.Item
              href={ROUTES.EXECUTE.GRADES.LIST}
              icon={<UserCheck2Icon />}
              caption="Lançar Notas"
            />
            <GridMenu.Item
              href={ROUTES.EXECUTE.MATERIALS.LIST}
              icon={<FileIcon />}
              caption="Materiais"
            />
          </div>
        </section>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Minhas Turmas</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {teacherData.classStats.map((cls) => (
              <div key={cls.id} className="rounded-lg bg-white p-4 shadow">
                <h3 className="font-medium">{cls.discipline.name}</h3>
                <p className="text-sm text-gray-600">{`${cls.discipline.course.name} (${cls.year}-${cls.semester})`}</p>
                <div className="mt-2 flex justify-between">
                  <span>{cls.studentCount} alunos</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
