import { FormEvent, useState } from "react";
import LoginInput from "./LoginInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await axios
      .post("http://localhost:8000/api/v1/login", {
        email,
        password,
      })
      .then((res) => {
        const statusCode = res.status;

        switch (statusCode) {
          case 200: {
            navigate("/home");
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
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-right tracking-tight text-gray-900 dark:text-white">
            Bem vindo(a), professor(a)
          </h1>
          <form method="post" className="space-y-4" onSubmit={handleSubmit}>
            <LoginInput
              label="Seu e-mail"
              inputType="email"
              autoComplete="true"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <LoginInput
              label="Senha"
              placeholder="***"
              inputType="password"
              autoComplete="true"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:underline hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Acessar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
