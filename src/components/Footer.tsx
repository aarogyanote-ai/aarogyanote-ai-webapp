import Image from "next/image";
import TrackedLink from "./TrackedLink";
import TrackedEmailLink from "./TrackedEmailLink";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Aarogya Note AI Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold">Aarogya Note AI</span>
            </div>
            <p className="text-gray-400">
              AI-powered medical documentation platform designed for
              healthcare professionals in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <TrackedEmailLink
                  href="mailto:support@aarogyanote.ai"
                  linkText="Contact Us"
                  location="footer"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </TrackedEmailLink>
              </li>
              <li>
                <TrackedLink
                  href="https://play.google.com/store/apps/details?id=com.aarogyanote.ai"
                  linkText="Download App"
                  location="footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Download App
                </TrackedLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <TrackedLink
                  href="/privacy-policy"
                  linkText="Privacy Policy"
                  location="footer"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href="/terms"
                  linkText="Terms & Conditions"
                  location="footer"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </TrackedLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Aarogya Note AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
