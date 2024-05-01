import { useEffect, useState } from "react";
import Container from "@mui/material/Container";

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
    <Container maxWidth="lg">
      {isLoading ? "Loading..." : null}
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
}
