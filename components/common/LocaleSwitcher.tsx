"use client";

import type { SupportedLocales } from "@/types";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/constants";
import { Select, SelectValue, SelectGroup, SelectItem, SelectTrigger, SelectContent } from "@/components/ui";

type LocaleChangerProps = {
  locale: SupportedLocales;
  setLocale: (locale: SupportedLocales) => void;
};

const LocaleChanger = (props: LocaleChangerProps) => {
  const { locale, setLocale } = props;

  return (
    <Select
      onValueChange={(value: string) => {
        setLocale(value as SupportedLocales);
      }}
      value={locale}
      defaultValue={DEFAULT_LOCALE}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select locale" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {SUPPORTED_LOCALES.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {locale}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { LocaleChanger };
