import { useState, useEffect, useRef } from "react";

export function Input() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [hideTitle, setHideTitle] = useState(true);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  // Автоматическое изменение высоты
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  // Сброс высоты
  useEffect(() => {
    if (value === "" && textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }, [value]);

  function handleFocus() {
    if (textareaRef.current) textareaRef.current.focus();
  }

  function handleSendMessage() {
    if (value.trim() === "") return;

    console.log("Send Message", value);
    setMessages([...messages, value]);
    setValue("");
    setHideTitle(false);
  }

  return (
    <div className="relative text-center text-white mb-[5%]">
      {hideTitle && (
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

      <div className="w-[320px] mx-auto mb-4 flex flex-col">
        {/* {messages.map((message, index) => (
          <div
            className="bg-white/10 rounded-lg p-3 mb-2 text-left whitespace-pre-wrap break-words"
            key={index}
          >
            {message}
          </div>
        ))} */}
      </div>

      <div
        className={`w-[650px] mx-auto pt-4 p-2 bg-white/5 rounded-lg flex flex-col gap-4 ${
          hideTitle ? "mt-24" : "mt-64"
        }`}
      >
        <p className="text-white senRegular flex justify-start">
          Unlock more possibilities with PRO version
        </p>
        <div
          className="w-full flex items-center bg-white/10 rounded-lg px-[15px] py-2 cursor-text"
          onClick={handleFocus}
        >
          <img
            src="../src/assets/icons/ic_outline-plus.svg"
            className="mr-[15px] cursor-pointer"
            alt="Add Img"
          />
          <img
            src="../src/assets/icons/Line.svg"
            className="text-white mr-4"
            alt=""
          />
          <textarea
            placeholder="Ask something..."
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            rows={1}
            className="w-full max-h-[200px] resize-none bg-transparent text-white placeholder-white/60 outline-none text-lg senRegular overflow-y-auto"
          />
        </div>
      </div>
    </div>
  );
}
