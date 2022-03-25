import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/globals.css';

import { BaseProvider } from 'baseui';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';

import { Layout } from '@/components/Layout';
import { theme } from '@/styles/baseuiTheme';
import { styletron } from '@/styletron';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <StyletronProvider value={styletron}>
        <BaseProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BaseProvider>
      </StyletronProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
