import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/globals.css';

import { BaseProvider } from 'baseui';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Provider as StyletronProvider } from 'styletron-react';

import { LoadingBar } from '@/components/Common/LoadingBar';
import { Layout } from '@/components/Layout';
import { theme } from '@/styles/baseuiTheme';
import { styletron } from '@/styletron';
import useRouterChange from '@/utils/hooks/useRouterChange';

function MyApp({ Component, pageProps }: AppProps) {
  const { state } = useRouterChange();
  return (
    <ThemeProvider attribute="class">
      <StyletronProvider value={styletron}>
        <BaseProvider theme={theme}>
          <Layout>
            <LoadingBar
              isRouteChanging={state.isRouteChanging}
              key={state.loadingKey}
            />
            <Component {...pageProps} />
          </Layout>
        </BaseProvider>
      </StyletronProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
