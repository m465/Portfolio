import { useCallback } from "react";

const FRAMEnav = () => {
  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWorkText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='work']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAkarIconsGithubFillClick = useCallback(() => {
    window.open(
      "https://github.com/m465/e-commerce-website/settings/access?guidance_task="
    );
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.438rem] box-border max-w-full">
      <header className="flex-1 overflow-hidden flex flex-row items-start justify-between pt-[2.625rem] pb-[0.75rem] pr-[3.438rem] pl-[4.063rem] box-border gap-[1.25rem] max-w-full text-left text-[2rem] text-white font-inter mq750:pl-[2rem] mq750:pr-[1.688rem] mq750:box-border">
        <div className="w-[15.188rem] flex flex-col items-start justify-start pt-[0.563rem] px-[0rem] pb-[0rem] box-border">
          <h2 className="m-0 self-stretch h-[4.188rem] relative text-inherit font-bold font-inherit inline-block shrink-0 whitespace-nowrap">
            AbdulMutaal
          </h2>
        </div>
        <div className="w-[35.438rem] flex flex-col items-start justify-start pt-[0.563rem] px-[0rem] pb-[0rem] box-border max-w-full text-[1.688rem] font-poppins mq1050:w-[13.875rem]">
          <div className="w-[21.563rem] flex flex-row items-start justify-between py-[0rem] pr-[0.063rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq1050:hidden">
            <h3
              className="m-0 h-[2.813rem] relative text-inherit font-normal font-inherit inline-block cursor-pointer"
              onClick={onContactTextClick}
            >
              Contact
            </h3>
            <h3
              className="m-0 h-[2.813rem] relative text-inherit font-normal font-inherit inline-block cursor-pointer"
              onClick={onAboutText1Click}
            >
              About
            </h3>
            <h3
              className="m-0 h-[2.813rem] relative text-inherit font-normal font-inherit inline-block cursor-pointer"
              onClick={onWorkText1Click}
            >
              Work
            </h3>
          </div>
        </div>
        <img
          className="h-[3.938rem] w-[4.25rem] relative cursor-pointer"
          loading="eager"
          alt=""
          src="/akaricons-githubfill.svg"
          onClick={onAkarIconsGithubFillClick}
        />
        <div
          className="h-[49.563rem] w-[90rem] relative overflow-hidden shrink-0 hidden max-w-full"
          data-scroll-to="hero"
        />
      </header>
    </section>
  );
};

export default FRAMEnav;
