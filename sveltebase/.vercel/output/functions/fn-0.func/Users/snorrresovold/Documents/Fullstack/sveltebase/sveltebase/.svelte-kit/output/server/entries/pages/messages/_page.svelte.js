import { c as create_ssr_component, b as subscribe, o as onDestroy, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { c as currentUser } from "../../../chunks/pocketbase.js";
const Messages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => value);
  let newMessage;
  let messages = [];
  onDestroy(() => {
  });
  $$unsubscribe_currentUser();
  return `<div class="${"messages"}">${each(messages, (message) => {
    return `<div class="${"msg"}"><img class="${"avatar"}"${add_attribute("src", `https://avatars.dicebear.com/api/identicon/${message.expand?.user?.username}.svg`, 0)} alt="${"avatar"}" width="${"40px"}">
    <div><small>Sent by @${escape(message.expand?.user?.username)}</small>
        <p class="${"msg-text"}">${escape(message.text)}</p></div>
    </div>`;
  })}</div>

<form><input placeholder="${"Message"}" type="${"text"}"${add_attribute("value", newMessage, 0)}>
<button type="${"submit"}">Send</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Messages, "Messages").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
