"use client";

import { fetchStudents } from "@/app/actions/studentsAction";
import { Collapsable } from "@/components/SiGA/Collapsable";
import { Button } from "@/components/ui/button";
import Student from "@/types/Student";
import { Mail } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { toast } from "sonner";

const StudentsList: FC = () => {
  const [data, setData] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [expandedItems, setExpandedItems] = useState<number[]>([]); // State to track open/closed items

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await fetchStudents();

      if (!result.success) {
        toast.error(result.error);
      }

      setData(result.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  // Toggle function
  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="px-4">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <span className="mb-4 block text-sm text-gray-500">
            {`${data.length} ${data.length === 1 ? "aluno" : "alunos"}`}
          </span>

          <div className="flex flex-col gap-3">
            {data.map((s) => (
              <Collapsable.Root key={s.id}>
                <Collapsable.Header
                  onClick={() => toggleItem(s.id)}
                  actions={
                    <a href={`mailto:${s.user.email}`}>
                      <Button size="icon" variant="outline">
                        <Mail />
                      </Button>
                    </a>
                  }
                >
                  <span>{`${s.first_name} ${s.last_name}`}</span>
                </Collapsable.Header>

                {expandedItems.includes(s.id) && (
                  <Collapsable.Body>
                    <div className="flex flex-col md:grid md:grid-cols-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-500">
                          E-mail
                        </span>
                        <span className="overflow-ellipsis">
                          {s.user.email}
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-500">
                          Telefone 1
                        </span>
                        <div className="overflow-ellipsis">
                          {s.phone1 ? s.phone1 : "--"}
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-500">
                          Telefone 2
                        </span>
                        <div className="overflow-ellipsis">
                          {s.phone2 ? s.phone2 : "--"}
                        </div>
                      </div>
                    </div>
                  </Collapsable.Body>
                )}
              </Collapsable.Root>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StudentsList;
