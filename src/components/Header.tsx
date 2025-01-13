const Header = () => {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" flex w-[1200px] mx-auto justify-between p-5 gap-[20px] text-white my-[100px] font-noto">
      <div className=" flex gap-[20px]">
        <img
          className=" w-[200px] rounded-[50%]"
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/uowrytsl83v75ieoj9hq.jpg"
          alt="cv_logo"
        />
        <div className=" flex flex-col space-y-4">
          <h1 className=" text-[32px] font-[600]">Calvin Howard</h1>
          <h2 className=" text-[24px] font-[200]">
            Backend Developer || Full Stack Developer
          </h2>
          <div className=" flex items-center gap-4">
            <img
              className=" w-[30px]"
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/wbljo25mchvxyrd8ttup.png"
              alt="location_icon"
            />
            <h3 className=" text-[19px] font-bold">Bogotá, Colombia</h3>
          </div>
          <div className=" flex items-center gap-[20px] w-fit">
            <button
              onClick={handleScrollToForm}
              className=" flex gap-[10px] bg-[#8b0000cc] text-[15px] items-center justify-center w-[230px] h-[40px] rounded-[8px] border-[2px] border-white/20 transition-all duration-[0.3s] ease-out hover:scale-[1.1] hover:bg-[#aa0000] shadow-custom hover:shadow-custom-hover"
            >
              <img
                className=" w-[30px]"
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/lugn7xbqa5cbvocjfxic.png"
                alt="email_icon"
              />
              calvin.uhh@gmail.com
            </button>
            <div className=" flex gap-[20px]">
              <a
                className=" transition-all duration-[.3s] ease-in-out hover:scale-[1.2]"
                href="https://drive.google.com/file/d/168gxnurjo7Expo90msTg72XQZ8NLRfbm/view"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=" w-[45px]"
                  src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/emftua6x8kxuha56katy.png"
                  alt="doc_icon"
                />
              </a>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
