import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Gulf Coast Machine Services",
  description: "Expert insights on industrial equipment maintenance, repair tips, and industry best practices from Gulf Coast Machine Services.",
};

export default function Blog() {
  const posts = [
    {
      title: "The Importance of Regular Generator Maintenance",
      excerpt: "Learn why scheduled maintenance is crucial for commercial generators and how it can prevent costly breakdowns.",
      date: "January 15, 2026",
      image: "/images/Google_AI_Studio_2025-08-29T14_40_03.454Z.png",
      slug: "generator-maintenance-importance"
    },
    {
      title: "Common Industrial HVAC Problems and Solutions",
      excerpt: "Discover the most frequent issues affecting industrial HVAC systems and how our experts address them.",
      date: "January 10, 2026",
      image: "/images/Google_AI_Studio_2025-08-29T14_40_32.509Z.png",
      slug: "industrial-hvac-problems-solutions"
    },
    {
      title: "Emergency Response: What to Do When Equipment Fails",
      excerpt: "A guide for facility managers on handling equipment emergencies and minimizing operational downtime.",
      date: "January 5, 2026",
      image: "/images/Google_AI_Studio_2025-08-29T14_40_42.666Z.png",
      slug: "equipment-failure-emergency-response"
    },
    {
      title: "The Benefits of Preventive Maintenance Programs",
      excerpt: "Explore how regular maintenance schedules can extend equipment life and reduce overall operating costs.",
      date: "December 28, 2025",
      image: "/images/Google_AI_Studio_2025-08-29T14_41_48.058Z.png",
      slug: "preventive-maintenance-benefits"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Stay informed with the latest insights on industrial equipment maintenance, repair tips, and industry best practices 
          from the experts at Gulf Coast Machine Services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Advice?</h2>
          <p className="text-xl mb-6">Have questions about your equipment or maintenance needs? Our team is here to help.</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
}