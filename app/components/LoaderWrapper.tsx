"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}
