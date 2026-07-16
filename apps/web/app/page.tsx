import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Trust from "@/components/home/Trust";
import Projects from "@/components/home/Projects";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import ProductGallery from "@/components/product/ProductGallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <FeaturedProducts />
      <Projects />
      <Testimonials />
      <CallToAction />
    </>
  );
}
