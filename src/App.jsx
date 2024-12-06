import FiestPage from "./assets/FiestPage";
import FourthPage from "./assets/FourthPage";
import HoverImg from "./assets/HoverImg";
import Imagesscroll from "./assets/Imagesscroll";
import Navbar from "./assets/Navbar";
import TextBelowImg from "./assets/TextBelowImg";
import TwoCards from "./assets/TwoCards";
import FifthPage from "./assets/FifthPage";
import Sixth from "./assets/Sixth";
import SeventhPage from "./assets/SeventhPage";
import Footer from "./assets/Footer";

export default function App() {
  return (
    <div className="bg-[#E4E4E4]">
      <Navbar></Navbar>
      <FiestPage></FiestPage>
      <Imagesscroll></Imagesscroll>
      <TextBelowImg></TextBelowImg>
      <FourthPage></FourthPage>
      <HoverImg></HoverImg>
      <TwoCards></TwoCards>
      <FifthPage></FifthPage>
      <Sixth></Sixth>
      <SeventhPage></SeventhPage>
      <Footer></Footer>
    </div>
  )
}