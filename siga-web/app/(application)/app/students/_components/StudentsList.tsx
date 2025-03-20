"use client";

import { Collapsable } from "@/components/SiGA/Collapsable";
import { Button } from "@/components/ui/button";
import Student from "@/types/Student";
import { Mail } from "lucide-react";
import { FC, useState } from "react";

interface StudentsListProps {
  data: Student[];
}

const StudentsList: FC<StudentsListProps> = ({ data }: StudentsListProps) => {
  // State to track open/closed items
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // Toggle function
  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="px-4">
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
                    <span className="overflow-ellipsis">{s.user.email}</span>
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
    </div>
  );
};

export default StudentsList;
