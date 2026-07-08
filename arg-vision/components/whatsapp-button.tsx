'use client'
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/constants";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  pulse?: boolean;
}

export function WhatsAppButton({
  children,
  className,
  variant = "solid",
  pulse = false,
}: WhatsAppButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const solid = variant === "solid";
    const enter = () =>
      gsap.to(el, {
        backgroundColor: solid ? "#FFD700" : "#E6B800",
        color: "#000000",
        scale: 1.04,
        duration: 0.3,
        overwrite: "auto",
      });
    const leave = () =>
      gsap.to(el, {
        backgroundColor: solid ? "#E6B800" : "rgba(230,184,0,0)",
        color: solid ? "#000000" : "#E6B800",
        scale: 1,
        duration: 0.3,
        overwrite: "auto",
      });
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, [variant]);

  return (
    <a
      ref={ref}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full px-8 py-4 font-body text-base font-semibold tracking-wide transition-shadow",
        variant === "solid"
          ? "bg-gold text-black"
          : "border-2 border-gold text-gold",
        pulse && "animate-pulse-gold",
        className
      )}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
}
