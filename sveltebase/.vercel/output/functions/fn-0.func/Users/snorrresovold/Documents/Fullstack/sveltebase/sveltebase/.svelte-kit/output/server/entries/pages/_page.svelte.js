import { c as create_ssr_component, d as each, v as validate_component, o as onDestroy } from "../../chunks/index2.js";
import { P as Product } from "../../chunks/Product.js";
import "../../chunks/pocketbase.js";
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products = [] } = $$props;
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `<div class="${"h-56 grid grid-cols-4 content-start"}">${each(products, (product) => {
    return `${validate_component(Product, "Product").$$render(
      $$result,
      {
        price: product.price,
        name: product.name,
        user: product.expand?.user?.id,
        link: product.id,
        desc: product.desc
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products;
  onDestroy(() => {
  });
  return `<h1>Welcome to SvelteKit</h1>
${validate_component(Products, "Products").$$render($$result, { products }, {}, {})}`;
});
export {
  Page as default
};
