import LoginForm from "./Components/LoginForm";

function LoginPage() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-screen md:h-screen lg:py-0">
          <LoginForm />
        </div>
      </section>
    </>
  );
}

export default LoginPage;
