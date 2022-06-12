import { useState, useEffect } from "react";
import { useFetcher } from "@remix-run/react";
export default function useCompile(
  callback: (tCode: string) => void,
  errorCallback: (e: any) => void
) {
  const [translatedCode, setTranslatedCode] = useState("");
  const fetcher = useFetcher();
  const compile = (code: string) => {
    fetcher.submit({ code }, { method: "post", action: "/api/compile" });
  };
  useEffect(() => {
    if (fetcher.data?.code === 0) {
      const tCode = fetcher.data.data.transformedCode;
      console.log(tCode);
      setTranslatedCode(tCode);
      callback(tCode);
    } else if (fetcher.data?.code === 5001) {
      const e = fetcher.data.data.error;
      e.isCompileError = true;
      console.log(e);
      e.message = `${e.reasonCode} at ${e.loc.line}:${e.loc.column}`;
      errorCallback(e);
    } else if (fetcher.data?.code === 5002) {
      const e = {} as ExtendsionObject;
      e.isValidationError = true;
      errorCallback(e);
    }
  }, [fetcher.data]);
  return { compile, translatedCode, fetcher };
}
