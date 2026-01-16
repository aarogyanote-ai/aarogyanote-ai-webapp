"use client";

import Image from "next/image";
import TrackedLink from "./TrackedLink";
import TrackedButton from "./TrackedButton";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <TrackedLink
              href="/"
              linkText="logo"
              location="navigation"
              className="flex items-center space-x-3"
            >
              <Image
                src="/logo.png"
                alt="Aarogya Note AI Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-gray-900">
                Aarogya Note AI
              </span>
            </TrackedLink>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <TrackedLink
              href="/"
              linkText="Home"
              location="navigation"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </TrackedLink>
            <TrackedLink
              href="/privacy-policy"
              linkText="Privacy Policy"
              location="navigation"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </TrackedLink>
            <TrackedLink
              href="/terms"
              linkText="Terms"
              location="navigation"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Terms
            </TrackedLink>
            <TrackedButton
              href="https://play.google.com/store/apps/details?id=com.aarogyanote.ai"
              buttonId="download_app_nav"
              location="navigation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Download App
            </TrackedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <TrackedButton
              buttonId="mobile_menu_toggle"
              location="navigation"
              className="text-gray-700 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </TrackedButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
