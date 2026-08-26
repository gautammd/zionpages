"use client";

import { Button } from "@/components/ui/button";

import { deletePiece } from "./actions";

// Submits the surrounding piece form to the delete action instead of save;
// formNoValidate skips the required-field checks that only matter for saving.
export function DeleteButton() {
  return (
    <Button
      type="submit"
      variant="destructive"
      formAction={deletePiece}
      formNoValidate
      onClick={(event) => {
        if (!window.confirm("Delete this piece? This cannot be undone.")) {
          event.preventDefault();
        }
      }}
    >
      Delete
    </Button>
  );
}
