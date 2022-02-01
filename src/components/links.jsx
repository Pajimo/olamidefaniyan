import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ProfileLinks = () => {
  return (
    <div className="flex justify-center mt-10 space-x-6 text-green-400">
      <a href="https://github.com/Pajimo" _target>
        <GitHubIcon style={{ fontSize: 60 }} />
      </a>
      <a href="https://www.linkedin.com/in/olamide-faniyan-30ab7422b/" _target>
        <LinkedInIcon style={{ fontSize: 60 }} />
      </a>
      <a href="mailto:faniyanolamide@gmail.com" _target>
        <EmailIcon style={{ fontSize: 60 }} />
      </a>
    </div>
  );
};

export default ProfileLinks;
