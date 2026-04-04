"use client";

import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import FormError from "@/components/FormError";
import type { ActionState } from "@/app/admin/actions";

type PostValues = {
  title: string;
  description: string | null;
  content: string | null;
  teaserImagePath: string | null;
  published: boolean;
  pinned: boolean;
};

type Props = {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  initialValues: PostValues;
  requirePdf: boolean;
};

export default function PostForm({ action, initialValues, requirePdf }: Props) {
  const [state, formAction] = useFormState(action, { error: "" });

  return (
    <form action={formAction} encType="multipart/form-data">
      <FormError message={state.error} />
      <div>
        <label htmlFor="title">Titel</label>
        <input id="title" name="title" defaultValue={initialValues.title} required />
      </div>
      <div>
        <label htmlFor="description">Beschreibung</label>
        <textarea
          id="description"
          name="description"
          defaultValue={initialValues.description ?? ""}
        />
      </div>
      <div>
        <label htmlFor="content">Inhalt</label>
        <textarea id="content" name="content" defaultValue={initialValues.content ?? ""} />
      </div>
      <div>
        <label htmlFor="pdf">PDF-Datei{requirePdf ? "" : " (optional)"}</label>
        <input
          id="pdf"
          name="pdf"
          type="file"
          accept="application/pdf"
          required={requirePdf}
        />
      </div>
      <div>
        <label htmlFor="teaserImage">Vorschaubild / Teaserbanner (optional)</label>
        <input
          id="teaserImage"
          name="teaserImage"
          type="file"
          accept="image/jpeg,image/png,image/webp"
        />
      </div>
      {initialValues.teaserImagePath ? (
        <div>
          <img
            src={initialValues.teaserImagePath}
            alt="Aktuelles Vorschaubild"
            className="teaser-preview"
          />
          <label>
            <input type="checkbox" name="removeTeaserImage" /> Vorschaubild entfernen
          </label>
        </div>
      ) : null}
      <div className="actions">
        <label>
          <input
            type="checkbox"
            name="published"
            defaultChecked={initialValues.published}
          />{" "}
          Veröffentlicht
        </label>
        <label>
          <input type="checkbox" name="pinned" defaultChecked={initialValues.pinned} />{" "}
          Gepinnt
        </label>
      </div>
      <SubmitButton label="Speichern" />
    </form>
  );
}
