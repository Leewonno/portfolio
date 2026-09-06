import { SixContainer, SixHeader, SixHero, SixSkills } from "@/features";
import { SixProjects } from "@/features/ver6/components/SixProjects";

export default async function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <SixContainer>
        <SixHeader />
        <SixHero />
        <SixSkills />
        <SixProjects />
      </SixContainer>
    </div>
  );
}
