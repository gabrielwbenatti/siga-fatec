import { fetchAttendances } from "@/app/actions/plansActions";
import AttendanceList from "./components/AttendanceList";
import { Titlebar } from "@/components/SiGA/Titlebar";

export default async function HomePlansAttendancePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetchAttendances(id);

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title={data.plan.title} />
      </Titlebar.Root>

      <AttendanceList initialData={data} />
    </>
  );
}
