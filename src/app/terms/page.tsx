import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions - Aarogya Note AI",
  description:
    "Terms and Conditions for Aarogya Note AI - Learn about the terms of use for our AI-powered medical documentation platform.",
  robots: "index, follow",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 mb-8">Last Updated: October 3, 2025</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-6">
              By accessing and using the Aarogya Note AI mobile application
              ("the App"), you accept and agree to be bound by the terms and
              provisions of this agreement. If you do not agree to these terms,
              please do not use the App.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-700 mb-4">
              Aarogya Note AI is an AI-powered medical scribe application
              designed for healthcare professionals in India. The App provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Real-time audio transcription of patient consultations</li>
              <li>
                AI-generated SOAP (Subjective, Objective, Assessment, Plan)
                notes
              </li>
              <li>Medication recommendations based on clinic inventory</li>
              <li>PDF generation of clinical documentation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. User Eligibility
            </h2>
            <p className="text-gray-700 mb-4">
              This App is intended exclusively for licensed healthcare
              professionals practicing in India. By using this App, you
              represent and warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>You are a licensed medical practitioner</li>
              <li>
                You have the legal authority to practice medicine in India
              </li>
              <li>You will use the App only for legitimate medical purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Medical Disclaimer
            </h2>
            <p className="text-gray-700 mb-6">
              The App is a documentation and transcription tool only. All
              AI-generated suggestions, including medication recommendations,
              require doctor approval before implementation. The App does not
              replace professional medical judgment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Data Storage and Retention
            </h2>
            <p className="text-gray-700 mb-4">
              All data is stored securely in India in compliance with local
              regulations:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Audio recordings: Retained for 90 days</li>
              <li>Clinical notes: Retained for up to 10 years</li>
              <li>
                Patient data: Encrypted and stored with appropriate security
                measures
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Patient Consent
            </h2>
            <p className="text-gray-700 mb-6">
              You are responsible for obtaining appropriate patient consent
              before recording consultations. The App provides consent capture
              mechanisms, but ultimate responsibility lies with the healthcare
              provider.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">
              As a user of this App, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Review and verify all AI-generated content before use</li>
              <li>
                Comply with all applicable medical regulations and standards
              </li>
              <li>Report any technical issues or errors promptly</li>
              <li>Not share patient data inappropriately</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-6">
              All content, features, and functionality of the App are owned by
              Aarogya Note AI and are protected by copyright, trademark, and
              other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, Aarogya Note AI shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of the App.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Modifications to Terms
            </h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. Users will
              be notified of significant changes. Continued use of the App after
              modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Termination
            </h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to terminate or suspend your account at any
              time for violations of these terms or for any other reason at our
              discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              12. Governing Law
            </h2>
            <p className="text-gray-700 mb-6">
              These terms shall be governed by and construed in accordance with
              the laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of the courts in India.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms & Conditions, please contact us
              at:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Email: support@aarogyanote.ai</li>
              <li>Phone: +91-XXX-XXX-XXXX</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-gray-700 text-center">
                By using Aarogya Note AI, you acknowledge that you have read,
                understood, and agree to be bound by these Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
