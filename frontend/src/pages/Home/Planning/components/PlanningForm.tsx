import { useEffect, useState } from "react";
import SigaFilledButton from "../../../../components/common/SigaFilledButton";
import SigaInput from "../../../../components/common/SigaInput";
import SigaTextArea from "../../../../components/common/SigaTextArea";
import { ClassPlanning } from "../../../../types/ClassPlanning";

interface PlanningFormProps {
  initialValue: ClassPlanning;
  onSubmit: (values: ClassPlanning) => void;
}

const PlanningForm: React.FC<PlanningFormProps> = ({
  initialValue,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState<ClassPlanning>(initialValue);

  useEffect(() => {
    setFormValues(initialValue);
  }, [initialValue]);

  const handleChange = (
    element:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = element.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full">
        <span>Título da aula</span>
        <SigaInput
          autoComplete="false"
          className="w-full"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col w-full">
        <span>Descrição</span>
        <SigaTextArea
          className="w-full"
          name="description"
          rows={6}
          value={formValues.description}
          onChange={handleChange}
        />
      </div>

      <div className="flex w-full space-x-4">
        <div className="col-span-1 w-full">
          <span>Data planejada</span>
          <SigaInput
            type="date"
            className="w-full"
            name="planned_date"
            value={formValues.planned_date}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-1  w-full">
          <span>Data aplicada</span>
          <SigaInput
            type="date"
            className="w-full"
            name="applied_date"
            value={formValues.applied_date}
            onChange={handleChange}
          />
        </div>
      </div>

      <SigaFilledButton type="submit">Salvar</SigaFilledButton>
    </form>
  );
};

export default PlanningForm;
