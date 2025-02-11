import { useState } from "react";
import { FiMail } from "react-icons/fi";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <div className="animate-fade-in-down mb-8 inline-block bg-white bg-opacity-10 p-4 rounded-full">
              <FiMail className="text-4xl text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-down">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-down delay-100">
              Get the latest updates, exclusive offers, and amazing content
              delivered straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto animate-fade-in-down delay-200"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Subscribe Now
            </button>
          </form>

          <p className="text-sm text-white/70 mt-6 animate-fade-in-down delay-300">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default NewsletterSection;
