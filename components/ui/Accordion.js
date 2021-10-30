import { useState } from "react";
import classes from "./Accordion.module.css";

const Accordion = ({ title, content}) => {
  const [isActive, setIsActive] = useState(false);

  return (
      <section className={classes.section}>
          <div className={classes.accordionItem}>
            <div className={classes.accordionTitle} onClick={() => setIsActive(!isActive)}>
              <div className={classes.title}>{title}</div>
              <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={classes.accordionContent}>{content}</div>}
          </div>
      </section>
          
  );
   
};

export default Accordion;
