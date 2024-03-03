const DesignPortfolioGroup = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[1.563rem] box-border max-w-full text-left text-[1.5rem] text-white font-body">
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        
        
        <div
          className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-[2.438rem] pb-[2rem] pr-[1.25rem] pl-[3rem] box-border gap-[2.5rem_0rem] max-w-full z-[1] text-[1rem] text-gray-200 lg:pl-[1.5rem] lg:box-border mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq750:gap-[2.5rem_0rem] mq1050:pt-[1.563rem] mq1050:pb-[1.313rem] mq1050:box-border"
          data-scroll-to="contactContainer"
        >
          <div className="w-[77.25rem] flex flex-col items-center justify-start gap-[0.938rem_0rem] shrink-0 max-w-full text-[4.688rem] text-bg font-poppins">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1.563rem] max-w-full mq1050:flex-wrap">
              <h1 className="m-0 relative text-inherit leading-[7.25rem] font-extrabold font-inherit inline-block min-w-[27.938rem] max-w-full mq450:text-[2.813rem] mq450:leading-[4.375rem] mq750:min-w-full mq1050:text-[3.75rem] mq1050:leading-[5.813rem] mq1050:flex-1">
                Contact Me
              </h1>
              <img
                className="h-[0.25rem] flex-1 relative max-w-full overflow-hidden min-w-[31.063rem] mq750:min-w-full"
                loading="eager"
                alt=""
                src="/line-4.svg"
              />
            </div>
            <div className="w-[54.75rem] flex flex-row items-start justify-start py-[0rem] pr-[1.938rem] pl-[0rem] box-border max-w-full text-[1.5rem] text-grey font-body">
              <div className="h-[5.875rem] flex-1 relative leading-[1.75rem] font-medium inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.375rem]">
                I would love to hear about your project and how I can help.
                Please fill in the form, and I’ll get back to you as soon as
                possible.
              </div>
            </div>
          </div>
          <div className="w-[49.25rem] flex flex-row items-start justify-start pt-[0rem] pb-[1.625rem] pr-[2.5rem] pl-[0rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="relative tracking-[-0.22px] leading-[1.625rem] font-medium mix-blend-normal">
                NAME
              </div>
              <div className="relative [border:none] bg-[transparent] self-stretch h-[2.463rem] overflow-hidden shrink-0 flex flex-row items-end justify-center box-border min-w-[15.625rem]">
                <input
                  className="[outline:none] pt-[2.375rem] px-[0rem] pb-[0.063rem] [border:none] w-full h-full [background:transparent] relative z-[3] text-gray-400"
                  type="text"
                />
                <div className="h-[0.056rem] w-full absolute bg-bg z-[1] left-[0rem] bottom-[0.031rem] [pointer-events:none]" />
                <div className="h-[0.056rem] w-full absolute bg-bg z-[1] left-[0rem] bottom-[0.031rem] [pointer-events:none]" />
              </div>
            </div>
          </div>
          <div className="w-[49.25rem] flex flex-row items-start justify-start pt-[0rem] pb-[2.313rem] pr-[2.5rem] pl-[0rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem_0rem] max-w-full">
              <div className="relative tracking-[-0.22px] leading-[1.625rem] font-medium mix-blend-normal">
                EMAIL
              </div>
              <div className="relative [border:none] bg-[transparent] self-stretch h-[2.463rem] overflow-hidden shrink-0 flex flex-row items-end justify-center box-border min-w-[15.625rem]">
                <input
                  className="[outline:none] pt-[2.438rem] px-[0rem] pb-[0rem] [border:none] w-full h-full [background:transparent] relative z-[3] text-gray-400"
                  type="text"
                />
                <div className="h-[0.056rem] w-full absolute bg-bg z-[1] left-[0rem] bottom-[-0.031rem] [pointer-events:none]" />
                <div className="h-[0.056rem] w-full absolute bg-bg z-[1] left-[0rem] bottom-[-0.031rem] [pointer-events:none]" />
              </div>
            </div>
          </div>
          <div className="w-[49.25rem] flex flex-row items-start justify-start pt-[0rem] pb-[2.313rem] pr-[2.5rem] pl-[0rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.438rem_0rem] max-w-full">
              <div className="relative tracking-[-0.22px] leading-[1.625rem] font-medium mix-blend-normal">
                MESSAGE
              </div>
              <textarea className="[border:none] bg-[transparent] [outline:none] self-stretch h-[8.563rem] overflow-hidden shrink-0 flex flex-row items-end justify-center py-[0.063rem] pr-[0rem] pl-[0.25rem] box-border text-gray-400" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] text-white">
            <div className="w-[15.125rem] flex flex-col items-center justify-start gap-[1.5rem_0rem]">
              <div className="flex flex-row items-start justify-start">
                <b className="relative tracking-[2.29px] leading-[1.625rem]">
                  SEND MESSAGE
                </b>
              </div>
              <div className="self-stretch h-[0.225rem] relative bg-bg" />
            </div>
          </div>
          <footer className="w-[90rem] h-[11.563rem] relative overflow-hidden shrink-0 hidden max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default DesignPortfolioGroup;
