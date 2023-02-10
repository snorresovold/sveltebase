import { c as create_ssr_component, f as add_attribute } from "./index2.js";
const UserIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  console.log(id);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div><a${add_attribute("href", "/users/" + id, 0)}><img class="${"avatar"}"${add_attribute("src", `https://avatars.dicebear.com/api/identicon/${id}.svg`, 0)} alt="${"avatar"}" width="${"40px"}"></a></div>`;
});
export {
  UserIcon as U
};
