import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/contexts/CartContext";

export async function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        {children}

        <Toaster />
      </CartProvider>
    </ThemeProvider>
  );
}
