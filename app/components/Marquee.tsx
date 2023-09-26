import { FortysevenLogo, WinkLogo, CrocsLogo, LogoBlackLegends, Paka, SpeidelLogo } from "./icons";

const Logos = () => (
  <>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <FortysevenLogo />
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <WinkLogo />
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <CrocsLogo />
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <LogoBlackLegends />
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <Paka/>
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <SpeidelLogo/>
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <FortysevenLogo />
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <WinkLogo />
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <CrocsLogo />
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
     <LogoBlackLegends />
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <Paka/>
    </div>
    <div className="flex items-center justify-center h-16 w-[240px]">
      <SpeidelLogo/>
    </div>
  </>
);
  
export default function Marquee() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="w-[200vw] md:w-screen relative min-h-[250px] flex items-center overflow-hidden">
        <div className="[&_svg]:max-h-full flex items-center absolute top-1/2 transform -translate-y-1/2 left-0 marquee w-[800vw] md:w-[400vw] hover:paused">
          <div className="w-[400vw] md:w-[200vw] flex gap-12 items-center pl-12">
            <Logos />
          </div>
          <div className="w-[400vw] md:w-[200vw] flex gap-12 items-center pl-12">
            <Logos />
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="border-t border-tuatara border-dashed" />
      </div>
    </div>
  );
}