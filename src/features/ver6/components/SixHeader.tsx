import Link from "next/link";

function HeaderLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-neutral-500 hover:text-neutral-200 transition-colors"
    >
      {children}
    </Link>
  );
}

export function SixHeader() {
  return (
    <header className="sticky top-0 w-full flex items-center justify-between gap-2 pt-6">
      <div className="flex gap-4 items-end">
        <span className="text-lg font-semibold text-neutral-200">이원노</span>
        <span className="text-neutral-500">Frontend Engineer</span>
      </div>
      <div className="flex gap-4">
        <HeaderLink href="#">소개</HeaderLink>
        <HeaderLink href="#">기술</HeaderLink>
        <HeaderLink href="#">프로젝트</HeaderLink>
        <HeaderLink href="#">연락처</HeaderLink>
      </div>
    </header>
  );
}
