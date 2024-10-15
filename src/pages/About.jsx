import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mini Image */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="flex flex-col items-center mb-8">
          {/* <img
            src="/logo.png" // Ensure this path is correct based on your project structure
            alt="About Us Hero"
            className="w-64 h-48 object-cover rounded-full mb-6"
          /> */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            About Us
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-left">
          Hilal Dubai is a company specializing in electronic products,
          committed to offering a diverse range of high-quality technology
          solutions. Based in Baghdad, we provide products such as routers,
          fiber optic cables, laptops, and more to meet the needs of both
          individuals and businesses. We believe in the importance of quality,
          carefully selecting each product to ensure customer satisfaction. Our
          goal is to make shopping for electronics easy and accessible, with
          ongoing support through our excellent customer service. We strive to
          be your first choice for all your technology needs, constantly
          delivering the best with every purchase.
        </p>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          History of the Brand
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-left">
          Hilal Dubai was born out of a passion for innovation and technology,
          with the goal of providing top-quality electronic products that
          combine reliability and performance. Starting as a small company in
          Baghdad, our dedication to customer satisfaction and our focus on
          providing cutting-edge products have allowed us to grow into a trusted
          name in the electronics market. Today, we continue to evolve by
          offering the latest technology solutions while staying true to our
          core values of excellence and customer service.
        </p>
      </section>

      {/* Promise Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Our Promise
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-left">
          We promise to deliver high-quality electronic products that meet the
          latest technological trends and fulfill our customers’ expectations.
          We are committed to providing exceptional service and ensuring a
          smooth and satisfying shopping experience. At the heart of our brand
          is a dedication to quality, reliability, and customer satisfaction,
          ensuring that every purchase adds value to our customers' lives and
          helps them stay ahead in the fast-paced world of technology.
        </p>
      </section>
    </div>
  );
};

export default About;
