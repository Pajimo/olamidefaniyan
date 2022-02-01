import "../../index.css";
import imrs from "../../assets/imrs.png";

const About = () => {
  return (
    <div className="about space-y-6 font-normal">
      <div className="flex flex-row">
        <div className="basis-2/3">
          <h1 className="text-5xl mb-10 mt-10">About Us</h1>
          <p className="mb-10 text-lg">
            SpikApp is a community with bullying prevention strategies. You get
            to speak to reliable Ally(Consultants, Counselors) who will
            enlighten you on bullying and how to win safely. Get help! Speak
            out! Download the SpikApp to Learn about bullying and stop it.
          </p>
          <section className="rounded-md border-4 p-10 text-lg bg-indigo-800 text-center mb-10 border-transparent text-white">
            <h3 className="text-3xl text-white mb-5">Our Story</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              metus , nulla ut tempor. cibus sociis blandit ornare amet. Fames
              sit senectus ultricies sagittis praesent convallis. Purus sem
              pretium facilisi sit sit faucibus in porta viverra.
            </p>
          </section>
          <section className="mb-10">
            <h3 className="text-3xl mb-5">Our Values</h3>
            <div className="columns-2 text-lg">
              <div>
                <h4 className="mb-4">Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  metus, nulla ut tempor. cibus sociis blandit ornare amet.
                  Famessit senectus ultric.
                </p>
              </div>
              <div>
                <h4 className="mb-4">Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  metus, nulla ut tempor. cibus sociis blandit ornare amet.
                  Famessit senectus ultric.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="pt-20">
            <img src={imrs} alt="imrs" className="w-100 md:w-120 lg:w-100" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
