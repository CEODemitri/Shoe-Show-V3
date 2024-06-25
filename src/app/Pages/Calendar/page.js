import InfoCard from "@/app/components/InfoCard";

export default function Collections() {
  // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', Sept]

  return (
    <main>
      <div className="my-2 md:my-0 md:m-2 font-mono">
        <article className="h-96 bg-[#DCE2F9] rounded-b-md flex gap-[75px] py-4">
          <section className="w-1/2 h-full bg-red-600 py-12">
            <h2>Articles</h2>
            <div>
              <InfoCard />
              <InfoCard />
            </div>
          </section>
          <section className="w-1/2 h-full bg-green-600"></section>
        </article>
      </div>
    </main>
  );
}
