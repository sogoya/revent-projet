import Image from "next/image";
import Gallerie from "@/app/components/Gallerie";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Gallerie />
    </div>
  );
}
