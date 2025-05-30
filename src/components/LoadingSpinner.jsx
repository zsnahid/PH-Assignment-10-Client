import { Spinner } from "@material-tailwind/react";

export default function LoadingSpinner() {
  return (
    <div className="min-h-[50vh] max-w-screen-2xl w-11/12 mx-auto my-10 grid">
      <Spinner className="h-12 w-12 text-red-900 place-self-center" />
    </div>
  );
}
