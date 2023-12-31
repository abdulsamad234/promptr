import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />{" "}
        <span className="blue_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptr is an open AI tool built to help you discover and share creative
        prompts that unlock AI
      </p>
      <Feed />
    </section>
  );
};

export default Home;
