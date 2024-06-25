import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import "./index.scss";
export default function HomePage() {
  return (
    <div id="Homepage">
      <Title title="Home Page" />
      <Navbar activeLi="home" />
      Home Page
      <Footer />
    </div>
  );
}
