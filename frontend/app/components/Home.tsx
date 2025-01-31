"use client";
import React, { useState, useEffect, useRef } from "react";
import { Heart, Sun, Moon, Menu, X, Mail } from "lucide-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import Link from "next/link";
import { cn } from "../libs/utils";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const threeContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Donate", href: "/donate" },
    { title: "Find Donors", href: "/find-donors" },
    { title: "Contact", href: "/contact" },
  ];

  const stats = [
    { label: "Active Donors", value: "10,000+" },
    { label: "Lives Saved", value: "25,000+" },
    { label: "Blood Banks", value: "500+" },
    { label: "Cities Covered", value: "100+" },
  ];

  return (
    <div
      className={cn(
        "min-h-screen w-full transition-colors duration-300",
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      )}
    >
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 shadow-md backdrop-blur-sm"
            : "bg-transparent",
          isDarkMode && "bg-gray-900/90"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  BloodLink
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="relative group"
                >
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      isDarkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-red-600"
                    )}
                  >
                    {item.title}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-50 dark:hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-fade-in">
              Save Lives Through
              <br />
              Blood Donation
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 animate-slide-up">
              Your donation can save up to three lives. Join our community of
              heroes today.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in">
              <Link href="/donor-registration">
                <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Become a Donor
                </button>
              </Link>
              <Link href="/find-donors">
                <button className="px-8 py-3 border-2 border-red-500 text-red-500 hover:bg-red-50 rounded-full font-medium transform hover:scale-105 transition-all duration-200">
                  Find Donors
                </button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-red-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={cn(
          "py-8 border-t",
          isDarkMode
            ? "border-gray-800 bg-gray-900"
            : "border-gray-200 bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-red-500" />
                <span className="text-xl font-bold">BloodLink</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Connecting blood donors with those in need, saving lives one
                donation at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/donate"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-500"
                  >
                    Donate Blood
                  </Link>
                </li>
                <li>
                  <Link
                    href="/centers"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-500"
                  >
                    Donation Centers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-500"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-500"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-red-500">
                  <TbBrandFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-500">
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-500">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-500">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} BloodLink. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default Home;
