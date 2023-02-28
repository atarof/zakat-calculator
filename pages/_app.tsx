import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { Analytics } from '@vercel/analytics/react';
import GlobalStyle from "../components/styles/Global.styled";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <Analytics />
    </>
  );
}

export default MyApp;
