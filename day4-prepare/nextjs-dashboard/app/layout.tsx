import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

// const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body >{children}</body>
    </html>
  );
}
