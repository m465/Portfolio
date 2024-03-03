const GroupCopy = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[4.125rem_0rem] max-w-full text-left text-[4.688rem] text-bg font-poppins mq450:gap-[4.125rem_0rem] mq750:gap-[4.125rem_0rem]">
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.25rem] pl-[1.563rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.063rem_0rem] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0rem_2.875rem] max-w-full mq750:gap-[0rem_2.875rem]">
            <h1 className="m-0 relative text-inherit leading-[7.25rem] font-extrabold font-inherit mq450:text-[2.813rem] mq450:leading-[4.375rem] mq1050:text-[3.75rem] mq1050:leading-[5.813rem]">
              work
            </h1>
            <img
              className="h-[0.25rem] flex-1 relative max-w-full overflow-hidden min-w-[40.313rem] mq750:min-w-full"
              loading="eager"
              alt=""
              src="/line-3.svg"
            />
          </div>
          <div className="w-[56.625rem] flex flex-row items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] box-border max-w-full text-[1.5rem] text-white">
            <div className="flex-1 relative leading-[2.75rem] inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[2.188rem]">
            <ol>
        <li>Web Development: Bootstrap, HTML, CSS JavaScript</li>
        <li>Mobile App Development: React Native, JavaScript </li>
        <li>Programming Languages: C++, Jva, Python</li>
        <li>Database Management: SQL, MongoDB</li>
        <li>Version Control: Git, GitHub</li>
    </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1.563rem] max-w-full mq1050:flex-wrap">
              <h1 className="m-0 relative text-inherit leading-[7.25rem] font-extrabold font-inherit inline-block min-w-[27.938rem] max-w-full mq450:text-[2.813rem] mq450:leading-[4.375rem] mq750:min-w-full mq1050:text-[3.75rem] mq1050:leading-[5.813rem] mq1050:flex-1">
                Projects
              </h1>
              <img
                className="h-[0.25rem] flex-1 relative max-w-full overflow-hidden min-w-[31.063rem] mq750:min-w-full"
                loading="eager"
                alt=""
                src="/line-4.svg"
              />
            </div>
      <div className="w-[56.625rem] flex flex-row items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] box-border max-w-full text-[1.5rem] text-white">
            <div className="flex-1 relative leading-[2.75rem] inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[2.188rem]">
           
      <div class="project">
        <h3>Project 1: Web Development</h3>
        <p>Description: A responsive website built using HTML, CSS, and JavaScript.</p>
        <p>Skills Used: HTML, CSS, JavaScript</p>
    </div>
    <div class="project">
        <h3>Project 2: Mobile App Development</h3>
        <p>Description: A mobile app developed using React Native for Android and iOS platforms.</p>
        <p>Skills Used: React Native, JavaScript</p>
    </div>
    <div class="project">
        <h3>Project 3: Event Management</h3>
        <p>Description: A Event management system built using SQL AND C# .net .</p>
        <p>Skills Used: MySQL, MongoDB</p>
    </div>
      </div>
    </div>
      
    </div>
  );
};

export default GroupCopy;
