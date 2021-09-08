import { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import classes from "./ScrollToTop.module.css";

const ScrolloTop = ({showBelow}) => {
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
          if (!show) setShow(true);
        } else {
          if (show) setShow(false);
        }
      };

      const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
      };

      useEffect(() => {
        if (showBelow) {
          window.addEventListener(`scroll`, handleScroll);
          return () => window.removeEventListener(`scroll`, handleScroll);
        }
      });

      return (
        <div>
              {
              show && <div className={classes.toTop}>
                <span>
                  <FontAwesomeIcon icon={faArrowUp} onClick={handleClick} />
                </span>
        </div>}
          </div>
        
      )
          
};

export default ScrolloTop;