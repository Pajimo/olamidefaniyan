import Container from "@mui/material/Container";
import ProfileLinks from "./links";
import Form from "./forms";

const Contact = () => {
  return (
    <div>
      <Container className="font-mono ml-2 mr-2 text-zinc-700">
        <div className="text-5xl text-black text-center font-bold">Contact</div>
        <div className="mt-10 text-2xl font-semibold text-zinc-600 md:text-center">
          Have a question? <br></br>Contact me through
          any of the following below
        </div>
        <Form />
        <ProfileLinks />
      </Container>
    </div>
  );
};

export default Contact;
