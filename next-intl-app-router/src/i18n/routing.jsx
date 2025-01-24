import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "km"],

  // Used when no locale matches
  defaultLocale: "en",
  // localeDetection: false,

  domains: [
    {
      domain: "us.example.com",
      defaultLocale: "en",
      // Optionally restrict the locales available on this domain
      locales: ["en"],
    },
    {
      domain: "ca.example.com",
      defaultLocale: "en",
      // If there are no `locales` specified on a domain,
      // all available locales will be supported here
    },
  ],
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
