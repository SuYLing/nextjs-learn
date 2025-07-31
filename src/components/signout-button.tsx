"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const SignoutButton = () => {
  const router = useRouter();
  const signOut = async () =>
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.replace("/login"),
      },
    });
  return (
    <Button onClick={signOut} variant={"outline"}>
      sign out
    </Button>
  );
};
