export function SixSectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex">{children}</section>;
}
