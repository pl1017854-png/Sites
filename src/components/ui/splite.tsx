"use client";

import { Component, Suspense, lazy, type ReactNode } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/**
 * Se a cena 3D falhar (rede, adblock, WebGL indisponível), a página de vendas
 * não pode cair junto — degrada para a foto real do produto.
 */
class SplineErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative h-full w-full">
          <img
            src="/images/hero.jpg"
            alt="Luminária Lua 3D acesa sendo segurada no escuro"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>
      );
    }
    return this.props.children;
  }
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <SplineErrorBoundary>
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-24 w-24 animate-pulse rounded-full bg-moon-glow/20 blur-xl" />
          </div>
        }
      >
        <Spline scene={scene} className={className} />
      </Suspense>
    </SplineErrorBoundary>
  );
}
