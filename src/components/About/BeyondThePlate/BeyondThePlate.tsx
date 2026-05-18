import beyondPlateImg from "../../../assets/images/image-about-beyond-the-plate-large.webp";

import beyondPlateSmallImg from "../../../assets/images/image-about-beyond-the-plate-small.webp";

const BeyondThePlate = () => {
  return (
    <section className="flex flex-wrap gap-8 xl:gap-16">
      <div className="flex flex-col gap-5">
        <h2 className="text-neutral-900 text-[40px]/[1.2] md:text-[48px]/[1.2] xl:text-[52px]/[1.1] tracking-[-2px] font-extrabold">
          Beyond the plate
        </h2>
        <div className="flex flex-col gap-3 2xl:max-w-90">
          <p className="text-[20px] leading-[150%] tracking-[-0.4px]">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="list-disc pl-6">
            <li className="text-[20px] leading-[150%] tracking-[-0.4px]">
              Encourage family dinners and social cooking.
            </li>
            <li className="text-[20px] leading-[150%] tracking-[-0.4px]">
              Reduce reliance on single-use packaging and delivery waste.
            </li>
            <li className="text-[20px] leading-[150%] tracking-[-0.4px]">
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
      </div>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={beyondPlateSmallImg}
        />
        <img
          className="rounded-2xl"
          width={744}
          height={400}
          src={beyondPlateImg}
          alt="spinach"
        />
      </picture>
    </section>
  );
};

export default BeyondThePlate;
