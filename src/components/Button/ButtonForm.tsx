type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size?: number;
  padding?: number;
  color?: "primary" | "secondary" | "white";
};

const buttonColor = {
  primary: {
    bgColor: "bg-violet-600",
    bgHover: "hover:bg-violet-900",
    textColor: "text-white",
  },
  secondary: {
    bgColor: "bg-slate-900",
    bgHover: "hover:bg-slate-800",
    textColor: "text-white",
  },
  white: {
    bgColor: "bg-white",
    bgHover: "hover:bg-gray-100/70",
    textColor: "text-slate-900",
  },
};

function ButtonForm({
  children,
  size,
  color = "primary",
  padding,
  ...props
}: ButtonProps) {
  const buttonSize = size ? `w-[${size}rem]` : "w-[70%]";
  const buttonPadding = padding ? `p-[${padding}rem]` : "p-2";

  const { bgColor, bgHover, textColor } = buttonColor[color];

  return (
    <button
      className={`flex justify-center gap-2 items-center ${bgColor} ${bgHover} ${textColor} ${buttonSize} ${buttonPadding} border-[1px] text-md rounded-full transition-all font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonForm;
