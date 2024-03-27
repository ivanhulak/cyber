import { type ObjectKeysAsString } from "./types";
import { Locale } from "@/i18n.config";

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type AvailableDictionaryStrings = ObjectKeysAsString<
  Awaited<ReturnType<typeof dictionaries.en>>
>;

const dictionaries = {
  en: () => import("./locales/en.json").then((module) => module.default),
  uk: () => import("./locales/uk.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

function parseDictionary(
  dictionary: Awaited<ReturnType<typeof dictionaries.en>>,
  pathString: AvailableDictionaryStrings,
): string {
  let translation: any = dictionary;
  const pathArray = pathString.split(".");

  pathArray.forEach((i) => {
    translation = translation?.[i];
  });

  return translation ?? pathString;
}

export const useTranslate = async (
  locale: Locale,
): Promise<{
  t: (pathString: AvailableDictionaryStrings) => string;
}> => {
  const currentDictionary = await getDictionary(locale);

  const translate = (pathString: AvailableDictionaryStrings): string => {
    return parseDictionary(currentDictionary, pathString);
  };

  return { t: translate };
};

export const directTranslate = async (
  locale: Locale,
  pathString: AvailableDictionaryStrings,
) => {
  const dictionary = await getDictionary(locale);

  return parseDictionary(dictionary, pathString);
};