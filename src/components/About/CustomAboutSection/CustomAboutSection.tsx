import bulletPointImg from "../../../assets/images/icon-bullet-point.svg";
import type { textInfo } from "../../../utils/titles-and-descriptions";

interface Props {
  items: textInfo[];
  title: string;
}

const CustomAboutSection = ({ items, title }: Props) => {
  return (
    <section className="flex flex-col 2xl:flex-row justify-center gap-10 2xl:gap-16">
      <h2 className="text-neutral-900 text-[40px]/[1.2] md:text-[48px]/[1.2] xl:text-[52px]/[1.1] tracking-[-2px] font-extrabold lg:max-w-94">
        {title}
      </h2>
      <ul className=" flex flex-col gap-8  2xl:gap-12">
        {items.map((data) => (
          <li
            className="flex gap-5"
            key={data.title}>
            <img
              src={bulletPointImg}
              alt="bullet point"
              className="self-baseline"
            />
            <div className="flex flex-col gap-3 max-w-189">
              <h3 className="text-neutral-900 text-[24px] leading-[130%] tracking-[-1px] font-bold">
                {data.title}
              </h3>
              <p className="text-[20px] leading-[150%] tracking-[-0.4px]">
                {data.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomAboutSection;
