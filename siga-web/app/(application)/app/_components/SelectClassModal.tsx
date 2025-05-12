import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ClassesResponse } from "@/types/Class";
import { PersonStandingIcon } from "lucide-react";
import { useState } from "react";

interface SelectClassModalProps {
  data: ClassesResponse[];
  currentClass: string;
  onSubmit: (classId: string) => Promise<void>;
}

const SelectClassModal = ({
  data,
  currentClass,
  onSubmit,
}: SelectClassModalProps) => {
  const [selectedClassId, setSelectedClassId] = useState<string>(currentClass);

  const handleSubmit = async () => {
    await onSubmit(selectedClassId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <PersonStandingIcon /> Trocar Turma
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Selecione uma turma:</AlertDialogTitle>

          <RadioGroup defaultValue={currentClass}>
            {data?.map((e) => (
              <div
                key={e.id}
                className="flex items-center gap-2 py-1.5"
                onClick={() => setSelectedClassId(String(e.id))}
              >
                <RadioGroupItem id={e.id.toString()} value={e.id.toString()} />
                <Label
                  htmlFor={e.id.toString()}
                >{`${e.discipline.abbreviation} - ${e.discipline.name}`}</Label>
              </div>
            ))}
          </RadioGroup>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Concluir</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SelectClassModal;
