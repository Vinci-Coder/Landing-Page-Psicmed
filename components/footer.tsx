"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 bg-[#FDE2E4]">
      <div className="container px-4 md:px-6">
        <div className="mt-0 pt-0 border-0 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vinci Code. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
