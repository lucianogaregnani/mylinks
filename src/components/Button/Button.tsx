type Size = "small" | "medium" | "large" | "extraLarge";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "white" | "transparent";
  size?: Size | "full";
  textSize?: Size;
};

const buttonColor = {
  primary: {
    bgColor: "bg-violet-700",
    bgHover: "hover:bg-violet-900",
    textColor: "text-white",
  },
  secondary: {
    bgColor: "bg-slate-900",
    bgHover: "hover:bg-slate-800",
    textColor: "text-white ",
  },
  white: {
    bgColor: "bg-white",
    bgHover: "hover:bg-gray-100/70",
    textColor: "text-slate-900 ",
  },
  transparent: {
    bgColor: "border-[1px]",
    bgHover: "hover:bg-white",
    textColor: "text-slate-900",
  },
};

const buttonSize = {
  small: "w-[5.7rem] p-3",
  medium: "w-[8rem] h-[2.5rem] px-2",
  large: "w-[9rem] h-[3rem]",
  extraLarge: "w-[70%] p-3",
  full: "w-full p-3",
};

const fontSize = {
  small: "text-sm",
  medium: "text-md",
  large: "text-lg",
  extraLarge: "text-xl",
};

function Button({
  children,
  size = "small",
  color = "primary",
  textSize = "small",
  ...props
}: ButtonProps) {
  const { bgColor, bgHover, textColor } = buttonColor[color];
  return (
    <button
      className={`flex justify-center gap-2 items-center ${fontSize[textSize]} ${buttonSize[size]} ${bgColor} ${bgHover} ${textColor} ${buttonSize} border-[1px] rounded-full transition-all font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
