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
      <div className="relative w-60 h-[20rem] bg-[#2C2B3C20] shadow-xl rounded-md hover:scale-110 hover:my-4 duration-200">
        <section className="h-2/5">
          <Image
            src={source}
            width={180}
            height={180}
            alt={title}
            className="m-auto hover:animate-bounce"
          />
        </section>
        <section className="h-3/5 rounded-b-lg pt-2 pl-3 mt-8 flex flex-col">
          <h1 className="text-xl">{title}</h1>
          <h2 className="text-[8px] mb-4">{colors}</h2>

          <div className="text-xs">
            <p>{rarity}</p>
            <p>{brand}</p>
            <p className="font-bold">{date}</p>
            <h3 className="mt-4 bg-[#2C2B3C] text-[#a4a0de] text-xl w-fit px-4 rounded-md">
              <span className="text-sm">$</span>
              {price}
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}
