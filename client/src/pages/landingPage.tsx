import { AboutUs } from "../components/aboutUs";
import { Carousel } from "../components/caraousel";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <AboutUs />
      <Footer />
    </>
  );
};
