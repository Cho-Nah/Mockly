import { useRef, useState } from "react";

export function Input({
  setShowTitle,
}: {
  setShowTitle: (val: boolean) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  function handleFocus() {
    if (inputRef.current) inputRef.current.focus();
  }

  function handleSendMessage() {
    console.log("Send Message", value);
    setShowTitle(false);
    setValue("");
  }

  return (
    <div className="w-[650px] mx-auto pt-4 p-2 bg-white/5 rounded-lg flex flex-col gap-4">
      <p className="text-white senRegular">
        Unlock more possibilities with PRO version
      </p>
      <div
        className="w-full flex items-center bg-white/10 rounded-lg px-[15px] pb-12 py-2 cursor-text"
        onClick={handleFocus}
      >
        <img
          src="../src/assets/icons/ic_outline-plus.svg"
          className="mr-[15px] cursor-pointer"
          alt="Add Img"
        ></img>
        <img
          src="../src/assets/icons/Line.svg"
          className="text-white mr-4"
        ></img>
        <input
          type="text"
          placeholder="Ask something..."
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          className="w-full bg-transparent text-white placeholder-white/60 outline-none text-lg senRegular"
        />
      </div>
    </div>
  );
}
