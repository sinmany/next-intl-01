'use client'
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@mui/material";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  const route = useRouter();
  const handleRoute = () => {
    { route.push('/service') }
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <div>
        <Button onClick={handleRoute}>
          got to service page
        </Button>
      </div>
    </div>
  );
}
