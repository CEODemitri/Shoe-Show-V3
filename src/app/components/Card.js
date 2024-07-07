import Image from "next/image";

export default function Card({ title, colors, rarity }) {
  return (
    <>
      <div className="relative w-60 h-[22rem] bg-[#2C2B3C20] shadow-xl rounded-lg">
        <section className="h-3/5">
          <Image
            src="/release/sacremento3home.png"
            width={180}
            height={180}
            alt="another release"
            className="m-auto"
          />
        </section>
        <section className="h-2/5 bg-gray-500 rounded-b-lg pt-2 pl-3">
          <h1 className="text-2xl">{title}</h1>
          <h2>{colors}</h2>

          <div className="text-xs">
            <p>{rarity}</p>
            <p>Rarity</p>
            <h3>Rarity</h3>
          </div>
        </section>
      </div>
    </>
  );
}
