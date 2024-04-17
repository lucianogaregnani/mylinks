import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";

type ButtonIconProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  content: string;
};

function ButtonIcon({ children, content, ...args }: ButtonIconProps) {
  return (
    <Tippy
      content={<div className="text-[0.8rem] font-semibold">{content}</div>}
      placement="bottom"
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
