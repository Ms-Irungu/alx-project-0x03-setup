import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;