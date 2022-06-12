import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/server-runtime";
import { RecoilRoot } from "recoil";
import { VechaiProvider } from "@vechaiui/react";

import styles from "./tailwind.css";
import globalCSS from "./styles/global.css";
import tailwindCSS from "./styles/tailwind.css";

export function links() {
  return [
    { rel: "stylesheet", href: tailwindCSS },
    { rel: "stylesheet", href: globalCSS },
    { rel: "stylesheet", href: styles }
  ];
}
export const meta: MetaFunction = () => {
  return { title: "js-debugger" };
};

export default function App() {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <RecoilRoot>
          <VechaiProvider>
            <Outlet />
          </VechaiProvider>
        </RecoilRoot>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
