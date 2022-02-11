import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  return (
    <Container className="pt-20 pb-20 h-screen">
      <div className="text-gray-300 leading-10 font-semibold font-mono ml-5 mr-5">
        <div className="">
          <div className="text-green-500 text-lg">Hi, my name is</div>
          <div>
            <div className="md:text-6xl text-4xl mt-2 text-slate-100">
              Olamide Faniyan
            </div>
            <div className="md:text-5xl text-4xl pt-2 font-bold text-zinc-500">
              I build <i>inviolable</i> websites{" "}
            </div>
            <div className="md:text-2xl text-lg pt-5 mt-20">
              I'm a Front End Developer{" "}
            </div>
          </div>
          <div className="mt-5">
            <Button
              size="large"
              variant="outlined"
              style={{
                color: "lightgreen",
                borderColor: "darkgreen",
                borderWidth: 3,
                width: 200,
                height: 70,
              }}
            >
              Learn more{" "}
              <KeyboardArrowDownIcon style={{ marginLeft: 2, fontSize: 30 }} />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
