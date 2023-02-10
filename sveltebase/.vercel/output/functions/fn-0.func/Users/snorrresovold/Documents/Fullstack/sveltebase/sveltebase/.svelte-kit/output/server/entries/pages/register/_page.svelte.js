import { c as create_ssr_component, b as subscribe, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { c as currentUser } from "../../../chunks/pocketbase.js";
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  let username;
  let password;
  let passwordConfirm;
  $$unsubscribe_currentUser();
  return `${$currentUser ? `<p>Signed in as ${escape($currentUser.username)} 
        <button>Sign Out</button></p>` : `<div class="${"min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"}"><div class="${"relative py-3 sm:max-w-xl sm:mx-auto"}"><div class="${"absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}"></div>
            <div class="${"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"}"><div class="${"max-w-md mx-auto"}"><div><h1 class="${"text-2xl font-semibold"}">Register</h1></div>
                    <form><div class="${"divide-y divide-gray-200"}"><div class="${"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"}"><div class="${"relative"}"><input autocomplete="${"off"}" id="${"username"}" name="${"username"}" type="${"text"}" class="${"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"}" placeholder="${"username"}"${add_attribute("value", username, 0)}>
                                <label for="${"email"}" class="${"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"}">Username</label></div>
                            <div class="${"relative"}"><input id="${"password"}" name="${"password"}" type="${"password"}" class="${"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"}" placeholder="${"Password"}"${add_attribute("value", password, 0)}>
                                <label for="${"password"}" class="${"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"}">Password</label></div>
                            <div class="${"relative"}"><input id="${"passwordConfirm"}" name="${"passwordConfirm"}" type="${"password"}" class="${"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"}" placeholder="${"Password"}"${add_attribute("value", passwordConfirm, 0)}>
                                <label for="${"passwordConfirm"}" class="${"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"}">Confirm Password</label></div>
                            <div class="${"relative"}"><button class="${"bg-blue-500 text-white rounded-md px-2 py-1"}">Submit</button></div></div></div></form></div></div></div></div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Register, "Register").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
