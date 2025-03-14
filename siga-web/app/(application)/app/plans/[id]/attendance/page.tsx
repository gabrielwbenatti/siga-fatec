import { fetchAttendances } from "@/app/actions/plansActions";
import AttendanceList from "./components/AttendanceList";
import TitleBar from "@/components/SiGA/TitleBar";

export default async function HomePlansAttendancePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetchAttendances(id);

  return (
    <div className="space-y-4">
      <TitleBar
        title={`${data.plan.applied_date ? "editing" : "not editing"} ${data.plan.title}`}
      />
      <AttendanceList initialData={data} />
    </div>
  );
}
