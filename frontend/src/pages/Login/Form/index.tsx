import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import toast from "react-hot-toast";
import SigaInput from "../../../components/common/SigaInput";
import LoginFormComp from "../Components/LoginForm";

export default function LoginFormPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user-info");
    localStorage.removeItem("class-info");
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await api
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        const statusCode = res.status;
        const data = res.data;

        switch (statusCode) {
          case 200: {
            const user = JSON.stringify(data);
            localStorage.setItem("user-info", user);

            navigate("/choose-class");
            break;
          }
          case 401: {
            const message = res.data.message;
            toast.error(message, {
              position: "top-right",
            });
            break;
          }
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-right",
        });
        console.error(err);
      });
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-screen md:h-screen lg:py-0">
        <LoginFormComp onSubmmit={handleSubmit}>
          <SigaInput
            label="Seu e-mail ou nome de usuário"
            placeholder="E-mail ou nome de usuário"
            className="w-full"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <SigaInput
            label="Senha"
            placeholder="Senha"
            type="password"
            className="w-full"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </LoginFormComp>
      </div>
    </section>
  );
}
