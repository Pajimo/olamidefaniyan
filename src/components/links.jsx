const ProfileLinks = () => {
  return (
    <div className="flex justify-center mt-10 space-x-6 text-black pb-10">
      <a href="https://github.com/Pajimo" target="_blank" className="bg-black">
        <button className="text-white p-3">GitHub</button>
      </a>
      <a href="https://www.linkedin.com/in/olamide-faniyan-30ab7422b/"target="_blank" className="bg-black">
        <button className="text-white p-3">Linkedin</button>
      </a>
      <a href="mailto:faniyanolamide@gmail.com" target="_blank" className="bg-black">
        <button className="text-white p-3">Email</button>
      </a>
    </div>
  );
};

export default ProfileLinks;
