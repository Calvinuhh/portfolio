import Swal from "sweetalert2";

function myFunction(string: string, texto: string) {
  return string
    .split(" ")
    .filter((str) => str !== texto)
    .join(" ");
}

const ExperienceCard = ({
  data,
  ti,
  details,
}: {
  data: string[];
  ti: boolean;
  details: string;
}) => {
  const showAlert = () => {
    Swal.fire({
      text: details,
      icon: "info",
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <div className=" w-[500px] h-[260px] flex gap-[20px] shadow-custom p-5 border rounded-[10px] relative bg-[#42425f] bg-opacity-80 backdrop-blur-sm">
      <img
        className={` w-[120px] h-[110px] ${ti ? "rounded-[50%]" : ""}`}
        src={data[0]}
        alt="corp_logo"
      />
      <div>
        <h3 className=" text-[24px] font-thin">{data[1]}</h3>
        <h3 className=" text-[20px] font-bold">{data[2]}</h3>
        <h4 className=" text-[18px] font-thin">
          {data[3].includes("actualmente") ? (
            <>
              {myFunction(data[3], "actualmente")} <strong>actualmente</strong>
            </>
          ) : (
            data[3]
          )}
        </h4>

        <p className=" font-bold">{data[4]}</p>
        <p className=" font-thin">{data[5]}</p>
      </div>

      <button
        className=" absolute bottom-2 right-4 transition-all duration-[0.2s] ease-out hover:scale-[1.1]"
        onClick={showAlert}
      >
        Ver detalles
      </button>
    </div>
  );
};

export default ExperienceCard;
