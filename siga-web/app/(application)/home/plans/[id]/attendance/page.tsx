"use client";

import TitleBar from "@/components/Siga/TitleBar";
import api from "@/config/axiosInstance";
import ClassAttendance from "@/types/ClassAttendance";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const HomePlansAttendancePage = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<ClassAttendance | null>(null);
  const [classAtt, setClassAtt] = useState<ClassAttendance | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      fetchAttendances(Number(id));
    }
  }, []);

  const fetchAttendances = async (planId: number) => {
    try {
      setLoading(true);
      const res = await api.get<ClassAttendance>(
        `/classes/plans/${planId}/attendances`,
      );
      setData(res.data);
      console.log(res.data);
      setClassAtt(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="space-y-4 p-4">
      {classAtt && (
        <>
          <TitleBar title={classAtt.plan.title} />
          <p className="line-clamp-1 text-sm">{classAtt.plan.description}</p>
        </>
      )}
    </div>
  );
};

export default HomePlansAttendancePage;
