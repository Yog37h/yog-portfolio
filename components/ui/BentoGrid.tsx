import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import MagicButton from "../MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import dynamic from 'next/dynamic';

const glowingKeyframes = `
@keyframes glowing {
  100% {
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff, 0 0 35px #ff00ff;
  }
  50% {
    text-shadow: 0 0 2px #d02aba, 0 0 5px #ee16c3, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff;
  }
  100% {
    text-shadow: 0 0 5px #e51ba1, 0 0 10px #de12af, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff, 0 0 35px #ff00ff;
  }
}
`;

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [""];
  const rightLists = [""];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

   const driveLink = "https://drive.google.com/file/d/1xjMViu9CyKkF2K_gG-sOoFU166vY2VVh/view?usp=sharing"; // <-- Your Google Drive link here

  const handleClick = () => {
    setCopied(true);

    // Open the CV link after 3 seconds
    setTimeout(() => {
      window.open(driveLink, "_blank");
    }, 2500); // 3 seconds delay
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        animation: "gradientFlow 8s infinite",
        backgroundSize: "200% 200%",
      }}
    >
      <div
        className="h-full relative"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 w-full h-full z-0">
          {img && (
            <img
              src={img}
              alt={title as string}
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full transform group-hover/bento:scale-110 transition-transform duration-500"
              )}
            />
          )}
        </div>
        <div  
  className={`absolute right-15 -bottom-5 ${
    id === 5 && "w-full opacity-100"
  }`}
>
  {spareImg && (
  <img
    src={spareImg}
    alt="Spare Image"
    className={`object-cover object-center ${
      id === 5
        ? "w-full h-full top-0 bottom-0 right-0 left-0"  // Make image take full width and height, position at the top
        : "w-40 h-40 right-30 left-50"
    }`}
  />
)}

</div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

       <div
  className={cn(
    titleClassName,
    "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-10"
  )}
>
  <div className="font-sans font-extralight md:max-w-20 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
    {description}
  </div>
  <div
    className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${id === 2 ? "animate-glowing" : ""}`}
  >
    {title}
  </div>

  {id === 2 && <GridGlobe />}
{id === 3 && (
  <div className="flex gap-1 lg:gap-5 w-auto absolute left-55 right-3 lg:left-60">
    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 overflow-hidden h-10 lg:h-140 w-35">

    </div>
    <div className="icon-container" style={{ animation: "roll-down 15s linear infinite" }}>
      {[ "nodejs.svg", "nextjs1.svg", "flutter.svg", "angular.svg","nodejs.svg", "nextjs1.svg", "flutter.svg", "angular.svg"].map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Technology ${index}`}
          className="icon"
        />
      ))}
    </div>
  </div>
)}
{id === 4 && (
  <div className="flex justify-center items-center w-full p-4">
    <div className="flex flex-wrap gap-6 justify-center">
      {[
        "python.svg",  
        "java.svg",
        "c.svg",
        "typescript.svg",
        "javascript.svg",
        "mysqlfis.svg",
        "git.svg",
        "docker.svg",
        "figma.svg",
        "app.svg",
        "twilio1.svg"
      ].map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Technology ${index}`}
          className="h-10 w-10 lg:h-9 lg:w-9 object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,191,255,0.7)]"
        />
      ))}
    </div>
  </div>
)}
          {id === 6 && (
            <div className="mt-5 relative">
      <div
        className={`absolute -bottom-5 right-0 ${
          copied ? "block" : "block"
        }`}
      >
        <Lottie options={defaultOptions} height={200} width={400} />
      </div>
      <MagicButton
        title={copied ? "Thanks for the hi-fi dude !" : "Open my CV"}
        icon={<IoCopyOutline />}
        position="left"
        handleClick={handleClick}
        otherClasses="!bg-[#161A31]"
      />
    </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* Inject the glowing animation styles */
const style = document.createElement("style");
style.innerHTML = glowingKeyframes;
document.head.appendChild(style);


const gradientFlow = `
@keyframes gradientFlow {
  100% { background-position: 50% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 50% 50%; }
}
`;


/* Injecting animation styles dynamically */
const gradientStyle = document.createElement("style");
gradientStyle.innerHTML = gradientFlow;
document.head.appendChild(gradientStyle);


const rollDownKeyframes = `
@keyframes roll-down {
  0% {
    transform: translateY(0); /* Start from the top */
  }
  50% {
    transform: translateY(-50%); /* Move up by half the total container height */
  }
  100% {
    transform: translateY(-100%); /* Move up completely by the height of one full cycle */
  }
}

.icon-container {
  display: flex;
  flex-direction: column; /* Arrange icons vertically */
  width: 100%; /* Take up the full container width */
  height: 100%; /* Ensure the container has full height */
  overflow: hidden; /* Hide content that moves off-screen */
}

.icon-container img {
  margin-bottom: 10; /* No margin between images to ensure seamless transition */
  height: 90px; /* Increase height as needed */
  width: 150px;  /* Adjust width if necessary to maintain aspect ratio */
}



`;

const rollDownStyle = document.createElement("style");
rollDownStyle.innerHTML = rollDownKeyframes;
document.head.appendChild(rollDownStyle);

export const BentoGridItemWithNoSSR = dynamic(() => import("./BentoGridItem"), {
  ssr: false,
});




