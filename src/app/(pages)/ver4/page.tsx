import type { Metadata } from "next";
import { ScrollDirectionProvider } from "@/context/ScrollDirectionContext";
import {
  HomeIntro,
  HomeNavigation,
  HomePortfolio,
  HomeResume,
} from "@/features";

export const metadata: Metadata = {
  title: "ver4",
  alternates: {
    canonical: "/ver4",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default async function Ver4({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <ScrollDirectionProvider>
      <HomeIntro />
      <HomePortfolio q={q} />
      <HomeResume />
      <HomeNavigation />
    </ScrollDirectionProvider>
  );
}
