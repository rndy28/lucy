import React, { useState } from "react";

export default function useSearchTerm() {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return { query, handleChange };
}
