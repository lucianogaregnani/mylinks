import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";

type ButtonIconProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  content: string;
  placement?: "right" | "bottom" | "top" | "left";
};

function ButtonIcon({
  children,
  content,
  placement = "bottom",
  ...args
}: ButtonIconProps) {
  return (
    <Tippy
      content={<div className="text-[0.8rem] font-semibold">{content}</div>}
      placement={placement}
      animation="fade"
    >
      <button
        {...args}
        className="flex items-center justify-center hover:bg-slate-200 h-6 w-6 transition-all rounded-md"
      >
        {children}
      </button>
    </Tippy>
  );
}

export default ButtonIcon;
