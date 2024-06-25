export default function InfoCard() {
  return (
    <div className="h-full flex">
      <div className="image w-24 h-24 bg-blue-300"></div>
      <article>
        <h1>Article Title</h1>
        <section className="text-xs flex gap-[55px]">
          <p>Date</p>
          <p>Author Name</p>
        </section>
        <p className="text-sm w-6/7">
          Extra words here to describe the article. The words are meant to only
          be this long. A snippet for time being. Get acquainted ...
        </p>
      </article>
    </div>
  );
}
