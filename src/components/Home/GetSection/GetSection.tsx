import { getSection } from "../../../data/mockdata";

const GetSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-[40px]/[1.2] md:text-[48px]/[1.2] xl:text-[48px]/[1.2] tracking-[-2px] font-extrabold self-start xl:self-center">
        What you'll get
      </h2>
      <ul className="flex flex-col xl:flex-row gap-8">
        {getSection.map((data) => (
          <li
            key={data.title}
            className="flex flex-col gap-6 max-w-94">
            <div className="bg-neutral-0 border border-neutral-300 p-2 rounded-xl w-15 h-15 flex items-center justify-center">
              <img
                className="max-w-full max-h-full object-contain"
                src={data.imageUrl}
                alt={data.title}
              />
            </div>
            <div className="flex flex-col gap-3 md:w-176 xl:w-auto">
              <h3 className="text-[32px]/[1.3] tracking-[-1px] font-bold">
                {data.title}
              </h3>
              <p className="text-xl/normal tracking-[-0.4]">{data.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GetSection;
