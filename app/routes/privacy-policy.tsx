import { Link } from "@remix-run/react";
import Footer from "~/components/Footer/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-[200px]">
      <section className="container max-w-[980px]">
        <h1 className="text-3xl md:text-[54px] leading-tight font-semibold text-center">
          Privacy Policy
        </h1>
        <h2 className="text-xl font-semibold mb-0">Overview</h2>
        <p className="mb-4">
          Sparky LLC values your privacy and is committed to protecting your
          personal information. This policy outlines how we collect, use, and
          safeguard your data.
        </p>

        <h2 className="text-xl font-semibold mb-0">Information Collection</h2>
        <p className="mb-4">
          We collect personal information (like name, contact details, etc.)
          that you voluntarily provide via our website or email. We also gather
          general information to enhance our website and services.
        </p>

        <h2 className="text-xl font-semibold mb-0">Use of Information</h2>
        <p className="mb-4">
          The personal information you provide is used to respond to your
          inquiries and deliver services. We may use authorized third parties to
          process this information. If you wish to modify or delete your
          personal information, please contact us at <Link to="mailto:books@sparky.us">books@sparky.us</Link>.
        </p>

        <h2 className="text-xl font-semibold mb-0">Opt-Out & Communication Preferences</h2>
        <p className="mb-4">
          You may opt-out of our marketing communications by using the
          unsubscribe link provided in each email. You can also contact
          books@sparky.us and request to modify or delete your information.
        </p>

        <h2 className="text-xl font-semibold mb-0">Compliance</h2>
        <p className="mb-4">
          Sparky adheres to the standards set by the GDPR. We take your privacy
          seriously and encourage you to contact us if you have any questions or
          concerns.
        </p>

        <h2 className="text-xl font-semibold mb-0">Data Security</h2>
        <p className="mb-4">
          Sparky is dedicated to protecting your personal information from
          unauthorized access, alteration, or destruction. We implement security
          measures to maintain the confidentiality and integrity of your data.
          Your information is securely stored and is not shared with third
          parties, except as required by law.
        </p>

        <h2 className="text-xl font-semibold mb-0">Cookies and Tracking</h2>
        <p className="mb-4">
          Our website may use cookies to enhance user experience. You can set
          your browser to reject cookies.
        </p>

        <h2 className="text-xl font-semibold mb-0">Changes to This Policy</h2>
        <p className="mb-4">
          Sparky reserves the right to modify this privacy policy. Any changes
          will be reflected promptly on this page.
        </p>

        <h2 className="text-xl font-semibold mb-0">Contact Information</h2>
        <p className="mb-4">
          For any privacy-related questions or requests, please email <Link to="mailto:books@sparky.us">books@sparky.us</Link>.
        </p>
      </section>
      <Footer />
    </div>
  );
}
