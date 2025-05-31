import FormLogin from '@/components/pages/authentication/form-login';
import FormRegister from '@/components/pages/authentication/form-register';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";


export default function AuthenticationPage() {

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="register">Criar Conta</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <FormLogin/>
      </TabsContent>
      <TabsContent value="register">
          <FormRegister/>
      </TabsContent>
    </Tabs>
    </div>
  )
}
