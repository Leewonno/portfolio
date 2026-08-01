"use client";

import Link from "next/link";

export function End() {
  return (
    <div className="overflow-hidden">
      <div className="section-reveal w-full relative opacity-0 flex flex-col gap-25 sm:gap-35">
        {/* <div>
          <p>복잡한 업무를 이해하기 쉬운 화면으로,</p>
          <p>흐름이 끊기지 않는 웹을 개발합니다.</p>
        </div> */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl sm:text-xl font-medium text-gray-600 tracking-tight">
            읽어주셔서 감사합니다.
          </h1>
          <p className="text-sm text-gray-600">
            더 나누고 싶은 이야기가 있다면 연락 부탁드립니다.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ContactButton title="Phone" content="010-5253-4143" />
          <ContactButton
            href="mailto:dldnjssh123@naver.com"
            title="Email"
            content="dldnjssh123@naver.com"
          />
          <ContactButton
            href="https://github.com/Leewonno"
            title="GitHub"
            content="https://github.com/Leewonno"
          />
        </div>
      </div>
    </div>
  );
}

const contactButtonClassName = "flex gap-4 text-sm";

function ContactButton({
  href,
  content,
  title,
}: {
  title: string;
  content: string;
  href?: string;
}) {
  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={contactButtonClassName}
    >
      <div className="font-medium text-gray-400 min-w-12">{title}</div>
      <div className="font-light text-gray-600 underline">{content}</div>
    </Link>
  ) : (
    <div className={contactButtonClassName}>
      <div className="font-medium text-gray-400 min-w-12">{title}</div>
      <div className="font-light text-gray-600">{content}</div>
    </div>
  );
}
