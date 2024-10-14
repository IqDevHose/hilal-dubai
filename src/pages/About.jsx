import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mini Image */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/logo.png" // Ensure this path is correct based on your project structure
            alt="About Us Hero"
            className="w-64 h-48 object-cover rounded-full mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            About Us
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-left">
          We are a company specialized in clothing and cosmetics trading, keen to provide a diverse range of the latest fashion trends and beauty products that meet the needs of all customers. We believe in the importance of quality and carefully select our products to ensure customer satisfaction. We also strive to provide an easy and comfortable shopping experience, with continuous support through excellent customer service. Our goal is to be your first destination for everything related to fashion and beauty, and we always strive to provide the best every time you shop with us.        </p>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          History of the Brand
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-left">
          Our brand was founded on a passion for fashion and beauty, with the aim of providing high-quality products that combine elegance and distinction. From the beginning, we have been committed to providing a variety of clothing and beauty products that meet the needs and tastes of our customers. We started out as a small company in Baghdad, and through dedication and focus on customer satisfaction, we have grown to become a trusted name in the industry. Today, we continue to evolve by offering the latest trends and the best products, while maintaining our core values ​​of excellence and customer service.        </p>
      </section>

      {/* Promise Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Our Promise
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-left">
          Our promise is to provide high-quality clothing and beauty products that reflect the latest trends and meet our customers’ expectations. We are committed to providing exceptional service, ensuring a seamless shopping experience, and we constantly strive to improve our services to meet the changing needs of our customers. At the core of our brand is a commitment to quality, reliability and customer satisfaction, ensuring that every purchase adds value and satisfaction to our customers.        </p>
      </section>
    </div>
  );
};

export default About;
