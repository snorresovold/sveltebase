import { p as pb } from "./pocketbase-47fbcd4c.js";
const load = async ({ params }) => {
  const fetchProduct = async (id) => {
    const product = await pb.collection("products").getOne(id, {
      expand: "user, lessons(product)"
    });
    console.log(product);
    return product;
  };
  return {
    product: await fetchProduct(params.productID)
  };
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
export {
  _page as _,
  load as l
};
