import "./footer.scss";
import { FaMailBulk, FaPhoneAlt, FaDotCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <div id="footer">
      <div className="top_footer">
        <ul>
          <li>our mission</li>
          <FaDotCircle />
          <li>awards</li>
          <FaDotCircle />
          <li>experience</li>
          <FaDotCircle />
          <li>success story</li>
        </ul>
        <div className="right_top_footer">
          <div>
            <i>
              <FaPhoneAlt />
            </i>
            + 1(212) 255-511
          </div>
          <div>
            <i>
              <FaMailBulk />
            </i>
            info@xcare.com
          </div>
        </div>
      </div>
    </div>
  );
}
