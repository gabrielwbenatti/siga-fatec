import { fetchAttendances } from "@/app/actions/plansActions";
import { Titlebar } from "@/components/SiGA/Titlebar";
import AttendanceForm from "../../_components/AttendanceForm";

export default async function AttendanceEditIDPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await fetchAttendances(id);

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title
          title={`${result.plan.applied_date ? "(Modificando)" : ""} ${result.plan.title}`}
        />
      </Titlebar.Root>

      <AttendanceForm initialData={result} />
    </>
  );
}
