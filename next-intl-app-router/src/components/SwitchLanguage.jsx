import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function SwitchLanguage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const otherLocale = locale === "en" ? "km" : "en";

  return (
    <Link href={"/" + otherLocale} prefetch={false}>
      {/* {t("switchLocale", { locale: otherLocale })} */}
      {otherLocale === "en" ? (
        <Image
          src="/en.png"
          width={20}
          height={20}
          alt="Picture of the author"
        />
      ) : (
        <Image
          src="/km.png"
          width={20}
          height={20}
          alt="Picture of the author"
        />
      )}
    </Link>
  );
}
