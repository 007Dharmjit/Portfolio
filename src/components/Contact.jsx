import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-primary-light dark:border-[#6366f1] pb-2">
            Contact
          </span>
        </h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label for="name" className="block font-medium mb-2">
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
              <label for="email" className="block font-medium mb-2">
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
              <label for="message" className="block font-medium mb-2">
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
  );
};

export default Contact;
