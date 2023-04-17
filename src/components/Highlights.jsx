import { FaBolt, FaBookOpen, FaTags } from "react-icons/fa";
import Hightlight from "./uirepeat/Hightlight";

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Hightlight
              highlight_subtitle={"Easy and Quick"}
              highlight_para={
                "Get access to the book you purchased online instantly."
              }
              highlight_img={<FaBolt />}
            />
            <Hightlight
              highlight_subtitle={"10,000+ Books"}
              highlight_para={
                " Library has books in all your favorite categories."
              }
              highlight_img={<FaBookOpen />}
            />
            <Hightlight
              highlight_subtitle={"Affordable"}
              highlight_para={
                "Get your hands on popluar books for as little as $10."
              }
              highlight_img={<FaTags />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
