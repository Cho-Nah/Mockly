import { Title } from "../features/Title";
import { Input } from "../features/Input";

export function MainPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-50" />

      <div className="absolute top-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl opacity-30" />
      <Title />
      <Input />
    </div>
  );
}
