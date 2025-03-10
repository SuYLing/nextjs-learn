"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  return (
    <div className="grid grid-cols-[12rem_1fr]">
      <aside className="bg-gray-400 flex flex-col gap-4 p-4">
        <Link
          href={"/dashboard/customers"}
          className={clsx("bg-white hover:bg-yellow-100", {
            "bg-yellow-500": pathname === "/dashboard/customers",
          })}
        >
          customers
        </Link>
        <Link
          href={"/dashboard/invoices"}
          className={clsx("bg-white hover:bg-yellow-100", {
            "bg-yellow-500": pathname === "/dashboard/invoices",
          })}
        >
          invoices
        </Link>
      </aside>
      <main>
        {children}
        <footer>Footer</footer>
      </main>
    </div>
  )
}

export default DashboardLayout
