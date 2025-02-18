"use client";

import TitleBar from "@/components/Siga/TitleBar";
import api from "@/config/axiosInstance";
import ClassMaterial from "@/types/ClassMaterial";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const HomeMaterialsIDEditPage = () => {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<ClassMaterial | null>(null);

  useEffect(() => {
    async function fetchClassMaterialData() {
      try {
        const res = await api.get<ClassMaterial>(
          `/classes/materials/${params.id}`,
        );
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClassMaterialData();
  }, []);

  return <div className="p-4">{data && <TitleBar title={data.title} />}</div>;
};

export default HomeMaterialsIDEditPage;
