import Image from "next/image";

export default function InfoCard() {
  return (
    <section className="h-1/3 flex gap-4">
      <Image
        src="/blog/blog1smoke.png"
        alt="smoking raging bull 2.0"
        className="w-24 h-24 rounded-md"
        width={100}
        height={100}
      />
      <div>
        <h1>Article Title</h1>
        <div className="flex gap-10 text-[10px]">
          <p>Date</p>
          <p>Author Name</p>
        </div>
        <p className="text-xs mt-1 max-w-72">
          Extra words here to describe the article. The words are meant to only
          be this long. A snippet for time being. Get acquainted ...
        </p>
      </div>
    </section>
  );
}
