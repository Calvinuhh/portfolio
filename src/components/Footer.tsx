const Footer = () => {
  return (
    <footer className=" text-white mt-[200px] flex w-[1200px]  mx-auto justify-between items-center mb-[10px]">
      <p>
        © 2025 <strong className=" text-red-400">Calvin Howard.</strong> Todos
        los derechos reservados.
      </p>
      <div className=" flex gap-[20px]">
        <a
          className=" transition-all duration-[.3s] ease-in-out hover:scale-[1.2]"
          href="https://www.linkedin.com/in/calvin-howard-853895283/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" w-[45px]"
            src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/gcigxgrcmfxihk1easff.png"
            alt="linkedin_icon"
          />
        </a>

        <a
          className=" transition-all duration-[.3s] ease-in-out hover:scale-[1.2]"
          href="https://github.com/Calvinuhh"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" w-[45px]"
            src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/r0vxhlnzhb4zxaovmpsm.png"
            alt="github_icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
