import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function SwitchLanguage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const otherLocale = locale === "en" ? "km" : "en";
  console.log(oth);

  return (
    <Link href={"/" + otherLocale} prefetch={false}>
      {t("switchLocale", { locale: otherLocale })}
    </Link>
  );
}
