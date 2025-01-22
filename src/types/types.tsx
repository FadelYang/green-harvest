import { TFunction } from 'i18next';

export type svgProps = {
  fill?: string;
  stroke?: string;
};

export type TranslationProps = {
  t: TFunction<"translation", undefined>;
}
