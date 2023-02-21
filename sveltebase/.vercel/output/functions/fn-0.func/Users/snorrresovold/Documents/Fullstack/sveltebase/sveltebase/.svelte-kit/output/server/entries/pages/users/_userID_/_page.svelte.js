import { c as create_ssr_component, b as subscribe, e as escape, f as add_attribute, d as each, v as validate_component } from "../../../../chunks/index2.js";
import { P as Product } from "../../../../chunks/Product.js";
import { c as currentUser } from "../../../../chunks/pocketbase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  let { data } = $$props;
  if (data.user.id == $currentUser?.id) {
    console.log("yo, this is your page");
  } else {
    console.log("not your page");
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ user } = data);
  $$unsubscribe_currentUser();
  return `<p>${escape(user.username)}</p>

${user.id ?? $currentUser?.id ? `<button class="${"block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"}">Create more</button>` : ``}
<img class="${"avatar"}"${add_attribute("src", `https://avatars.dicebear.com/api/identicon/${user.id}.svg`, 0)} alt="${"avatar"}" width="${"40px"}">
<h1>SUS</h1>

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
