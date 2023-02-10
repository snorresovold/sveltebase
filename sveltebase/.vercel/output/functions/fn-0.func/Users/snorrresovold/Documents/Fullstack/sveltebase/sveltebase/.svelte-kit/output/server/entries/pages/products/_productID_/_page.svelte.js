import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index2.js";
import { U as UserIcon } from "../../../../chunks/UserIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let product;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ product } = data);
  return `<h1>${escape(product.name)}</h1>
<p>${escape(product.price)} $</p>
<p>${escape(product.desc)}</p>
<p>${escape(product.expand?.user?.username)}</p>
${validate_component(UserIcon, "UserIcon").$$render($$result, { id: product.expand?.user?.id }, {}, {})}`;
});
export {
  Page as default
};
