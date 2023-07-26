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

const Home = ({downloadUrl}) => {
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
      <Hero downloadUrl={downloadUrl} />
      <SectionTitle pretitle="" title="Features">
        The core of Hyper Chat is absolute data security, we use IndexedDB to
        store your data and API keys, and no data will be transmitted to the
        internet. Currently, we support various scenarios such as Chat Completion,
        Text Completion, Audio Transcription, Audio Translation and Image Generation,
        with the support of the large language models and its API provided by
        OpenAI and Azure OpenAI service.
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
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const userAgent = context.req.headers["user-agent"];

  let platform = "darwin";

  if (/Win/i.test(userAgent)) {
    platform = "win64";
  } else if (/Linux/i.test(userAgent)) {
    platform = "linux";
  } else if (/Mac/i.test(userAgent)) {
    platform = "darwin";
  }

  const res = await fetch(
    `https://faas.yancey.app/api/updater/${platform}/cross-platform/latested?code=PjS1zF7Vc1QMrJ80C3xJS1tqkGqH-pT4oNlPfkFBYt0YAzFupnB5tA==`
  );
  const data = await res.json();

  return {
    props: { downloadUrl: data.url }, // will be passed to the page component as props
  };
}

export default Home;
