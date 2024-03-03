const FrameAboutText = () => {
  return (
    <section
      className="self-stretch h-[30.563rem] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[0rem] pb-[5.563rem] pr-[1.688rem] pl-[1.25rem] box-border max-w-full z-[1] text-left text-[4.688rem] text-bg font-poppins mq750:pb-[3.625rem] mq750:box-border mq1050:h-auto"
      data-scroll-to="about"
    >
      <div className="w-[77.188rem] flex flex-row flex-wrap items-center justify-start gap-[0rem_2.938rem] max-w-full mq750:gap-[0rem_2.938rem]">
        <h1 className="m-0 relative text-inherit leading-[7.25rem] font-extrabold font-inherit mq450:text-[2.813rem] mq450:leading-[4.375rem] mq1050:text-[3.75rem] mq1050:leading-[5.813rem]">
          about
        </h1>
        <div className="h-[0.875rem] flex-1 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border min-w-[38.813rem] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[0.25rem] relative max-w-full overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/line-2.svg"
          />
        </div>
      </div>
      <div className="w-[68.563rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.375rem] box-border shrink-0 max-w-full text-[1.5rem] text-white">
        <div className="flex-1 flex flex-col items-center justify-start gap-[3.125rem_0rem] max-w-full mq750:gap-[3.125rem_0rem]">
          <div className="w-[61.938rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.188rem] box-border max-w-full">
            <div className="h-[9.438rem] flex-1 relative leading-[2.75rem] inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[2.188rem]">
            I am a Computer Science student at the National University of Computer and Emerging 
            Sciences "NUCES", with a passion for web and mobile development. I have a strong 
            foundation in programming and have worked extensively with Bootstrap for web 
            development and React Native for mobile app development.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.063rem] pl-[0rem] box-border gap-[1.25rem] max-w-full text-center text-[3rem] font-body mq1050:flex-wrap">
            <div className="w-[13.688rem] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[0rem] pr-[0rem] pl-[0.063rem] box-border gap-[0.875rem_0rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem]">
                <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[3.5rem] font-bold font-inherit mq450:text-[1.813rem] mq450:leading-[2.125rem] mq1050:text-[2.375rem] mq1050:leading-[2.813rem]">
                  Front-End
                </h1>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start py-[0rem] pr-[0.813rem] pl-[0.875rem] text-[1.125rem] text-grey">
                <div className="h-[1.625rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                  <div className="mb-[-0.125rem] relative leading-[1.75rem] font-medium">
                    60+ Hours Experience
                  </div>
                </div>
                <div className="self-stretch h-[0.125rem] relative bg-bg" />
              </div>
            </div>
            <div className="w-[10.375rem] flex flex-col items-end justify-start gap-[0.875rem_0rem]">
              <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[3.5rem] font-bold font-inherit mq450:text-[1.813rem] mq450:leading-[2.125rem] mq1050:text-[2.375rem] mq1050:leading-[2.813rem]">
                Python
              </h1>
              <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.063rem] text-[1.125rem] text-grey">
                <div className="h-[1.625rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                  <div className="relative leading-[1.75rem] font-medium">
                    6+ Hours-Experience
                  </div>
                </div>
                <div className="self-stretch h-[0.119rem] relative bg-bg" />
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-start py-[0rem] pr-[0rem] pl-[0.063rem] box-border gap-[0.875rem_0rem] max-w-full">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem]">
                <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[3.5rem] font-bold font-inherit mq450:text-[1.813rem] mq450:leading-[2.125rem] mq1050:text-[2.375rem] mq1050:leading-[2.813rem]">
                  Machine Learning
                </h1>
              </div>
              <div className="w-[12.5rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border text-[1.125rem] text-grey">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="h-[1.625rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                    <div className="mb-[-0.125rem] relative leading-[1.75rem] font-medium">
                      12+ Hours Experience
                    </div>
                  </div>
                  <div className="self-stretch h-[0.125rem] relative bg-bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[90rem] h-[50rem] relative overflow-hidden shrink-0 hidden max-w-full"
        data-scroll-to="work"
      />
    </section>
  );
};

export default FrameAboutText;
