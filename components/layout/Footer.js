import { Fragment } from "react";
import Image from "next/image";

import classes from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <Fragment>
      <section className={classes.root}>
        <div className={classes.logo}>
          {/* <Image src="/images/logo/logo7.png" width={34} height={37} /> */}
          <img src='/images/logo/logo7.png' alt='Logo footer'/>
          <h5 style={{ marginTop: "-10px" }}>Moni Inc</h5>
        </div>
        
        <div className={classes.bottomNav}>
          <ul>
            <li className={classes.listTitle}>Explore</li>
          </ul>
          <ul>
          <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/smart-watches">Smart Watches</Link>
            </li>
            <li>
              <Link href="/analog-watches">Analog Watches</Link>
            </li>
            <li>
              <Link href="/gift-box">Gift Box</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className={classes.about}>
          <h4>About Moni Watches Inc.</h4>
          <p>
            Moni Watches Inc. was established and founded out of the love for
            wrist watches. The company deals with all types of wrist watches for
            everyone. With Moni Watches Inc., you are guaranteed
            quality, luxur, and fashion.
          </p>
        </div>

      </section>
      <section>
        <div className={classes.copyright}>Powered by Moni Inc.</div>
      </section>
    </Fragment>
  );
}

export default Footer;
