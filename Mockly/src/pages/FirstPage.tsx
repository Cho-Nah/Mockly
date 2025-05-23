import { Header } from "../features/Header";
import { Title } from "../features/Title";
import { FooterPlace } from "../features/Footer";

export function FirstPage() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <Header />
        <Title />
        <FooterPlace />
      </div>
    </>
  );
}
