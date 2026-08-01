type CardButtonProps = {
  title: string;
  desc: string;
  subtitle?: string;
  onClick?: () => void;
};

export function CardButton({
  title,
  desc,
  subtitle,
  onClick,
}: CardButtonProps) {
  return (
    <button
      type="button"
      aria-label={title}
      onClick={onClick}
      className={`group w-full sm:h-12 flex items-center ${onClick ? "cursor-pointer" : "cursor-default"}`}
    >
      <div className="flex flex-col items-start gap-0.5 sm:gap-1">
        <div className="relative text-gray-600 flex gap-2 items-center">
          <span className="whitespace-nowrap">{title}</span>
          {subtitle && (
            <span className="text-gray-400 text-sm whitespace-nowrap">
              {subtitle}
            </span>
          )}
          <span className="absolute -bottom-1 left-0 h-1 w-full origin-left scale-x-0 bg-blue-100/60 transition-transform duration-600 ease-out group-hover:scale-x-100" />
        </div>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </button>
  );
}
