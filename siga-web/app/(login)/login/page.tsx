import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <Card className="md:max-w-[500px]">
      <CardHeader>
        <CardTitle>SIGA Fatec</CardTitle>
        <CardDescription>
          Informe seu e-mail institucional para prosseguir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" method="post">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <Label>E-mail</Label>
              <Input type="email" placeholder="E-mail" />
            </div>

            <div className="flex flex-col">
              <Label>Senha</Label>
              <Input type="password" placeholder="Senha" />{" "}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
