import { useCallback } from "react";

const Akariconsgithubfill = () => {
  const onAbdulMutaalTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='hero']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-[15.188rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border text-left text-[2rem] text-white font-inter">
      <h2
        className="m-0 self-stretch h-[1.875rem] relative text-inherit font-bold font-inherit inline-block shrink-0 cursor-pointer mq450:text-[1.188rem] mq1050:text-[1.625rem]"
        onClick={onAbdulMutaalTextClick}
      >
        AbdulMutaal
      </h2>
    </div>
  );
};

export default Akariconsgithubfill;
