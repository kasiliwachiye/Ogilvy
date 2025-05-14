import React from "react";
import { productIntroData } from "../../data/sustainableData";

const ProductIntro: React.FC = () => (
  <section id="product-intro" className="py-16">
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-20 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900">
        {productIntroData.title}
      </h2>
      <p className="mt-4 text-lg font-light text-gray-700">
        {productIntroData.subtitle}
      </p>
      <p className="mt-2 text-base sm:text-lg text-gray-600">
        {productIntroData.description}
      </p>
    </div>
  </section>
);

export default ProductIntro;
