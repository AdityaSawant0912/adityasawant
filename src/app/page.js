import Link from "next/link";
import Contacts from "./components/HOC/Contacts";
import About from "./components/HOC/About";
import Education from "./components/HOC/Education";
import FeaturedTalks from "./components/HOC/FeaturedTalks";
import Projects from "./components/HOC/Projects";
import WorkExperices from "./components/HOC/WorkExperices";
import Footer from "./components/HOC/Footer";
import Image from "next/image";

export async function generateMetadata(props, parent) {
  return {
    cannonical: "https://adityasawant.vercel.app",
    robotsProps: {
      nosnippet: false,
      notranslate: true,
      noimageindex: true,
      noarchive: true,
      maxSnippet: -1,
      maxImagePreview: "none",
      maxVideoPreview: -1,
    },
    openGraph: {
      url: "https://adityasawant.vercel.app",
      title: "Aditya Sawant",
      description: "Aditya Sawant's Portfolio",
      images: [
        {
          url: "https://adityasawant.vercel.app/logo-circle.webp",
          width: 2160,
          height: 2160,
          alt: "Logo",
        },
        {
          url: "https://adityasawant.vercel.app/logo-square.webp",
          width: 400,
          height: 400,
          alt: "Logo",
        },
        {
          url: "https://adityasawant.vercel.app/logo-circle.png",
          width: 2160,
          height: 2160,
          alt: "Logo",
        },
        {
          url: "https://adityasawant.vercel.app/logo-square.png",
          width: 400,
          height: 400,
          alt: "Logo",
        },
      ],
    },
    twitter: {
      handle: "@adzzhere",
      site: "@adzzhere",
      cardType: "summary_large_image",
    },
  };
}

export default function Home() {
  return (
    <>
      <header className="mx-auto mb-[80px] flex text-[#797673] max-w-[608px] justify-between">
        <div className="leading-[24px]  box-border font-[500] heading ">
          <Image
            src={"/headshot.jpg"}
            alt="Aditya Sawant Headshot"
            width={400}
            height={400}
            quality={90}
          />
          <div className="">
            <h1 className="text-highlight">Aditya Sawant</h1>
            MS CS @{" "}
            <Link
              href={"https://www.buffalo.edu/"}
              target="_blank"
              className="decoration-[#797673] underline"
            >
              University at Buffalo
            </Link>
            <br />
            Software Development Intern @{" "}
            <Link
              href={"https://www.channelcore.io/"}
              target="_blank"
              className="decoration-[#797673] underline"
            >
              Channel Core
            </Link>
            <br />
            Ex - Software Development Engineer @{" "}
            <Link
              href={"https://www.cartradetech.com/"}
              target="_blank"
              className="decoration-[#797673] underline"
            >
              CarTrade Tech
            </Link>
            <br />
            <i>Software Engineer. Problem Solver. Perpetually curious.</i>
            <br />
            Buffalo, New York
          </div>
        </div>
      </header>
      <main>
        <About />
        <Contacts />
        <Education />
        <WorkExperices />
        <Projects />
        <FeaturedTalks />
      </main>
      <Footer />
    </>
  );
}
