import { onFormEndRequestedType } from ".";

interface SendFormButtonProps {
  onFormEndRequested: (type: onFormEndRequestedType) => void;
  comment: string;
}

export function SendFormButton({
  onFormEndRequested,
  comment,
}: SendFormButtonProps) {
  return (
    <>
      <button
        type="submit"
        disabled={comment.length == 0}
        className="flex rounded bg-violet-700  w-full items-center justify-center hover:bg-violet-500 transition-colors disabled:opacity-50"
        onSubmit={() => onFormEndRequested(true)}
      >
        Send
      </button>
    </>
  );
}
