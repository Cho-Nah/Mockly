import "../index.css";

export function Title() {
  return (
    <div className="relative text-center text-white mb-54">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-poppins">Good to See You!</h2>
        <h2 className="text-3xl">How can I help you?</h2>
      </div>
      <p className="text-gray-600/75 dark:text-sky-400/75 mt-4">
        I'm here 24/7 bro
      </p>
    </div>
  );
}
