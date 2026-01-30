"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Need emergency repair or have questions about our services? Get in touch with Gulf Coast Machine Services today.
          We&apos;re here to help keep your operations running smoothly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="font-semibold w-20">Phone:</span>
                <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-20">Email:</span>
                <a href="mailto:info@gulfcoastmachines.com" className="text-blue-600 hover:underline">
                  info@gulfcoastmachines.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="font-semibold w-20">Address:</span>
                <address className="not-italic">
                  123 Industrial Blvd<br />Gulf City, TX 12345
                </address>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-20">Hours:</span>
                <span>24/7 Emergency Services</span>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8" role="alert">
              <h3 className="font-semibold text-red-800 mb-2">Emergency Services</h3>
              <p className="text-red-700">
                For urgent repairs that can&apos;t wait, call our emergency line immediately.
                We prioritize critical breakdowns to minimize your downtime.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <p className="mb-4">We serve the entire Gulf Coast region including:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Houston and surrounding areas</li>
                <li>Galveston and coastal communities</li>
                <li>Corpus Christi and South Texas</li>
                <li>Beaumont and Port Arthur</li>
                <li>All Gulf Coast industrial zones</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            {state.message && (
              <div
                className={`p-4 mb-6 rounded-md ${
                  state.success
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
                role="alert"
              >
                {state.message}
              </div>
            )}

            <form action={formAction} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-describedby={state.errors?.name ? "name-error" : undefined}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    state.errors?.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {state.errors?.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {state.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby={state.errors?.email ? "email-error" : undefined}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    state.errors?.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {state.errors?.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {state.errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="hvac">Industrial HVAC Repair</option>
                  <option value="generator">Commercial Generator Services</option>
                  <option value="machinery">Industrial Machinery Maintenance</option>
                  <option value="emergency">Emergency Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-describedby={state.errors?.message ? "message-error" : undefined}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    state.errors?.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {state.errors?.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {state.errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
