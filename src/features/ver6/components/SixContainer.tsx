import { SixLine } from "./SixLine";
import { SixDot } from "./SixDot";

export function SixContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex justify-center bg-neutral-800">
      <div className="w-220 flex flex-col bg-neutral-800 relative z-0">
        <div className="px-12 pb-8 flex flex-col gap-32">{children}</div>
        <SixLine />
        <SixDot />
      </div>
    </div>
  );
}
