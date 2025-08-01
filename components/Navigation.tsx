"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShoppingCart, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const toggleDarkMode = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-primary hover:text-coffee-green transition-colors"
          >
            BeamsCoffee
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors font-medium ${
                  isActive(href)
                    ? "text-coffee-green"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}

            <Link href="/cart">
              <div className="relative inline-block">
                <Button
                  variant="outline"
                  size="sm"
                  className="relative px-3 dark:border-white/20 border-gray-300"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {itemCount > 0 && (
                    <span
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-gray-900 shadow-sm"
                      aria-label={`${itemCount} items in cart`}
                    >
                      {itemCount}
                    </span>
                  )}
                </Button>
              </div>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 bg-background border-t border-border">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-2 py-2 rounded-md font-medium transition-colors ${
                    isActive(href)
                      ? "text-coffee-green"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}

              <Link href="/cart" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full bg-red-600 relative mt-2 flex items-center justify-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1">
                      <Badge className="bg-red-600 text-white rounded-full text-xs px-2 py-0.5 shadow">
                        {itemCount}
                      </Badge>
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
