"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const DarkModeSwitch = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={cn(
        "group mr-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent hover:bg-primary focus:border-transparent focus:bg-primary dark:border-transparent dark:bg-white/[.15] dark:hover:bg-primary lg:ml-5",
        className,
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="dark-mode-light h-4 w-4 fill-slate-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
      >
        <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="dark-mode-dark hidden h-4 w-4 fill-slate-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
      </svg>
    </button>
  );
};
