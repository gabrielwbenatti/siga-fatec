import { Titlebar } from "@/components/SiGA/Titlebar";
import AttendanceList from "./_components/AttendanceList";

export default async function AttendancePage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Chamada on-line" />
      </Titlebar.Root>

      <AttendanceList />
    </>
  );
}
