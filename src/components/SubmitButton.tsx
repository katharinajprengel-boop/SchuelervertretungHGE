"use client";

import { useFormStatus } from "react-dom";

type Props = {
  label: string;
};

export default function SubmitButton({ label }: Props) {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Bitte warten..." : label}</button>;
}
