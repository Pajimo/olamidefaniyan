import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  return (
    <Container className="pt-20 pb-20">
      <div className="text-gray-300 leading-10 font-semibold font-mono">
        <div className="">
          <div className="text-green-500 text-lg">Hi, my name is</div>
          <div>
            <div className="text-6xl mt-2">Olamide Faniyan</div>
            <div className="text-5xl pt-5 font-semibold text-gray-200">
              I build strong websites{" "}
            </div>
            <div className="text-2xl pt-5">I'm a Front End Developer </div>
          </div>
          <div className="mt-5">
            <Button
              variant="outlined"
              style={{
                color: "lightgreen",
                borderColor: "darkgreen",
                borderWidth: 3,
              }}
            >
              Learn more <KeyboardArrowDownIcon style={{ marginLeft: 2 }} />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
