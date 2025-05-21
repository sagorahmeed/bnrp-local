import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import Footer from '@/components/Footer'

import {routing} from '@/i18n/routing';
import Navigation from '@/components/Navbar/Navigation';
import './styles.css';

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;

  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body cz-shortcut-listen="true">
        <NextIntlClientProvider>
          <Navigation/>
           {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
