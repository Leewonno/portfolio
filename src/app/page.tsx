import { HomeHero } from "@/features";

export default async function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-20">
      <div className="w-175">
        <HomeHero />
      </div>
    </div>
  );
}
