"use client";

import { useState, useEffect } from "react";
import { Router as WouterRouter, useLocation } from "wouter";

// Custom hook to make wouter work with Next.js
function useBrowserLocation() {
  const [location, setLocation] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    // Handle pathname change
    const handlePathnameChange = () => {
      setLocation(window.location.pathname);
    };

    // Handle the initial pathname
    if (typeof window !== "undefined") {
      handlePathnameChange();
      window.addEventListener("popstate", handlePathnameChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", handlePathnameChange);
      }
    };
  }, []);

  const navigate = (to) => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", to);
      setLocation(to);
    }
  };

  return [location, navigate];
}

export function RouterProvider({ children }) {
  return (
    <WouterRouter hook={useBrowserLocation}>
      {children}
    </WouterRouter>
  );
}
