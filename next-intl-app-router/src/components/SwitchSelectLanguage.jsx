"use client";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "../i18n/routing";

export default function SwitchSelectLanguage({ children, defaultValue }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    // { pathname, params } keep the same page when language changed
    //  { locale: nextLocale } tell the next application (this is the new language should be display)
    router.replace({ pathname, params }, { locale: nextLocale });
  }

  return (
    <div
      style={{ padding: "4px", backgroundColor: "white", borderRadius: "4px" }}
    >
      <select
        defaultValue={defaultValue}
        onChange={onSelectChange}
        style={{
          border: "none",
          outline: "none",
          borderColor: "white",
        }}
      >
        {children}
      </select>
    </div>
  );
}
