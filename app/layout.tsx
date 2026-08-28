import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meysam Sayyad Talayi | Front End Developer",
  description: "Resume and selected work from Meysam Sayyad Talayi, a front end developer.",
  metadataBase: new URL("https://github.com/MeysamSayyad"),
  alternates: { canonical: "/" },
  openGraph: { title: "Meysam Sayyad Talayi | Front End Developer", description: "Resume and selected work from Meysam Sayyad Talayi.", type: "profile", url: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
