import React, { useState } from "react";

const Contact = () => {
  const [toast, setToast] = useState(null); // null or { type: "success" | "error", message: string }

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
        setToast({ type: "success", message: "Message sent successfully!" });
        form.reset();
      } else {
        setToast({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setToast({ error,type: "error", message: "Failed to send message. Please try again." });
    }

    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-md text-white z-50 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
          role="alert"
        >
          {toast.message}
        </div>
      )}

      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-primary-light dark:border-[#6366f1] pb-2">
              Contact
            </span>
          </h2>

          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify hidden input */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot Field */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-primary-light dark:bg-[#6366f1] text-white rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
