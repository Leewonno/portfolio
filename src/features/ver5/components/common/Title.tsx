export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-normal font-semibold text-gray-600 uppercase mb-2 ${className}`}
    >
      {children}
    </h2>
  );
}
