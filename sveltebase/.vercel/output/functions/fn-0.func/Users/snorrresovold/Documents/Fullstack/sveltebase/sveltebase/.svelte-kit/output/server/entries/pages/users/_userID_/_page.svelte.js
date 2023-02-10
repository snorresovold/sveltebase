import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component } from "../../../../chunks/index2.js";
import { P as Product } from "../../../../chunks/Product.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ user } = data);
  return `<p>${escape(user.username)}</p>

<img class="${"avatar"}"${add_attribute("src", `https://avatars.dicebear.com/api/identicon/${user.id}.svg`, 0)} alt="${"avatar"}" width="${"40px"}">

<div class="${"h-56 grid grid-cols-4 content-start"}">${each(user.expand["products(user)"], (product) => {
    return `${validate_component(Product, "Product").$$render(
      $$result,
      {
        price: product.price,
        name: product.name,
        user: product.user,
        link: product.id,
        desc: product.desc
      },
      {},
      {}
    )}`;
  })}</div>`;
});
export {
  Page as default
};
