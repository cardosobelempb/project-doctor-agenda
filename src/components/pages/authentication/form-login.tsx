"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { getValidationMessages } from '@/shared/validations/get-validation-messages'

const {messages,placeholders} = getValidationMessages("pt");

const formLoginSchema = z.object({
  email: z.string().trim().min(1, { message: messages.required }).email({ message: messages.invalidEmail }),
  password: z.string().trim().min(8, { message: messages.minLength("password", 8) }),
});


export default function FormLogin() {
  const formLogin = useForm<z.infer<typeof formLoginSchema>>({
      resolver: zodResolver(formLoginSchema),
      defaultValues: {
        email: "",
        password: ""
      },
    })
  
    function onSubmit(values: z.infer<typeof formLoginSchema>) {
      console.log(values)
    }
  return (
    <Card>
    <Form {...formLogin}>
    
      <form onSubmit={formLogin.handleSubmit(onSubmit)} className="space-y-8">
    <CardHeader>
      <CardTitle>Criar Conta</CardTitle>
      <CardDescription>
      Crie uma conta para continuar
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
        
        <FormField
          control={formLogin.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={placeholders.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={formLogin.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder={placeholders.password} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    </CardContent>
    <CardFooter>
        <Button className='w-full' type="submit">Criar conta</Button>
      
    </CardFooter>
      </form>
    </Form>
  </Card>
  )
}
