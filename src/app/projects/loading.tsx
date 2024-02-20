import { Spinner } from "@/components/icons/icons";

export default function loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-200 p-1 text-center dark:bg-slate-900">
      <Spinner className="mr-2 h-5 w-5 animate-spin" />
    </main>
  );
}
