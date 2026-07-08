import { MessageCircle, Mail, MapPin } from "lucide-react";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-heading text-2xl font-bold tracking-widest text-gold">
            ARG&nbsp;VISION
          </p>
          <p className="mt-3 max-w-xs text-sm text-mist/60">
            Websites premium que transformam negócios locais em referências
            digitais.
          </p>
        </div>

        <ul className="space-y-4 text-sm">
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center gap-3 text-mist/80 transition-colors hover:text-gold"
            >
              <MessageCircle className="h-5 w-5 text-gold" aria-hidden="true" />
              (17) 99650-1551 — WhatsApp
            </a>
          </li>
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex min-h-[44px] items-center gap-3 text-mist/80 transition-colors hover:text-gold"
            >
              <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </li>
          <li className="flex min-h-[44px] items-center gap-3 text-mist/80">
            <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
            Itu — São Paulo, Brasil
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 pt-6 text-center">
        <p className="text-xs text-mist/40">
          © {new Date().getFullYear()} ARG Vision. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
