import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <h3>Login</h3>

      <form action="" method="post">
        <div>
          <label htmlFor="user_input">Nome de Usuário</label>
          <input type="text" name="user_input" id="user_input" />
        </div>

        <div>
          <label htmlFor="password_input">Senha</label>
          <input type="password" name="password_input" id="password_input" />
        </div>

        <Link to={`/home`}>Acessar</Link>
      </form>
    </>
  );
}

export default LoginPage;
