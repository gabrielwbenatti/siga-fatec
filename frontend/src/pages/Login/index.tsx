import { FormEvent, useState } from "react";
import LoginForm from "./Components/LoginForm";
import { useNavigate } from "react-router-dom";
import SigaInput from "../../components/common/SigaInput";
import api from "../../services/api";
import toast, { Toaster } from "react-hot-toast";

function LoginPage() {
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
            localStorage.setItem("teacher-id", res.data.teacher[0].id);

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
        toast.error(err.message, {
          position: "top-right",
        });
        console.error(err);
      });
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-screen md:h-screen lg:py-0">
          <LoginForm onSubmmit={handleSubmit}>
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
          </LoginForm>
        </div>
        <Toaster />
      </section>
    </>
  );
}

export default LoginPage;
