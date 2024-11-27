"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import loginValidationSchema from "@/src/schemas/logoin.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useUserLogin } from "@/src/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();

  const redirect = searchParams.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <div className="flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm
          onSubmit={onSubmit}
          resolver={zodResolver(loginValidationSchema)}
        >
          <div className="py-3">
            <FXInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FXInput name="password" label="Password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </FXForm>
        <div className="text-center">
          Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;