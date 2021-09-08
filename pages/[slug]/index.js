import { connectDB, getProductById } from "../../utils/db";
import ProductDetail from "../../components/products/ProductDetail";

const ProductDetailPage = (props) => {
  const { product } = props;
    return (
      <ProductDetail
        image={product.image}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    );
};

export async function getStaticPaths() {
    const client = await connectDB();
    const db = client.db();
  
    const productCollection = db.collection("watches");
    const products = await productCollection.find({}, { _id: 1 }).toArray(); //only fetch the ids
  
    client.close();
  
    return {
      fallback: "blocking",
      paths: products.map((product) => ({
        params: { slug: product._id.toString() },
      })),
    };
  }


export async function getStaticProps(context) {
    const {params} = context;

    const productId = params.slug;

    const client = await connectDB();
    const selectedProduct = await getProductById(client, 'watches', productId);

    client.close();

  return {
    props: {
      product: {
        id: selectedProduct._id.toString(),
        image: selectedProduct.image,
        title: selectedProduct.title,
        price: selectedProduct.price,
        description: selectedProduct.description,
      },
    },
    revalidate: 10 // will be passed to the page component as props
  };

    
}

export default ProductDetailPage;