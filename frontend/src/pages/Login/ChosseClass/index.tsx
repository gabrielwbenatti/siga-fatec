import { useEffect, useState } from "react";
import { getClasses } from "../../../services/classes.service";
import toast, { Toaster } from "react-hot-toast";
import { Class } from "../../../types/Class";
import { Button, Form, Radio } from "@prismane/core";
import { useNavigate } from "react-router-dom";

export default function ChooseClassPage() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClass] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const internalGetClasses = async () => {
      const userStorage = localStorage.getItem("user-info");

      if (!userStorage) {
        toast.error("User undefined, try again");
        return;
      }

      const userObj = JSON.parse(userStorage);
      const id = String(userObj.teacher[0].id);

      const response = await getClasses(id!);
      setClasses(response.data);
    };

    internalGetClasses();
  }, []);

  const onSubmit = () => {
    const clss = classes.filter((e) => e.id == selectedClass);
    localStorage.setItem("class-info", JSON.stringify(clss[0]));

    navigate("/home/planning");
  };

  return (
    <>
      <Toaster />

      <Form>
        <Radio.Group
          name="rdg-class-chooser"
          direction="column"
          align="start"
          value={selectedClass}
          defaultChecked={false}
          defaultValue={undefined}
          onChange={(e: any) => setSelectedClass(e.target.value)}
        >
          {classes.map((clss, index) => (
            <Radio
              value={String(clss.id)}
              key={index}
              label={`${clss.discipline.abbreviation} - ${clss.discipline.name}`}
            />
          ))}
        </Radio.Group>

        <Button type="button" onClick={onSubmit}>
          Prosseguir
        </Button>
      </Form>
    </>
  );
}
