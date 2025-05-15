import React from "react";
import { productIntroData } from "../../data/sustainableData";
import WoodyBg from "../../assets/wooden.png";

const ProductIntro: React.FC = () => (
  <section
    id="product-intro"
    className="py-16"
    style={{ backgroundImage: `url(${WoodyBg})` }}
  >
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-20 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900">
        {productIntroData.title}
      </h2>
      <p className="mt-4 font-light text-gray-700">
        {productIntroData.subtitle}
      </p>
      <p className="mt-2 text-base text-gray-600">
        {productIntroData.description}
      </p>
    </div>
  </section>
);

export default ProductIntro;
