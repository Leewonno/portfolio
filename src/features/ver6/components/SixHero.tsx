import { SixHorizontalLine } from "./SixHorizontalLine";

function HeroTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-7xl font-bold text-neutral-200">{children}</h1>;
}

// function Name({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="text-9xl h-fit tracking-tight text-transparent bg-clip-text bg-linear-to-r from-neutral-200 to-neutral-900 [writing-mode:vertical-rl] [text-orientation:sideways] mb-30 relative">
//       <div className="w-[45%]">{children}</div>
//     </div>
//   );
// }

export function SixHero() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)] justify-end gap-18">
      {/* <Name>Leewonno</Name> */}
      <div className="flex flex-col">
        <HeroTitle>흐름이 끊기지 않는</HeroTitle>
        <HeroTitle>웹을 개발합니다.</HeroTitle>
      </div>
      <SixHorizontalLine />
      <div className="flex flex-col">
        <span className="text-neutral-400">
          2년 4개월 동안 웹을 개발하며, <br />
          복잡한 업무를 화면에 풀어왔습니다. <br />
          사용자가 이해하기 쉬운 흐름을 만듭니다.
        </span>
      </div>
    </div>
  );
}
