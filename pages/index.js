import { Fragment } from "react";
// import { MongoClient } from "mongodb";

import Image from "next/image";

import Button from "../components/ui/Button";
import classes from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <Fragment>
      <section className={classes.jumbotron}>
        <div className={classes.content}>
          <h1>Welcome to Moni Watches Inc.</h1>
          <p>
            The place for quality, luxury, and trendy watches to help you manage
            your time
          </p>
          <div className={classes.actions}>
            <div style={{ padding: "10px" }}>
              {/* <button>Smart Watches</button> */}
              <Button>Smart Watches</Button>
            </div>
            <div style={{ padding: "10px" }}>
              {/* <button>Digital Watches</button> */}
              <Button>Analog Watches</Button>
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
            Look no further
          </h1>
          <p>
            Boosted USA acquired all of the remaining inventory directly from
            Boosted. This means we have the electric skateboards and scooter you
            all love and have been looking for. Get your hands on these highly
            sought after products while supplies last.
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
            <p>Be on time. Be tech savvy. Save on time. Be stylish. Be trendy. </p>
            <div className={classes.actions}>
              {/* <button>Shop Now</button> */}
              <Button>Shop Now</Button>
          </div>

          </div>
          <div style={{borderRadius: '5px'}}>
            <Image
              src="/images/watches/smart_watch/ab-KOqI8KyYahg-unsplash.jpg"
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
        <h5>High Performance</h5>
        <h1>Standard Smart Watches</h1>
       
          <p style={{paddingTop: '-50px'}}>
            Cruising campus, going to work or getting through that long list of
            errands has never been easier or more fun.
          </p>
     
        <div className={classes.actions}>
          {/* <button>Shop Now</button> */}
          <Button>Shop Now</Button>
        </div>
      </section>

      <section className={classes.test}>
        <div className={classes.one}>
         <h2>Durable</h2> <br/> <span>In Stock</span>
        </div>
        <div className={classes.two}>
        <h2>Stylish</h2> <br/> <span>In Stock</span>
        </div>
        <div className={classes.three}>
        <h2>Luxury</h2> <br/> <span>In Stock</span>
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


// export async function getStaticProps() {
//   const MONGODB_URI =
//     "mongodb+srv://wangechi_k:wangechi_k@onlinestore.bbwik.mongodb.net/moni_inc?retryWrites=true&w=majority";

//   const client = await MongoClient.connect(MONGODB_URI, {
//     useUnifiedTopology: true});
//   const db = client.db();

//   const meetupCollection = db.collection("watches");

//   const meetups = await meetupCollection.find().toArray();
//   client.close();

//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         title: meetup.title,
//         price: meetup.price,
//         image: meetup.image,
//         id: meetup._id.toString()
//       })),
//     },
//     revalidate: 60,
//   };
// }


