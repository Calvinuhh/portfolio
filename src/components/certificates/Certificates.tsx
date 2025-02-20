import CertificateCard from "./CertificateCard";

const Certificates = () => {
  return (
    <div className=" flex flex-col w-[1200px] mx-auto text-white font-noto my-[100px] mb-[150px] ">
      <h2 className=" text-[24px] font-bold mb-[100px]">
        Licencias y Certificaciones
      </h2>
      <div className=" flex p-2 gap-[50px] w-[1000px] flex-wrap mx-auto ">
        <CertificateCard
          data={[
            "https://res.cloudinary.com/deotitxt8/image/upload/portfolio/png-transparent-udemy-round-logo-tech-companies_zhai2f.png",
            "Node.js - Desarrollo Web, MVC y APIs REST",
            "Udemy",
            "https://udemy-certificate.s3.amazonaws.com/pdf/UC-624ddf45-25c2-43a5-9c70-6d9890a23c41.pdf",
          ]}
        />
        <CertificateCard
          data={[
            "https://res.cloudinary.com/deotitxt8/image/upload/portfolio/png-transparent-udemy-round-logo-tech-companies_zhai2f.png",
            "Master en APIs RESTful con Node.js, crea 3 Backends",
            "Udemy",
            "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4cddfdee-2988-4f1e-a468-0378b7c4c732.pdf",
          ]}
        />
        <CertificateCard
          data={[
            "https://res.cloudinary.com/deotitxt8/image/upload/portfolio/png-transparent-udemy-round-logo-tech-companies_zhai2f.png",
            "Máster en javascript, aprende Node, jquery, Angular, TypeScript",
            "Udemy",
            "https://udemy-certificate.s3.amazonaws.com/pdf/UC-03c1dfc1-71b0-49c1-9977-ca34849ea213.pdf",
          ]}
        />
        <CertificateCard
          data={[
            "https://res.cloudinary.com/deotitxt8/image/upload/v1740059400/portfolio/efec-logo-white_lqgze9.png",
            "EFSET English Certificate 67/100 (C1 Advanced)",
            "EFSET",
            "https://cert.efset.org/y47C83",
          ]}
        />
        <CertificateCard
          data={[
            "https://res.cloudinary.com/deotitxt8/image/upload/v1740059750/portfolio/soyhenry_m6eruu.png",
            "Full Stack Developer",
            "Soy Henry",
            "https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=90919c4249f9deb146a1fe52bbcd7e4f9f95168fbe985954a2f1b5689133f933",
          ]}
          henry={true}
        />
        <CertificateCard
          data={[
            "https://res.cloudinary.com/deotitxt8/image/upload/portfolio/png-transparent-udemy-round-logo-tech-companies_zhai2f.png",
            "Curso completo de C# para ser desarrollador .NET",
            "Udemy",
            "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9e2458c2-cf77-485f-9e56-24727e5809ec.pdf",
          ]}
        />
      </div>
    </div>
  );
};

export default Certificates;
