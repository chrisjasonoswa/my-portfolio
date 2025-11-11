import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/layout/nav";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chris Jason Oswa – Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} 
          min-h-screen bg-background text-foreground antialiased font-sans transition-colors duration-300`
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global layout structure */}
          <div className="main-div">
            <div className="
              flex w-full flex-col min-h-screen
              px-12 py-6
              lg:px-16 lg:py-8
              max-w-[1920px]
            ">
              <Nav/>
              <main className="flex-1">
                
                {children}
              </main>
              <footer className="mt-8">
                <hr className="border-t border-secondary/10 dark:border-white/10 mb-4" />
                <div className="text-center text-secondary dark:text-white text-xs">© {new Date().getFullYear()} Chris Jason A. Oswa. All rights reserved.</div>
              </footer>
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
