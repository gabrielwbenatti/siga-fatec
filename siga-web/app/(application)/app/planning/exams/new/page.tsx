import ExamsCreateUpdateForm from "../_components/ExamsCreateUpdateForm";
import { Titlebar } from "@/components/SiGA/Titlebar";

export default function ExamsNewPage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Nova Avaliação" />
      </Titlebar.Root>

      <ExamsCreateUpdateForm />
    </>
  );
}
