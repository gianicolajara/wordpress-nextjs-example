import About from "../components/About";
import BlogsHome from "../components/BlogsHome";
import Heroe from "../components/Heroe";
import TypesCoffee from "../components/TypesCoffee";
import {
  getAboutUs,
  getBlogsToHomePage,
  getHeroe,
  getTypesCoffee,
} from "../lib/api";

export default function Home({ blogs, typesCoffee, aboutUs, heroe }) {
  return (
    <>
      <Heroe
        title={heroe?.title}
        description={heroe?.excerpt}
        imageData={heroe?.featuredImage.node}
      />
      <About
        title={aboutUs?.title}
        content={aboutUs?.excerpt}
        imageData={aboutUs?.featuredImage.node}
      />
      <TypesCoffee TypesCoffeeData={typesCoffee} />

      <BlogsHome blogs={blogs} />
    </>
  );
}

export const getStaticProps = async () => {
  const blogs = await getBlogsToHomePage();
  const typesCoffee = await getTypesCoffee();
  const aboutUs = await getAboutUs();
  const heroe = await getHeroe();

  return {
    props: {
      blogs,
      typesCoffee,
      aboutUs,
      heroe,
    },
  };
};
