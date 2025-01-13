const Technologies = () => {
  return (
    <div className=" flex w-[1200px] flex-col mx-auto gap-[10px] my-[100px]">
      <h2 className=" text-white text-[24px] font-noto font-bold mb-[30px]">
        Tecnologias
      </h2>
      <div className=" flex flex-wrap gap-[20px] justify-center w-[800px] mx-auto mb-[100px]">
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://juststickers.in/wp-content/uploads/2019/07/nodejs.png"
          alt="nodejs_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://keenethics.com/wp-content/uploads/2021/10/Express.js.svg"
          alt="express_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://upload.wikimedia.org/wikipedia/commons/0/00/HTML5_logo_black.svg"
          alt="html5_logo"
        />
        <img
          className=" w-[75px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
          alt="css3_logo"
        />
        <img
          className=" w-[100px] h-[100px] rounded-[8%] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
          alt="js_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
          alt="ts_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/r0vxhlnzhb4zxaovmpsm.png"
          alt="github_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
          alt="git_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp"
          alt="mongodb_logo"
        />
        <img
          className=" w-[150px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99177233598415E22A"
          alt="mongoose_logo"
        />
        <img
          className=" w-[120px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png"
          alt="mysql_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png"
          alt="postgresql_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/sequelize_original_logo_icon_146348.png"
          alt="sequelize_logo"
        />
        <img
          className=" w-[180px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/so51nrmeyaxtwby5cewo.png"
          alt="jwt_logo"
        />
        <img
          className=" w-[100px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.png?f=webp&w=256"
          alt="react_logo"
        />
        <img
          className=" w-[150px] h-[100px] transition-all duration-[0.2s] ease-out hover:scale-[1.3]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
          alt="tailwind_logo"
        />
      </div>

      <div className=" flex justify-center flex-col gap-[10px] mx-auto">
        <img
          className=" w-[300px]"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=calvinuhh&show_icons=true&locale=en&layout=compact"
          alt="github_stats"
        />
        <p className=" text-white font-noto ">
          Tomado de las estadisticas de GitHub
        </p>
      </div>
    </div>
  );
};

export default Technologies;
