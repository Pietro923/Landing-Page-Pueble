"use client"

import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Detecta si la URL contiene "case" o "jcb"
  const isCase = pathname.includes("/equipos/case");
  const isJcb = pathname.includes("/equipos/jcb");

  // Define los colores según la marca
  const hoverColor = isCase
    ? "hover:bg-red-600/20 hover:border-red-600/30"
    : isJcb
    ? "hover:bg-yellow-400/20 hover:border-yellow-400/30"
    : "hover:bg-gray-400/20 hover:border-gray-400/30"; // fallback neutro

  return (
    <Button
      onClick={() => router.back()}
      className={`fixed top-24 left-8 z-40 rounded-full p-3 shadow-lg transition-all duration-300 hover:translate-y-1 bg-white/10 border border-white/20 ${hoverColor}`}
      size="icon"
      variant="secondary"
    >
      <ArrowLeft className="h-5 w-5 text-white" />
      <span className="sr-only">Volver atrás</span>
    </Button>
  );
};

export default BackButton;
