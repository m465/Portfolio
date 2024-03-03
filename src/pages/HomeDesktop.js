import FRAMEnav from "../components/FRAMEnav";
import MLFramework from "../components/MLFramework";
import FrameAboutText from "../components/FrameAboutText";
import GroupCopy from "../components/GroupCopy";
import DesignPortfolioGroup from "../components/DesignPortfolioGroup";
import Akariconsgithubfill from "../components/Akariconsgithubfill";

const HomeDesktop = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[4.188rem] box-border gap-[0.75rem_0rem] tracking-[normal]">
      <FRAMEnav />
      <MLFramework />
      <FrameAboutText />
      <section className="w-[81.625rem] flex flex-row items-start justify-start pt-[0rem] pb-[5.688rem] pr-[0rem] pl-[0.563rem] box-border max-w-full mq450:pb-[2.375rem] mq450:box-border mq750:pb-[3.688rem] mq750:box-border">
        <GroupCopy />
      </section>
      <DesignPortfolioGroup />
      <div className="w-[79.75rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.688rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
          <Akariconsgithubfill />
          <div className="flex flex-row items-center justify-start gap-[0rem_0.938rem]">
            <img
              className="h-[4.625rem] w-[4.625rem] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/icbaselinefacebook.svg"
            />
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
              <img
                className="w-[3.938rem] h-[3.938rem] relative"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
            </div>
            <img
              className="h-[3.938rem] w-[4.25rem] relative"
              alt=""
              src="/akaricons-githubfill.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesktop;
