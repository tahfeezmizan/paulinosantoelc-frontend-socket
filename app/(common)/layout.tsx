import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Topbar from "@/components/shared/Topbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
