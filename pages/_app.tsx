import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NoSSRWrapper from "@/components/no-ssr";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

let c;

if (typeof window !== "undefined") {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: process.env.NEXT_PUBLIC_LD_CLIENT_KEY || "",
    context: {
      kind: "multi",
      user: {
        key: "0",
        name: "anonymous",
      },
      device: {
        key: "0",
        operating_system: "MacOS",
        mobile_device: "False",
      },
    },
  });

  c = ({ Component, pageProps }: AppProps) => {
    return (
      <NoSSRWrapper>
        <LDProvider>
          <Component {...pageProps} />
        </LDProvider>
      </NoSSRWrapper>
    );
  };
} else {
  c = () => null;
}

export default c;
