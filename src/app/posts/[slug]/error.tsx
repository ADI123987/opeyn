"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <h1>{error.message || "Something went wrong. Try reloading the page"}</h1>
  );
}
