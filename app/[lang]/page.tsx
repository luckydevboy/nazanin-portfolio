import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Introduction from "../../components/Introduction";
import Educations from "@/components/Educations";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary =
    await getDictionary(lang);

  return (
    <main>
      <Introduction
        dictionary={dictionary}
      />
      <Educations
        dictionary={dictionary}
      />
      <Experiences
        dictionary={dictionary}
      />
      <Skills dictionary={dictionary} />
    </main>
  );
}
