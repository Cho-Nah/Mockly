import { message, setMessage } from "./Input";

export function Title() {
  return (
    <div className="relative text-center text-white mb-[10%] ">
      {message && (
        <>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl senMedium">Good to See You!</h2>
            <h2 className="text-3xl senMedium">How can I help you?</h2>
          </div>
          <p className="text-gray-600/75 dark:text-sky-400/75 mt-4 senRegular">
            I'm here 24/7 bro
          </p>
        </>
      )}
    </div>
  );
}
