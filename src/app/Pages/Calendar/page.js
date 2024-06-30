import InfoCard from "@/app/components/InfoCard";

export default function Collections() {
  // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', Sept]

  return (
    <main>
      <div className="min-h-[92vh] grid md:grid-cols-12 grid-rows-12 gap-3 m-2 font-mono">
        {/* hero section */}
        <div className="md:col-span-12 row-span-5 bg-red-500 rounded-md p-4 flex flex-col md:flex-row max-w-[1040px">
          {/* left hero */}
          <article className="w-full h-[350px] md:w-1/2 md:h-full bg-red-950 max-w-[600px] m-auto"></article>

          {/* right hero */}
          <article className="w-full h-[400px] md:w-1/2 md:h-full bg-red-100 max-w-[600px] m-auto"></article>
        </div>
      </div>
    </main>
  );
}
