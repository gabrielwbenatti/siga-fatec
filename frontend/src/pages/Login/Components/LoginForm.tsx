import { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SigaInput from "../../../components/common/SigaInput";
import SigaButton from "../../../components/common/SigaButton";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    navigate("/home/planning");

    // await axios
    //   .post("http://localhost:8000/api/v1/login", {
    //     email,
    //     password,
    //   })
    //   .then((res) => {
    //     const statusCode = res.status;

    //     switch (statusCode) {
    //       case 200: {
    //         navigate("/home");
    //         break;
    //       }
    //       case 401: {
    //         const message = res.data.message;
    //         console.log(message);
    //         break;
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
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
              label="Seu e-mail"
              placeholder="E-mail"
              type="email"
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

            <SigaButton>Acessar</SigaButton>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
