"use client";
import { useState } from "react";

import {
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
  Twitter,
  Users,
  Check
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function AboutUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    submitted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    console.log("Form submitted:", formState);
    setFormState({ ...formState, submitted: true });
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        submitted: false
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  return (
    <main className="font-sans bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white dark:bg-gray-800 p-3 z-50 text-[#1abc9c]"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center" aria-label="Avni home">
                <div className="w-10 h-10 bg-[#1abc9c] rounded-md flex items-center justify-center mr-2">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium text-lg">
                  Avni
                </span>
              </a>

              <div className="hidden md:flex md:items-center md:ml-10 space-x-8">
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#1abc9c] dark:hover:text-[#1abc9c] px-3 py-2 text-sm font-medium transition-colors"
                  aria-label="Features"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#1abc9c] dark:hover:text-[#1abc9c] px-3 py-2 text-sm font-medium transition-colors"
                  aria-label="Demo"
                >
                  Demo
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#1abc9c] dark:hover:text-[#1abc9c] px-3 py-2 text-sm font-medium transition-colors"
                  aria-label="Pricing"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-[#1abc9c] px-3 py-2 text-sm font-medium border-b-2 border-[#1abc9c] transition-colors"
                  aria-current="page"
                  aria-label="About"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#1abc9c] dark:hover:text-[#1abc9c] px-3 py-2 text-sm font-medium transition-colors"
                  aria-label="Resources"
                >
                  Resources
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme toggle placeholder - the actual button will be provided by the user */}
              <div
                className="flex items-center justify-center w-10 h-10"
                aria-label="Theme toggle"
              >
                {/* Theme toggle will go here */}
              </div>

              <a
                href="#"
                className="hidden md:inline-flex text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors"
                aria-label="Log in"
              >
                Log in
              </a>
              <a
                href="#"
                className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ff5a1f] hover:bg-[#e04e18] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1abc9c] dark:focus:ring-offset-gray-900"
                aria-label="Try Avni"
              >
                Try Avni
              </a>
              <ModeToggle />

              <button
                type="button"
                className="md:hidden bg-white dark:bg-gray-800 p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1abc9c]"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#1abc9c] dark:hover:text-[#1abc9c] block px-3 py-2 rounded-md text-base font-medium"
              aria-label="Features"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#1abc9c] dark:hover:text-[#1abc9c] block px-3 py-2 rounded-md text-base font-medium"
              aria-label="Demo"
            >
              Demo
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#1abc9c] dark:hover:text-[#1abc9c] block px-3 py-2 rounded-md text-base font-medium"
              aria-label="Pricing"
            >
              Pricing
            </a>
            <a
              href="#"
              className="bg-gray-50 dark:bg-gray-800 text-[#1abc9c] block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
              aria-label="About"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#1abc9c] dark:hover:text-[#1abc9c] block px-3 py-2 rounded-md text-base font-medium"
              aria-label="Resources"
            >
              Resources
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5">
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-[#1abc9c] bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                aria-label="Log in"
              >
                Log in
              </a>
            </div>
            <div className="mt-3 px-2">
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-white bg-[#ff5a1f] hover:bg-[#e04e18] rounded-md"
                aria-label="Try Avni"
              >
                Try Avni
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f8f9fa] to-[#e9f7f4] dark:from-gray-950 dark:to-stone-950 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white dark:bg-gray-800 rounded-full shadow mb-6">
              <span className="text-[#1abc9c] font-semibold text-sm px-4 py-1 tracking-wide">
                About Us
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
              About the <span className="text-[#1abc9c]">Avni</span> Project
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              An open-source platform for community service and data collection
              designed for non-profits
            </p>

            <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl w-full">
              {[
                { label: "Founded in", value: "2016" },
                { label: "Sectors served", value: "5+" },
                {
                  label: "Open Source",
                  icon: <Github className="w-6 h-6 md:w-8 md:h-8" />
                },
                {
                  label: "Community Driven",
                  icon: <Users className="w-6 h-6 md:w-8 md:h-8" />
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#e9f7f4] dark:bg-gray-700 rounded-full flex items-center justify-center mb-3 transition-transform duration-100 group-hover:scale-110 group-hover:bg-[#1abc9c] group-hover:shadow-lg">
                    {item.value ? (
                      <span className="text-[#1abc9c] group-hover:text-white text-xl md:text-2xl font-bold transition-colors duration-300">
                        {item.value}
                      </span>
                    ) : (
                      <span className="text-[#1abc9c] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none group">
          {/* Green Floating Bubble */}
          <div
            className="absolute top-20 left-10 w-64 h-64 bg-[#1abc9c] opacity-10 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-md group-hover:opacity-20"
            style={{ animation: "floatAnim 6s ease-in-out infinite" }}
          />

          {/* Orange Pulsing & Rotating Bubble */}
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff5a1f] opacity-10 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-6 group-hover:opacity-20"
            style={{ animation: "pulseAnim 8s ease-in-out infinite" }}
          />
        </div>

        {/* Inline Keyframe Styles */}
        <style jsx>{`
          @keyframes floatAnim {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes pulseAnim {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.15;
            }
          }
        `}</style>
      </section>

      {/* About Content */}
      <section id="main-content" className="py-16 max-w-4xl mx-auto px-4">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
            <span className="font-bold text-[#1abc9c]">Avni Project</span>,
            previously called "OpenCHS (Open Community Health System)", started,
            in mid-2016, as an open source community health worker platform
            designed to aid programs operating below primary health center level
            — i.e. sub-center, village and slum level. It has since matured into
            a platform that can support most field work use cases, not just
            health. Avni is now implemented for water, social welfare services,
            educational outcome assessment and health. Avni (अवनि, અવની, ਅਵਨੀ,
            அவ்னி, అవనీ, ಅವ್ನಿ) means "earth" in Hindi.
          </p>

          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9f7f4] dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
              <Users className="mr-3 text-[#1abc9c]" /> Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-[#1abc9c]">avni</span> is
              developed by a team experienced in applying technology in the
              public and health from{" "}
              <a
                href="#"
                className="text-[#1abc9c] font-medium hover:underline inline-flex items-center"
              >
                Samanvay Foundation <ExternalLink className="ml-1 w-3 h-3" />
              </a>{" "}
              and development efforts are funded by{" "}
              <a
                href="#"
                className="text-[#1abc9c] font-medium hover:underline inline-flex items-center"
              >
                Social Alpha <ExternalLink className="ml-1 w-3 h-3" />
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#1abc9c] font-medium hover:underline inline-flex items-center"
              >
                Project Tech4Dev (Chintu Gudiya Foundation){" "}
                <ExternalLink className="ml-1 w-3 h-3" />
              </a>
              . Recently{" "}
              <a
                href="#"
                className="text-[#1abc9c] font-medium hover:underline inline-flex items-center"
              >
                Soft Corner <ExternalLink className="ml-1 w-3 h-3" />
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#1abc9c] font-medium hover:underline inline-flex items-center"
              >
                Persistent Systems <ExternalLink className="ml-1 w-3 h-3" />
              </a>{" "}
              have also joined the product development efforts with Samanvay.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Avni Software
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Source code",
                  description:
                    "Open-source codebase on GitHub for transparency and collaboration",
                  icon: <Github className="w-5 h-5" />,
                  link: "https://github.com/avniproject"
                },
                {
                  title: "AGPL 3 license",
                  description:
                    "Free software license that ensures user freedom",
                  icon: <ExternalLink className="w-5 h-5" />,
                  link: "#"
                },
                {
                  title:
                    "Copyright – Samanvay Research and Development Foundation",
                  description:
                    "Legal ownership and intellectual property rights",
                  icon: <ExternalLink className="w-5 h-5" />,
                  link: "#"
                },
                {
                  title: "Community channel",
                  description: "Join our Discord for discussions and support",
                  icon: <ExternalLink className="w-5 h-5" />,
                  link: "https://discord.gg/4gpcqQW8pk"
                },
                {
                  title: "CI Server and Binary Download",
                  description: "Continuous integration and latest builds",
                  icon: <ExternalLink className="w-5 h-5" />,
                  link: "https://circleci.com/gh/avniproject"
                },
                {
                  title: "Android Playstore App",
                  description: "Mobile application for field workers",
                  icon: <ExternalLink className="w-5 h-5" />,
                  link: "#"
                },
                {
                  title: "Product Slide Deck",
                  description:
                    "Overview presentation of Avni's features and benefits",
                  icon: <ExternalLink className="w-5 h-5" />,
                  link: "#"
                },
                {
                  title: "Contact Avni",
                  description: "Reach out to our team via email",
                  icon: <Mail className="w-5 h-5" />,
                  link: "mailto:avnipartnerships@samanvayfoundation.org"
                },
                {
                  title: "Join Avni Google Group",
                  description: "Community forum for updates and discussions",
                  icon: <ExternalLink className="w-5 h-5" />,
                  link: "https://groups.google.com/forum/#!forum/avni-project"
                },
                {
                  title: "Code of conduct",
                  description: "Guidelines for community participation",
                  icon: <ExternalLink className="w-5 h-5" />,
                  link: "#"
                },
                {
                  title: "Avni on Twitter",
                  description: "Follow us for the latest updates",
                  icon: <Twitter className="w-5 h-5" />,
                  link: "#"
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex flex-col p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-[#1abc9c] dark:hover:border-[#1abc9c] hover:bg-[#f8f9fa] dark:hover:bg-gray-800 transition-all group"
                  aria-label={`${item.title} - ${item.description}`}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#e9f7f4] dark:bg-gray-700 flex items-center justify-center mr-4 group-hover:bg-[#1abc9c] transition-colors">
                      <span className="text-[#1abc9c] group-hover:text-white transition-colors">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-gray-900 dark:group-hover:text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm ml-14">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Credits
            </h2>
            <a
              href="#"
              className="flex flex-col p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-[#1abc9c] dark:hover:border-[#1abc9c] hover:bg-[#f8f9fa] dark:hover:bg-gray-800 transition-all group max-w-md"
              aria-label="Lokalise, translation service - Tools that help with multilingual support"
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-[#e9f7f4] dark:bg-gray-700 flex items-center justify-center mr-4 group-hover:bg-[#1abc9c] transition-colors">
                  <span className="text-[#1abc9c] group-hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-gray-900 dark:group-hover:text-white">
                  Lokalise, translation service
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm ml-14">
                Tools that help with multilingual support
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-br from-[#f8f9fa] to-[#e9f7f4] dark:from-gray-950 dark:to-gray-900 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We respond to 100% of messages. Ask us anything.
              </p>
            </div>

            {formState.submitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                aria-label="Contact form"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="block font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1abc9c] focus:border-[#1abc9c] focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      aria-required="true"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1abc9c] focus:border-[#1abc9c] focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      aria-required="true"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="block font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1abc9c] focus:border-[#1abc9c] focus:outline-none transition-all text-gray-900 dark:text-white"
                    aria-required="true"
                    required
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1abc9c] focus:border-[#1abc9c] focus:outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    rows={4}
                    aria-required="true"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-[#1abc9c] focus:ring-[#1abc9c] border-gray-300 rounded"
                    required
                  />
                  <label
                    htmlFor="privacy"
                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-[#1abc9c] hover:underline">
                      privacy policy
                    </a>
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#ff5a1f] hover:bg-[#e04e18] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1abc9c] focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-sm hover:shadow-md active:scale-[0.98]"
                    aria-label="Send message"
                  >
                    <span>Send Message</span>
                    <ArrowRight
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 bg-[#1abc9c] rounded-md flex items-center justify-center mr-3">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Avni Project
              </span>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#1abc9c] dark:hover:text-[#1abc9c]"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#1abc9c] dark:hover:text-[#1abc9c]"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:avnipartnerships@samanvayfoundation.org"
                className="text-gray-500 dark:text-gray-400 hover:text-[#1abc9c] dark:hover:text-[#1abc9c]"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Avni Project. All rights reserved.
            </p>
            <p className="mt-2">
              Developed by Samanvay Research and Development Foundation.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
