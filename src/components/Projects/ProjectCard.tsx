interface ProjectCardProps {
  data: string[];
  repo?: boolean;
  doc?: boolean;
  web?: boolean;
  repo_link?: string;
  doc_link?: string;
  web_link?: string;
}

const ProjectCard = ({
  data,
  repo,
  repo_link,
  doc,
  doc_link,
  web,
  web_link,
}: ProjectCardProps) => {
  return (
    <div className=" w-[400px] h-[650px] rounded-[16px] shadow-custom mx-[50px] mb-[70px] bg-white text-black">
      <img
        className=" w-[400px] h-[210px] rounded-t-[16px] mb-[20px]"
        src={data[0]}
        alt="project_image"
      />
      <h2 className=" my-[20px] text-center text-[24px] font-semibold">
        {data[1]}
      </h2>
      <div className=" w-[350px] text-justify mx-auto mb-[50px]">
        <p>{data[2]}</p>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-[50px]">
        {repo && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={repo_link}
            className=" transition-all duration-[0.2s] ease-out hover:scale-[1.1]"
          >
            <img
              className=" w-[50px]"
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733417591/portfolio/ihtebuqsqrrgvd6fjiev.png"
              alt="repo_icon"
            />
          </a>
        )}

        {doc && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={doc_link}
            className=" transition-all duration-[0.2s] ease-out hover:scale-[1.1]"
          >
            <img
              className=" w-[50px]"
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733418875/portfolio/gclghq8ol3x1rmfecgdw.png"
              alt="doc_icon"
            />
          </a>
        )}

        {web && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={web_link}
            className=" transition-all duration-[0.2s] ease-out hover:scale-[1.1]"
          >
            <img
              className=" w-[50px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/768px-Globe_icon.svg.png"
              alt="web_icon"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
