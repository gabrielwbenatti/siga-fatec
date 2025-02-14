"use client";

import api from "@/config/axiosInstance";
import Class from "@/types/Class";
import Teacher from "@/types/Teacher";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextData {
  teacher: Teacher | null;
  courseClass: Class | null;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  setClass: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: { children: ReactNode }) {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [courseClass, setCourseClass] = useState<Class | null>(null);

  useEffect(() => {
    const storedTeacher = localStorage.getItem("@App:teacher");
    const storedCourseClass = localStorage.getItem("@App:class");

    if (storedTeacher) setTeacher(JSON.parse(storedTeacher));
    if (storedCourseClass) setCourseClass(JSON.parse(storedCourseClass));
  }, []);

  const signIn = async (credentials: { email: string; password: string }) => {
    try {
      const res = await api.post("/login", credentials);

      if (res.status === 200) {
        localStorage.setItem(
          "@App:teacher",
          JSON.stringify(res.data.teacher[0]),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setClass = async () => {};

  return (
    <AuthContext.Provider value={{ teacher, courseClass, signIn, setClass }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
