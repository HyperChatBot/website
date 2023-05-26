import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import {
  benefitOne,
  benefitTwo,
  benefitThree,
  benefitFour,
  benefitFive,
} from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Hyper Chat - Free Chat Bot</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="" title="Features">
        The core of Hyper Chat is absolute data security, we use IndexedDB to
        store your data and API keys, and no data will be transmitted to the
        internet. Currently, we support various scenarios such as Chat,
        Completion, Audio Transcription, Audio Translation and Image Generation,
        with the support of the large language models and its API provided by
        OpenAI, Azure OpenAI service and Claude.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <Benefits imgPos="right" data={benefitFour} />
      <Benefits data={benefitFive} />
      <SectionTitle pretitle="" title="Watch a video">
        1-minute introduction to Hyper Chat.
      </SectionTitle>
      <Video />
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Home;
