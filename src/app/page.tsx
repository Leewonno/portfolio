import { CaseStudy, Hero } from "@/features";

export default async function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-20 pt-40">
      <div className="w-170 flex flex-col gap-40">
        <Hero />
        <CaseStudy />
      </div>
    </div>
  );
}
