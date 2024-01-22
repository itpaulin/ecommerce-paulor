import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import Footer from "@/components/ui/footer";
import { CartProvider } from "@/providers/cart";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PauloR - Ecommerce Shop",
  description: "Project developed by Paulo Ricardo Malta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-full flex-col">
            <AuthProvider>
              <CartProvider>
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
              </CartProvider>
            </AuthProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
