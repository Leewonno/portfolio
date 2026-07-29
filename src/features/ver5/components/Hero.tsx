"use client";

export function Hero() {
  return (
    <div className="hero-root w-full flex flex-col gap-6 relative">
      <div className="overflow-hidden">
        <h1 className="hero-line-inner opacity-0 text-2xl font-medium text-gray-800 tracking-tight">
          이원노
        </h1>
      </div>
      <div className="overflow-hidden">
        <h2 className="hero-line-inner opacity-0 text-gray-600">
          흐름이 끊기지 않는 웹을 개발합니다.
        </h2>
      </div>
      <div className="overflow-hidden">
        <p className="hero-line-inner opacity-0 flex flex-col text-sm text-gray-600">
          <span>
            2년간 ERP 서비스를 개발하며 복잡한 업무를 화면에 풀어왔습니다.
          </span>
          <span>사용자가 헤매지 않고 이해하기 쉬운 흐름을 만듭니다.</span>
        </p>
      </div>
      <div className="hero-box rounded-xl opacity-0 bg-blue-100/60 h-15 w-15 absolute right-0 top-0"></div>
      <div className="hero-box rounded-xl opacity-0 bg-blue-100/60 h-15 w-15 absolute right-0 top-5"></div>
    </div>
  );
}
