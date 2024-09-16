import { useEffect, useState } from "react";
import { getClasses } from "../../../services/classes.service";
import toast, { Toaster } from "react-hot-toast";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import { Class } from "../../../types/Class";

export default function ChooseClassPage() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClass] = useState<Class>();

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

  return (
    <>
      <Toaster />

      <SListWrapper
        items={classes}
        keyExtractor={(classItem, _) => classItem.id}
        renderItem={(classItem) => <div>{classItem.discipline.name}</div>}
      />
    </>
  );
}
