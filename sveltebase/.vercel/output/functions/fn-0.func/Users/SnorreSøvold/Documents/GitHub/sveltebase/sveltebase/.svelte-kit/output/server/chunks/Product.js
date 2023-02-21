import { c as create_ssr_component, f as add_attribute, v as validate_component, e as escape } from "./index2.js";
import { U as UserIcon } from "./UserIcon.js";
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { price } = $$props;
  let { name } = $$props;
  let { user } = $$props;
  let { link } = $$props;
  let { desc } = $$props;
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  return `<div class="${"block group border-4 border-black m-4"}"><a${add_attribute("href", "/products/" + link, 0)}>${validate_component(UserIcon, "UserIcon").$$render($$result, { id: user }, {}, {})}
  
    <div class="${"mt-3"}"><h3 class="${"font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"}">${escape(name)}</h3>
      <p>${escape(desc)}</p>
      <p class="${"mt-1 text-sm text-gray-700"}">${escape(price)} $</p></div></a></div>`;
});
export {
  Product as P
};
