import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Gulf Coast Machine Services",
  description: "Answers to common questions about our 24/7 emergency repair services, response times, service areas, and warranties.",
};

export default function FAQ() {
  const faqs = [
    {
      question: "Do you offer 24/7 emergency services?",
      answer: "Yes, Gulf Coast Machine Services provides 24/7 emergency repair services. We understand that equipment failures can happen at any time, so our team is always ready to respond quickly to minimize your downtime."
    },
    {
      question: "What types of equipment do you service?",
      answer: "We specialize in industrial HVAC systems, commercial generators, industrial machinery, and related equipment. Our technicians are trained to handle a wide range of industrial and commercial equipment repairs and maintenance."
    },
    {
      question: "How quickly can you respond to an emergency?",
      answer: "For emergency situations, we aim to arrive within 1-2 hours in most Gulf Coast areas. Response times may vary based on location and traffic conditions. We prioritize critical breakdowns to get your operations back online as quickly as possible."
    },
    {
      question: "Do you provide preventive maintenance services?",
      answer: "Absolutely. We offer comprehensive preventive maintenance programs designed to keep your equipment running efficiently and prevent costly breakdowns. Regular maintenance can extend equipment life and reduce overall operating costs."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire Gulf Coast region, including Houston, Galveston, Corpus Christi, Beaumont, Port Arthur, and surrounding communities. If you're unsure if we service your specific location, please contact us to confirm."
    },
    {
      question: "Do you offer warranties on your repairs?",
      answer: "Yes, all our repairs come with a comprehensive warranty. The specific warranty terms depend on the type of repair and equipment, but we stand behind our work and want you to be completely satisfied with our services."
    },
    {
      question: "Can you work on equipment while it's in operation?",
      answer: "In many cases, yes. Our technicians are trained to perform repairs with minimal disruption to your operations. However, for safety reasons, some repairs may require temporary shutdowns. We'll always discuss the best approach with you."
    },
    {
      question: "Do you provide estimates before starting work?",
      answer: "Yes, we provide detailed estimates for all repair work. For emergency situations, we'll provide an estimate as quickly as possible. We believe in transparent pricing with no hidden fees."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Find answers to common questions about our services, response times, and how we can help keep your industrial 
          and commercial equipment running smoothly.
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <details className="p-6">
                <summary className="text-xl font-semibold cursor-pointer hover:text-blue-600">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-6">Can't find the answer you're looking for? Our team is here to help with any questions about your equipment or our services.</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}