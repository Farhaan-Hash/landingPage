import Header1 from "./Header1";
import ProductSection from "./ProductSection";
import Footer from "./Footer";

const OrganicLanding = () => {
  return (
    <div className="relative h-screen leading-normal tracking-normal bg-white z-10 ">
      <div
        className="absolute right-0 top-0 h-[896px] w-2/5 rounded-tl-[342px] rounded-bl-[342px] -z-10 bg-fill"
        style={{backgroundImage: `url("../assets/img1/bg.jpg")`}}
      ></div>
      <Header1 />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default OrganicLanding;
