import { FormEvent, useState } from "react";
import SigaInput from "../../../components/common/SigaInput";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await api
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        const statusCode = res.status;

        switch (statusCode) {
          case 200: {
            localStorage.setItem("teacher-id", res.data.teacher.id);
            navigate("/home/planning");
            break;
          }
          case 401: {
            const message = res.data.message;
            console.log(message);
            break;
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="w-full bg-light-surfaceContainerLowest rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-right tracking-tight text-light-onSurface">
            Bem vindo(a), professor(a)
          </h1>
          <form method="post" className="space-y-4" onSubmit={handleSubmit}>
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

            <SigaFilledButton>Acessar</SigaFilledButton>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
