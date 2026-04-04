"use client";

import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import FormError from "@/components/FormError";
import type { ActionState } from "@/app/admin/actions";

type Props = {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  initialValue: string;
};

export default function HomeContentForm({ action, initialValue }: Props) {
  const [state, formAction] = useFormState(action, { error: "" });

  return (
    <form action={formAction}>
      <FormError message={state.error} />
      <div>
        <label htmlFor="homeIntro">Startseiten-Text</label>
        <textarea id="homeIntro" name="homeIntro" defaultValue={initialValue} required />
      </div>
      <SubmitButton label="Text speichern" />
    </form>
  );
}
