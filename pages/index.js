import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Button from "../components/ui/Button";
import classes from "../styles/Home.module.css";
import { connectDB, getHomePageProducts } from "../utils/db";

export default function Home(props) {

  const router = useRouter();

  function goToAnalogShopHandler() {
    router.push('/analog-watches')
  }

  function goToSmartShopHandler() {
    router.push('/smart-watches')
  }

  return (
    <Fragment>
      <section className={classes.jumbotron}>
        <div className={classes.content}>
          <h1>Welcome to Moni Watches Inc.</h1>
          <p>
            The place for quality, elegant, and trendy watches.
          </p>
          <div className={classes.actions}>
            <div style={{ padding: "10px" }}>
              {/* <button>Smart Watches</button> */}
              <Button onClick={goToSmartShopHandler}>Smart Watches</Button>
            </div>
            <div style={{ padding: "10px" }}>
              {/* <button>Digital Watches</button> */}
              <Button onClick={goToAnalogShopHandler}>Analog Watches</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.partners}>
        <div>
          <h1 style={{ fontFamily: "Dancing Script" }}>apple</h1>
        </div>
        <div>
          <h1 style={{ fontFamily: "Kirang Haerang" }}>megir</h1>
        </div>
        <div>
          <h1 style={{ fontFamily: "Kirang Haerang" }}>lige</h1>
        </div>
        <div>
          <h1 style={{ fontFamily: "Lobster" }}>rolex</h1>
        </div>
      </section>

      <section className={classes.inStockSection}>
        <div className={classes.content}>
          <h1>
            Looking for quality watches. Something fashionable yet luxurious?
            Look no further.
          </h1>
          <p>
          Moni Watches Inc. features over 20 brands 
          of watches. Our clients may select from a variety of products that guarantee durability 
          and quality. 
          </p>
          <hr />
        </div>

        <div className={classes.inStockImg}>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/smart_watch/rohan-SweqUUwNRQ0-unsplash.jpg"
              width={500}
              height={500}
            />
            <div className={classes.text}>
              <h3>Smart Watches</h3>
              <p>In stock</p>
            </div>
          </div>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/analog_watch/bence-balla-schottner-9JORz4CuUcI-unsplash.jpg"
              alt="analog watch"
              width={500}
              height={500}
            />
            <div className={classes.text}>
              <h3>Digital Watches</h3>
              <p>In stock</p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.boostedSmartWatchSection}>
        <div className={classes.boostedSmartWatch}>
        <div className={classes.content}>
            <h1>Smart Watch</h1>
            <p>Be on time. Be tech savvy.Be stylish. Be trendy. </p>
            <div className={classes.actions}>
              {/* <button>Shop Now</button> */}
              <Button onClick={goToSmartShopHandler}>Shop Now</Button>
          </div>

          </div>
          <div style={{borderRadius: '5px'}}>
            <Image
              src="/images/watches/smart_watch/simon-daoudi-2wFoa040m8g-unsplash.jpg"
              alt="smart watch"
              width={400}
              height={350}
            />
          </div>
          <div>
            <Image
              src="/images/watches/smart_watch/infino-photography-KjsRBYfj9hA-unsplash.jpg"
              alt="smart watch"
              width={400}
              height={350}
            />
          </div>
         
        </div>
      </section>

      <section className={classes.jumbotron_two_high_performance}>
        <h3>High Performance</h3>
        <h1>Quality Analog Watches</h1>
       
          <p>
            Get to a meeting on time. Get to a party on time. Don't keep your date
            waiting. Shopping has never been easier.
          </p>
     
        <div className={classes.actions}>
          <Button onClick={goToAnalogShopHandler}>Shop Now</Button>
        </div>
      </section>

    

      

      {/* <section className={classes.inStockSection}>
      <div className={classes.inStockImg}>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/footer_analog/clickiopath-nJaRLGPIQu4-unsplash.jpg"
              width={500}
              height={600}
            />
            <div className={classes.text}>
              <h3>Ladie's Watches</h3>
              <p>In stock</p>
            </div>
          </div>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/analog_watch/pat-taylor-12V36G17IbQ-unsplash.jpg"
              alt="analog watch"
              width={500}
              height={600}
            />
            <div className={classes.text}>
              <h3>Men's Watches</h3>
              <p>In stock</p>
            </div>
          </div>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/smart_watch/daniel-korpai-QhF3YGsDrYk-unsplash.jpg"
              alt="analog watch"
              width={500}
              height={600}
            />
            <div className={classes.text}>
              <h3>Digital Watches</h3>
              <p>In stock</p>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
}


export async function getStaticProps() {
  const client = await connectDB();

  const products = await getHomePageProducts(client, 'watches', 10);

  client.close();

  return {
    props: {
      products: products.map((product) => ({
        title: product.title,
        price: product.price,
        id: product._id.toString()
      })),
    },
    revalidate: 60,
  };
}


