// Pages/detail/[id].js
import Image from "next/image";
import { shoes } from "../../components/Data";

/**
 * This function generates the list of paths for statically generated pages.
 * It is used by Next.js to pre-render the pages at build time.
 *
 * @function getStaticPaths
 * @returns {Object} An object containing the paths and fallback status.
 * @property {Array} paths - An array of objects representing the paths to be pre-rendered.
 * Each object should have a params property with an id key, corresponding to the shoe's id.
 * @property {boolean} fallback - A boolean indicating whether to fallback to server-side rendering for
 * paths not listed in the paths array. Set to false to generate a 404 page for unknown paths.
 */

export async function getStaticPaths() {
  const paths = shoes.map((shoe) => ({ params: { id: shoe.id } }));
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const shoe = shoes.find((shoe) => shoe.id === params.id);
  return { props: { shoe } };
}

const ShoeDetail = ({ shoe }) => {
  return (
    <div>
      <h1>{shoe.name}</h1>
      <p>{shoe.description}</p>
      <Image src={shoe.source} alt={shoe.name} />
    </div>
  );
};

export default ShoeDetail;
