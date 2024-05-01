import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import AppHeader from "./components/AppHeader";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/api/challenge")
      .then((r) => r.text())
      .then(setHtml)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  if (error != null) {
    console.error(error);
    return <div>Error! Check console...</div>;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <AppHeader />
      {isLoading ? "Loading..." : null}
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
}
