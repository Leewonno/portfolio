import { Title } from "./common/Title";

type CaseStudyButtonProps = {
  title: string;
  desc: string;
};

function CaseStudyButton({ title, desc }: CaseStudyButtonProps) {
  return (
    <button
      type="button"
      aria-label={title}
      className="w-full h-12 flex items-center cursor-pointer"
    >
      <div className="flex flex-col items-start gap-1">
        <div className="text-gray-600">{title}</div>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </button>
  );
}

export function CaseStudy() {
  return (
    <div className="w-full flex flex-col gap-4 relative">
      <Title>Case Study</Title>
      <CaseStudyButton
        title="BUMIL Traffic Service ERP"
        desc="ERP 시스템 개발"
      />
      <CaseStudyButton title="노바위키" desc="위키 플랫폼 개발" />
    </div>
  );
}
