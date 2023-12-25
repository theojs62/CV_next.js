import { useRouter } from "next/router";
import { useCallback } from "react";
import en from "../../public/static/en";
import fr from "../../public/static/fr";

const TRANSLATIONS = { en, fr };

export default function useTranslation() {
  const router = useRouter();
  const { locale, asPath } = router;

  const setLocale = useCallback(
    (locale) => {
      router.push(asPath, asPath, { locale });
    },
    [asPath]
  );

  const t = useCallback(
    (keyString) => {
      return TRANSLATIONS[locale][keyString];
    },
    [TRANSLATIONS, locale]
  );

  return { t, locale, setLocale };
}