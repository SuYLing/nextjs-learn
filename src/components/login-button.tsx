"use client";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

export const LoginButton = () => {
  const signinWithGithub = async () =>
    await authClient.signIn.social({
      callbackURL: "/home",
      provider: "github",
    });
  const signinWithGoogle = async () =>
    await authClient.signIn.social({
      callbackURL: "/home",
      provider: "google",
    });
  return (
    <div className="flex items-center justify-between">
      <Button
        className="w-[45%]"
        variant={"outline"}
        onClick={signinWithGithub}
      >
        <FaGithub />
        GitHub
      </Button>
      <Button
        className="w-[45%]"
        variant={"outline"}
        onClick={signinWithGoogle}
      >
        <FaGoogle />
        Google
      </Button>
    </div>
  );
};
