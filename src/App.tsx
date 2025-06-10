export function Main() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden flex flex-col justify-center items-center">
      {/* Световые пятна (blur-эффекты) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-50" />

      <div className="absolute top-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl opacity-30" />

      <div className="relative text-center text-white mb-54">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl">Good to See You!</h2>
          <h2 className="text-3xl">How can I help you?</h2>
        </div>
        <p className="text-gray-600/75 dark:text-sky-400/75 mt-4">
          I'm here 24/7 bro
        </p>
      </div>

      <div className="w-[650px] mx-auto pt-4 p-2 bg-white/5 rounded-lg flex flex-col gap-4">
        <p className="text-white">Unlock more possibilities with PRO version</p>
        <div className="w-full flex items-center bg-white/10 rounded-lg px-[15px] py-2">
          <img
            src="../src/assets/icons/ic_outline-plus.svg"
            className="mr-[15px]"
            alt="plus icon"
          ></img>
          <img
            src="../src/assets/icons/Line.svg"
            className="text-white mr-4"
          ></img>
          <input
            type="text"
            placeholder="Ask me..."
            className="w-full bg-transparent text-white placeholder-white/60 outline-none text-lg"
          />
        </div>
      </div>
    </div>
  );
}
