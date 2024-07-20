import Image from "next/image";

export default function Card({
  source,
  title,
  colors,
  brand,
  rarity,
  date,
  price,
}) {
  return (
    <>
      <div className="relative w-60 h-[20rem] bg-[#2C2B3C20] shadow-xl rounded-md hover:scale-110 duration-200">
        <section className="h-2/5">
          <Image
            src={source}
            width={180}
            height={180}
            alt={title}
            className="m-auto"
          />
        </section>
        <section className="h-3/5 bg-gray-500 rounded-b-lg pt-2 pl-3 mt-8 flex flex-col">
          <h1 className="text-xl">{title}</h1>
          <h2 className="text-[8px] mb-4">{colors}</h2>

          <div className="text-xs">
            <p>{brand}</p>
            <p>{rarity}</p>
            <p>{date}</p>
            <h3 className="mt-4 bg-[#2C2B3C] text-[#a4a0de] w-fit px-4 rounded-md">
              <span className="text-xl">$</span>
              {price}
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}
