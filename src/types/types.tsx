import { TFunction } from 'i18next';
import { ReactNode } from 'react';

export type svgProps = {
  fill?: string;
  stroke?: string;
};

export type TranslationProps = {
  t: TFunction<"translation", undefined>;
}

export type BaseModalProps = {
  children: ReactNode,
  isModalOpen?: boolean,
  setIsModalOpen?: () => void,
  modalToggle?: () => void
}
