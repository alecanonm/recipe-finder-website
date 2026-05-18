import { socialsUrls } from "../../utils/navigation-urls";

const CustomFooter = () => {
  return (
    <footer className="pt-10 pb-10 flex justify-center items-center">
      <section className="flex max-sm:flex-col-reverse gap-6 md:min-w-3xl xl:min-w-298 justify-between">
        <p>Alejandro Canon</p>
        <ul className="flex gap-6">
          {socialsUrls.map((social, i) => (
            <a
              href={social.to}
              key={i}>
              <li>
                <img
                  src={social.socialIcon}
                  alt={social.socialIcon}
                />
              </li>
            </a>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default CustomFooter;
