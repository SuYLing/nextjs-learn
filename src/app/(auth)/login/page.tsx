import { LoginButton } from "@/components/login-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// const formSchema = z.object({
//   email: z.email("请正确输入邮箱！"),
//   password: z.string().min(8, "密码需要大于八位").max(16, "密码需要小于16位"),
// });
function Login() {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  // });
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>创建账户</CardTitle>
          <CardDescription>输入下面的邮箱来创建您的账户</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <LoginButton />
          <div className="grid grid-cols-3 gap-1 place-items-center">
            <Separator />
            <span className="text-muted-foreground text-sm">或继续使用</span>
            <Separator />
          </div>
          {/* <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>邮箱</FormLabel>
                      <FormControl>
                        <Input placeholder="user@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>密码</FormLabel>
                      <FormControl>
                        <Input placeholder="xxxx" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  创建账户
                </Button>
              </form>
            </Form>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
