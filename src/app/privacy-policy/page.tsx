import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Aarogya Note AI",
  description:
    "Privacy Policy for Aarogya Note AI - Learn how we protect your personal and patient data in compliance with Indian data protection laws.",
  robots: "index, follow",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last Updated: October 3, 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              At Aarogya Note AI, we are committed to protecting the privacy and
              security of your personal and patient data. This Privacy Policy
              explains how we collect, use, store, and protect your information
              in compliance with Indian data protection laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              1.1 Healthcare Professional Information
            </h3>
            <p className="text-gray-700 mb-4">
              When you register and use our App, we collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Name (First and Last)</li>
              <li>Email address</li>
              <li>Mobile number</li>
              <li>Professional credentials and license information</li>
              <li>Clinic/Hospital affiliation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              1.2 Patient Data (Processed on Your Behalf)
            </h3>
            <p className="text-gray-700 mb-4">
              As part of the documentation service, we process:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Audio recordings of consultations</li>
              <li>Transcribed consultation text</li>
              <li>Patient demographics (name, age, contact)</li>
              <li>Medical history and symptoms</li>
              <li>Diagnoses and treatment plans</li>
              <li>Medication prescriptions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              1.3 Technical Data
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Device information (type, OS version)</li>
              <li>App usage analytics</li>
              <li>Log files and error reports</li>
              <li>Network information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. How We Use Your Information
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              2.1 Primary Uses
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Provide audio transcription services</li>
              <li>Generate AI-powered SOAP notes</li>
              <li>Create medication recommendations</li>
              <li>Generate clinical documentation PDFs</li>
              <li>Maintain audit logs for compliance</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              2.2 Secondary Uses
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Improve App functionality and accuracy</li>
              <li>Provide customer support</li>
              <li>Send important service updates</li>
              <li>Ensure security and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Data Storage and Security
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              3.1 Storage Location
            </h3>
            <p className="text-gray-700 mb-6">
              All data is stored exclusively on servers located in India, in
              compliance with data localization requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              3.2 Data Retention
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Audio recordings: 90 days from consultation date</li>
              <li>
                Clinical notes: Up to 10 years (as per medical record
                requirements)
              </li>
              <li>User account data: Duration of account plus 1 year</li>
              <li>Audit logs: 7 years</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              3.3 Security Measures
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>End-to-end encryption for data transmission</li>
              <li>Encrypted storage at rest (AES-256)</li>
              <li>Multi-factor authentication support</li>
              <li>Regular security audits and penetration testing</li>
              <li>Role-based access control</li>
              <li>Automatic data backup with encryption</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Data Sharing and Disclosure
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              4.1 We DO NOT Share Patient Data With:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Third-party advertisers</li>
              <li>Marketing companies</li>
              <li>Data brokers</li>
              <li>Any unauthorized parties</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              4.2 Limited Sharing for Service Delivery
            </h3>
            <p className="text-gray-700 mb-4">We may share data only with:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>OpenAI (for AI processing, under strict DPA)</li>
              <li>Soniox (for transcription services, under strict DPA)</li>
              <li>Cloud infrastructure providers (AWS/Azure India regions)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              All third-party processors are bound by strict Data Processing
              Agreements (DPAs) and confidentiality obligations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              4.3 Legal Requirements
            </h3>
            <p className="text-gray-700 mb-6">
              We may disclose information if required by law, court order, or
              government authority, but only to the extent legally necessary.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Patient Consent
            </h2>
            <p className="text-gray-700 mb-6">
              Healthcare professionals are responsible for obtaining appropriate
              patient consent before recording consultations. The App provides
              tools for consent capture and documentation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Your Rights
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              As a Healthcare Professional, You Have the Right To:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Access your account information</li>
              <li>Update or correct your details</li>
              <li>
                Delete your account (subject to legal retention requirements)
              </li>
              <li>Export your data in portable format</li>
              <li>Withdraw consent (where applicable)</li>
              <li>Lodge complaints with data protection authorities</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              As a Patient (Through Your Healthcare Provider):
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Request access to your medical records</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion (subject to medical record laws)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              This App is not intended for use by children under 18, except as
              patients under the care of registered healthcare professionals
              with appropriate parental/guardian consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Cookies and Tracking
            </h2>
            <p className="text-gray-700 mb-4">
              We use minimal tracking technologies:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Session cookies for authentication</li>
              <li>Analytics for App performance monitoring</li>
              <li>Error tracking for debugging</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We do NOT use advertising or behavioral tracking cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy periodically. Significant
              changes will be communicated via email or in-app notification.
              Continued use of the App constitutes acceptance of the updated
              policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Compliance
            </h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy is designed to comply with:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Information Technology Act, 2000</li>
              <li>Digital Personal Data Protection Act, 2023</li>
              <li>Clinical Establishments Act</li>
              <li>Medical Council of India regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Data Protection Officer
            </h2>
            <p className="text-gray-700 mb-4">
              For privacy-related queries or to exercise your rights, contact
              our Data Protection Officer:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Email: privacy@aarogyanote.ai</li>
              <li>Phone: +91-XXX-XXX-XXXX</li>
              <li>Address: [Physical Address in India]</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-gray-700 text-center">
                By using Aarogya Note AI, you acknowledge that you have read and
                understood this Privacy Policy and consent to the collection,
                use, and disclosure of your information as described herein.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
