import SigaFilledButton from "../../../components/common/SigaFilledButton";
import { FormEvent } from "react";

interface LoginFormProps {
  onSubmmit?: (e: FormEvent) => Promise<void>;
  children: React.ReactNode;
}

function LoginForm({ children, onSubmmit }: LoginFormProps) {
  return (
    <>
      <div className="w-full bg-light-surfaceContainerLowest rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-right tracking-tight text-light-onSurface">
            Bem vindo(a), professor(a)
          </h1>
          <form method="post" className="space-y-4" onSubmit={(e) => onSubmmit}>
            {children}

            <SigaFilledButton type="submit" onClick={onSubmmit}>
              Acessar
            </SigaFilledButton>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
