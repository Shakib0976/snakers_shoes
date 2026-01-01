import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
