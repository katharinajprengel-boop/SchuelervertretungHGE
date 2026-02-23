"use client";

import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import FormError from "@/components/FormError";
import type { ActionState } from "@/app/admin/actions";

type Props = {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
};

export default function AdminForm({ action }: Props) {
  const [state, formAction] = useFormState(action, { error: "" });

  return (
    <form action={formAction}>
      <FormError message={state.error} />
      <div>
        <label htmlFor="email">E-Mail</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password">Passwort</label>
        <input id="password" name="password" type="password" minLength={8} required />
      </div>
      <SubmitButton label="Admin erstellen" />
    </form>
  );
}
