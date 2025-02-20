interface CertificateCardProps {
  data: string[];
  henry?: boolean;
}

const CertificateCard = ({ data, henry }: CertificateCardProps) => {
  return (
    <div className=" flex flex-col w-[350px] p-6 gap-[10px] mx-auto border rounded-[5px] bg-[#42425f] bg-opacity-80 backdrop-blur-sm">
      <img className=" w-[50px]" src={data[0]} alt="udemy_logo" />
      <h3 className=" font-bold">{data[1]}</h3>
      <h4 className={`font-thin ${henry ? "mb-[19px]" : ""} `}>{data[2]}</h4>

      <a
        className=" flex items-center justify-center bg-[#8b0000cc] w-[150px] h-[30px] rounded-[8px] border-[2px] border-solid border-white/20 transition-all duration-[0.3s] ease-out hover:scale-[1.1] shadow-custom hover:shadow-custom-hover hover:bg-[#aa0000e6]"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            data[3],
            "_blank",
            `${henry ? "width=900,height=550" : "width=900,height=720"}`
          );
        }}
      >
        Ver Certificado
      </a>
    </div>
  );
};

export default CertificateCard;
