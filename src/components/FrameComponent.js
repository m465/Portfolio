const FrameComponent = () => {
  return (
    <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_1.313rem] max-w-full text-left text-[1.75rem] text-white font-poppins mq1050:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start min-w-[25rem] min-h-[25.625rem] max-w-full mq750:min-w-full mq1050:min-h-[auto]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.438rem_0rem]">
          <h3 className="m-0 h-[2.375rem] relative text-inherit font-medium font-inherit inline-block mq450:text-[1.375rem]">
            Hello, I’m Abdul
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start text-[6.25rem] text-bg">
            <h1 className="m-0 self-stretch relative text-inherit leading-[7.25rem] font-extrabold font-inherit mq450:text-[1.875rem] mq450:leading-[2.875rem] mq1050:text-[3.125rem] mq1050:leading-[4.375rem]">
              <p className="m-0">{`Full stack `}</p>
              <p className="m-0">{`Developer `}</p>
            </h1>
            <div className="w-[10.563rem] h-[6.75rem] relative mt-[-1.687rem] text-[1.625rem] text-white">
              <h3 className="m-0 absolute top-[0rem] left-[0rem] text-inherit leading-[7.25rem] font-extrabold font-inherit flex items-end w-full h-full mq450:text-[1.313rem] mq450:leading-[5.813rem]">{`Contact Me `}</h3>
              
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[46rem] w-[37.5rem] relative rounded-30xl object-cover max-w-full mq1050:flex-1"
        loading="eager"
        alt=""
        src="/image-hero@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
