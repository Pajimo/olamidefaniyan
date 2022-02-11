import Container from "@mui/material/Container";
import ProfileLinks from "./links";

const Contact = () => {
  return (
    <div>
      <Container className="text-center font-mono ml-2 mr-2 border-t border-emerald-400 text-gray-300">
        <div className="text-4xl underline mt-20">Contact</div>
        <div className="text-green-500 text-2xl mt-5">What's Next?</div>
        <div className="mt-10 text-2xl">
          Have a question or want to work together? <br></br>Contact me through
          any of the following below
        </div>
        <ProfileLinks />
      </Container>
    </div>
  );
};

export default Contact;
