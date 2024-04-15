type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "white";
  size?: "small" | "medium" | "large" | "extraLarge";
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

const buttonSize = {
  small: "w-[5rem] h-[2rem]",
  medium: "w-[6rem] h-[2.5rem]",
  large: "w-[7rem] h-[3rem]",
  extraLarge: "w-[70%] h-[2.5rem]",
};

function ButtonForm({
  children,
  size = "small",
  color = "primary",
  ...props
}: ButtonProps) {
  const { bgColor, bgHover, textColor } = buttonColor[color];
  return (
    <button
      className={`flex justify-center gap-2 items-center ${buttonSize[size]} ${bgColor} ${bgHover} ${textColor} ${buttonSize} border-[1px] text-md rounded-full transition-all font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonForm;
