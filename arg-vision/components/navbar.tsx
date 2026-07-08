'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#inicio" className="font-heading text-xl font-bold tracking-widest text-gold">
          ARG&nbsp;VISION
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-mist/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold/60 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-black"
            >
              Fale conosco
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-gold md:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="glass-card mx-4 flex flex-col gap-1 p-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base text-mist/90 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-gold px-4 py-3 text-center font-semibold text-black"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
