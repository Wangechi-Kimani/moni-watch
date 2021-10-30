// import { useMounted } from "../utils/helpers";
import { useCart } from "react-use-cart";

import CheckOut from "../components/products/CheckOut";
import LipaNaMpesa from "../components/products/LipaNaMpesa";
import OrderList from "../components/products/OrderList";
import Accordion from "../components/ui/Accordion";
import classes from "../components/products/CheckOut.module.css";

const CheckOutPage = (props) => {
  //Get Cart Items
  const { items } = useCart();

  const priceOfItemsICart = items.map((item) => item.itemTotal);
  const subToTalPrice = priceOfItemsICart.reduce(
    (acc, itemTotal) => acc + itemTotal,
    0
  );
  const VAT = subToTalPrice * 0.16;
  const totalPrice = VAT + subToTalPrice;

  //Get Accordion Data
  const accordionData = [
    {
      id: 1,
      title: "Lipa Na Mpesa",
      content: <LipaNaMpesa />,
    },
    {
      id: 2,
      title: "Pay Via Credit/Debit Card",
      content: (
        <CheckOut subTotal={subToTalPrice} VAT={VAT} total={totalPrice} />
      ),
    },
  ];

  return (
    <section style={{ display: "flex" }}>
      <div className="accordion">
        {accordionData.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
      <div className={classes.order}>
        <h4>Your Order</h4>
        <OrderList />
        <div className={classes.orderTotalDetails}>
          <p>Subtotal</p>
          <p>Ksh.{subToTalPrice}</p>
        </div>
        <div className={classes.orderTotalDetails}>
          <p>VAT</p>
          <p>Ksh.{VAT}</p>
        </div>
        <div className={classes.orderTotalDetails}>
          <p style={{ fontWeight: "bold" }}>Total</p>
          <p style={{ fontWeight: "bold" }}>Ksh.{totalPrice}</p>
        </div>
      </div>
    </section>
  );

  // const { hasMounted } = useMounted();
  // const numOfItemsInCart = hasMounted ? items.length : 0;

  // if(numOfItemsInCart === 0) {
  //   setIsDisabled(true);
  // }
  // {numOfItemsInCart === 0 ? '' : items.map(product => <p key={product.id}>Total Value: {product.itemTotal}</p>)}

  // return (
  //   <>
  //     {numOfItemsInCart === 0 ? (
  //       <p style={{textAlign:'center'}}>You have no products for checkout. </p>
  //     ) : (
  //       <CheckOut subTotal={subToTalPrice} VAT={VAT} total={totalPrice} />
  //     )}
  //   </>
  // );
  // return <><CheckOut subTotal={subToTalPrice} VAT={VAT} total={totalPrice}/></>
  // return  <div>{numOfItemsInCart === 0 ? '' : items.map(product => <p key={product.id}>Total Value: {product.itemTotal}</p>)}</div>
};

export default CheckOutPage;
