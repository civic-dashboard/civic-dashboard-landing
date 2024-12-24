"use client";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "#" },
  {
    label: "How Council Works",
    href: "https://docs.google.com/document/d/1e5UJrM4vsqLCGmxp4x9H-45kmnq8dAK3RLaPvooJWw4/edit?usp=sharing",
  },
  {
    label: "Search",
    href: "https://nextjs-opensearch.d2psjv0lhudilg.amplifyapp.com/",
  },
  { label: "Actions", href: "https://actions.civicdashboard.ca" },
  {
    label: "Councillors",
    href: "https://civic-dashboard-councillors.vercel.app/councillors",
  },
  {
    label: "About Us",
    href: "https://citizendashboard.notion.site/Onboarding-8ca9014fe10c493ea6ddd4502132ce10 ",
  },
  {
    label: "Feedback",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdflztQAYf0lNxfQjIKy58JM1suOHsoxRZHWycS5SfMkcTNHg/viewform?usp=sharing ",
  },
];

const gradientAnimation = `
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <style jsx global>
        {gradientAnimation}
      </style>

      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Civic Dashboard
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile/Tablet menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="Toggle menu"
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
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Menu - with animation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg mt-2 shadow-xl">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-gray-700 transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - with animation and gradient */}
      <section className="relative h-[80vh] bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Toronto Skyline"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-purple-900/60 animate-[gradient_8s_ease_infinite]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in">
              Know what's happening in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Toronto City Council
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-3xl leading-relaxed">
              An accessible democracy is a functioning democracy
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://citizendashboard.notion.site/Onboarding-8ca9014fe10c493ea6ddd4502132ce10"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Learn More
              </a>
              <a
                href="https://calendly.com/d/ckm5-wgb-xrh/30-minute-user-interview"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content  */}
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              The Civic Dashboard Project
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              It shouldn't take 3 hours and a political science degree to
              understand City Council. We make it take 90 seconds.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "How Council Works",
                description:
                  "Clear, concise explanation of how Toronto's City Council works",
                icon: "📚",
                menuLink: "How Council Works",
              },
              {
                title: "Search",
                description:
                  "Precise search for all Council items relevant to your interests",
                icon: "🔍",
                menuLink: "Search",
              },
              {
                title: "Actions",
                description:
                  "Find and take action on relevant items in one click",
                icon: "✨",
                menuLink: "Actions",
              },
              {
                title: "Councillors",
                description:
                  "See your Councillor's voting record and alignment",
                icon: "👥",
                menuLink: "Councillors",
              },
            ].map((feature) => {
              const menuItem = menuItems.find(
                (item) => item.label === feature.menuLink
              );
              return (
                <a
                  key={feature.title}
                  href={menuItem?.href}
                  className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join us in making democracy more accessible
            </h2>
            <p className="text-white/90 text-lg mb-8">
              We're regular, passionate Torontonians building a better city
              together
            </p>
            <a
              href="https://calendly.com/d/ckm5-wgb-xrh/30-minute-user-interview"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Involved
            </a>
          </div>
        </div>
      </main>

      {/* Footer  */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Navigation Links Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Navigation
              </h3>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-blue-400 transition-colors duration-200 block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Contact
              </h3>
              <p className="hover:text-blue-400 transition-colors duration-200">
                teamcivicdashboard@gmail.com
              </p>
            </div>

            {/* Legal Links Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Newsletter Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Stay Connected
              </h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/civic-dashboard"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Subscribe to Newsletter
              </button>

              <a
                href="https://civictech.ca/"
                className="block text-center py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
              >
                Civic Tech Toronto
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
            <p className="text-gray-400">
              &copy; 2024 Civic Dashboard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
