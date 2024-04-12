import { useState } from "react";
import GoogleIcon from "./Icons/GoogleIcon";
import GithubIcon from "./Icons/GithubIcon";

const text = {
  login: {
    title: "Welcome back",
    subtitle: "Log in to your MyLinks",
    primaryButton: "Log in",
    secondayButton: "Continue with",
  },
  register: {
    title: "Join MyLinks",
    subtitle: "Sign up for free!",
    primaryButton: "Create account",
    secondayButton: "Sign up with",
  },
};

function Form({ type }: { type: "login" | "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")

  return (
    <section className="h-screen w-full flex justify-between items-center">
      <article className="flex flex-col gap-6 w-full items-center">
        <h4 className="flex flex-col text-center">
          <span className="text-5xl font-bold text-gray-900">
            {text[type].title}
          </span>
          <span className="text-gray-400 text-md">{text[type].subtitle}</span>
        </h4>
        <form className="flex items-center flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
            required
          />

          {type === "register" && (
            <input
              required
              type="text"
              placeholder="your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
            />
          )}

          <input
            required
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
          />

          <button className="w-[70%] bg-violet-600 p-2 text-md rounded-full hover:bg-violet-900 transition-all text-white font-semibold">
            {text[type].primaryButton}
          </button>
        </form>
        <span className="text-gray-900">OR</span>
        <div className="w-full flex flex-col gap-3 items-center">
          <button className="flex justify-center gap-2 items-center w-[70%] text-slate-900 border-[1px] p-2 text-md rounded-full hover:bg-gray-100/70 transition-all font-semibold">
            <GoogleIcon />
            <span>{text[type].secondayButton} Google</span>
          </button>
          <button className="flex justify-center gap-2 items-center w-[70%] text-slate-900 border-[1px] p-2 text-md rounded-full hover:bg-gray-100/70 transition-all font-semibold">
            <GithubIcon />
            <span>{text[type].secondayButton} Github</span>
          </button>
        </div>
      </article>
      <div className="w-3/4 h-full bg-violet-400" />
    </section>
  );
}

export default Form;
