import Image from "next/image";
const Brands = () => {
  const brands = [
    { logo: "BMW.svg", name: "", link: "" },
    { logo: "LandRover.svg.png", name: "", link: "" },
    { logo: "Mercedes-Logo.svg.png", name: "", link: "" },
    { logo: "Bugatti_Logo.png", name: "", link: "" },
    { logo: "ferrari.jpg", name: "", link: "" },
    { logo: "mclaren.jpg", name: "", link: "" },
    { logo: "lamborghini.png", name: "", link: "" },
    { logo: "Brabus-Logo.png", name: "", link: "" },
    { logo: "rolls_royce.png", name: "", link: "" },
    { logo: "jaguar-logo-non-transparent.jpg", name: "", link: "" },
    { logo: "maybach.jpg", name: "", link: "" },

    { logo: "mclaren.jpg", name: "", link: "" },

    { logo: "Volkswagen-Logo.png", name: "", link: "" },
    { logo: "pagani.webp", name: "", link: "" },
    { logo: "aston-martin.png", name: "", link: "" },
    { logo: "Audi-Logo.png", name: "", link: "" },
    { logo: "mini-logo.png", name: "", link: "" },
    { logo: "range-rover.png", name: "", link: "" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-14">
      <div className=" grid grid-cols-6 gap-12">
        {brands.map((brand, idx) => (
          <div key={idx} className=" aspect-square ">
            <Image
              src={`/brand-logos/${brand.logo}`}
              alt={brand.name}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
