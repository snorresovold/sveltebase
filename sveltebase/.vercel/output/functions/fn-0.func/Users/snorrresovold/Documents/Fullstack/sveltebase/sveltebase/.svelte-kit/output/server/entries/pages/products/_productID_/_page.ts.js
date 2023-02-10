import { p as pb } from "../../../../chunks/pocketbase.js";
const load = async ({ params }) => {
  const fetchProduct = async (id) => {
    const product = await pb.collection("products").getOne(id, {
      expand: "user, image"
    });
    console.log(product);
    return product;
  };
  return {
    product: await fetchProduct(params.productID)
  };
};
export {
  load
};
