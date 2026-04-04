"use client";

import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import FormError from "@/components/FormError";
import type { ActionState } from "@/app/admin/actions";

type Props = {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  initialValue: string;
  initialImagePath: string | null;
};

export default function HomeContentForm({ action, initialValue, initialImagePath }: Props) {
  const [state, formAction] = useFormState(action, { error: "" });

  return (
    <form action={formAction} encType="multipart/form-data">
      <FormError message={state.error} />
      <div>
        <label htmlFor="homeIntro">Startseiten-Text</label>
        <textarea id="homeIntro" name="homeIntro" defaultValue={initialValue} required />
      </div>
      <div>
        <label htmlFor="homeImage">Bild unter der Startseiten-Box (optional)</label>
        <input
          id="homeImage"
          name="homeImage"
          type="file"
          accept="image/jpeg,image/png,image/webp"
        />
      </div>
      {initialImagePath ? (
        <div>
          <img src={initialImagePath} alt="Aktuelles Startseitenbild" className="teaser-preview" />
          <label>
            <input type="checkbox" name="removeHomeImage" /> Bild entfernen
          </label>
        </div>
      ) : null}
      <SubmitButton label="Text speichern" />
    </form>
  );
}
