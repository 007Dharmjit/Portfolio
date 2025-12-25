import React from "react";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa"; // Added icon

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      // Fixed toast error syntax
      console.error(error);
      toast.error("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section id="contact" className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            <span className="border-b-4 border-primary-light dark:border-[#6366f1] pb-2">
              Contact
            </span>
          </h2>

          <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-[#6366f1] transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-[#6366f1] transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="How can I help you?"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-[#6366f1] transition-all resize-none"
                ></textarea>
              </div>

              <div className="field">
                 <div data-netlify-recaptcha="true"></div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-primary-light dark:bg-[#6366f1] text-white font-semibold rounded-lg hover:opacity-90 transition-transform transform active:scale-95 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;