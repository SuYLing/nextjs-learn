import type { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh w-full flex items-center justify-center">
      {children}
    </div>
  );
}

export default AuthLayout;
