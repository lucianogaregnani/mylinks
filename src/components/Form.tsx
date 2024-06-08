import GoogleIcon from "./Icons/GoogleIcon";
import GithubIcon from "./Icons/GithubIcon";
import Button from "./Button/Button";
import useAuth from "../hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserSchema, UserSchemaType } from "../schemas/UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const text = {
  login: {
    title: "Welcome back",
    subtitle: "Log in to your MyLinks",
    primaryButton: "Log in",
    secondaryButton: "Continue with",
    link: {
      to: "/register",
      description: "Do you not have an account? Sign up",
    },
  },
  register: {
    title: "Join MyLinks",
    subtitle: "Sign up for free!",
    primaryButton: "Create account",
    secondaryButton: "Sign up with",
    link: {
      to: "/login",
      description: "",
    },
  },
};

function Form({ type }: { type: "login" | "register" }) {
  const { login, signUp, signInWithProvider, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
  });

  const image =
    type === "login"
      ? "bg-[url('/src/assets/login.jpg')]"
      : "bg-[url('/src/assets/register.jpg')]";

  const handleFormSubmit: SubmitHandler<UserSchemaType> = (data) => {
    const { email, password } = data;
    if (type === "login") {
      login(email, password);
    } else {
      signUp(email, password);
    }
  };

  return (
    <section className="h-screen w-full flex justify-between items-center">
      <article className="flex flex-col gap-4 w-full items-center">
        <h4 className="flex flex-col text-center">
          <span className="text-5xl font-bold text-gray-900">
            {text[type].title}
          </span>
          <span className="text-gray-400 text-md">{text[type].subtitle}</span>
        </h4>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex items-center flex-col gap-4 w-full"
        >
          <span className="text-red-500">{error}</span>
          <div className="w-[70%] flex flex-col">
            <input
              type="text"
              placeholder="email"
              className="bg-gray-200 text-md p-2 rounded-md"
              defaultValue=""
              autoComplete="on"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </div>
          <div className="w-[70%] flex flex-col">
            <input
              required
              type="password"
              placeholder="your password"
              className="bg-gray-200 text-md p-2 rounded-md"
              defaultValue=""
              autoComplete="on"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password?.message}</span>
            )}
          </div>

          <Button color="primary" size="extraLarge">
            {text[type].primaryButton}
          </Button>
        </form>
        <span className="text-gray-900">OR</span>
        <div className="w-full flex flex-col gap-3 items-center">
          <Button
            color="white"
            size="extraLarge"
            onClick={() => signInWithProvider("google")}
          >
            <GoogleIcon />
            <span>{text[type].secondaryButton} Google</span>
          </Button>
          <Button
            color="white"
            size="extraLarge"
            onClick={() => signInWithProvider("github")}
          >
            <GithubIcon />
            <span>{text[type].secondaryButton} Github</span>
          </Button>
        </div>
        {type === "login" ? (
          <p className="text-slate-500">
            Do you not have an account?{" "}
            <Link to="/register" className="text-violet-600 font-semibold">
              Sign up
            </Link>
          </p>
        ) : (
          <p className="text-slate-500">
            Do you have an account?{" "}
            <Link to="/login" className="text-violet-600 font-semibold">
              Log in
            </Link>
          </p>
        )}
      </article>
      <div
        className={`w-3/4 h-full bg-violet-400 ${image} bg-cover bg-center hidden md:block`}
      />
    </section>
  );
}

export default Form;
