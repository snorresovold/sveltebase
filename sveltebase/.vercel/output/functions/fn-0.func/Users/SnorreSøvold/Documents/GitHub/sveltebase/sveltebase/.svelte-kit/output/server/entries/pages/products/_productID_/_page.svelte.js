import { c as create_ssr_component, e as escape, v as validate_component, d as each } from "../../../../chunks/index2.js";
import { U as UserIcon } from "../../../../chunks/UserIcon.js";
const Lesson = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration } = $$props;
  let { start_time } = $$props;
  let { price } = $$props;
  const date = new Date(start_time);
  date.toLocaleString();
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.start_time === void 0 && $$bindings.start_time && start_time !== void 0)
    $$bindings.start_time(start_time);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  return `<div class="${"block group border-4 border-black m-4"}"><div class="${"mt-3"}"><h3 class="${"font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"}">${escape(date)}</h3>
        <p>${escape(duration)} minutes</p>
        <p class="${"mt-1 text-sm text-gray-700"}">${escape(price)} $</p>
        <button>Buy now</button></div></div>`;
});
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
${validate_component(UserIcon, "UserIcon").$$render($$result, { id: product.expand?.user?.id }, {}, {})}

<div class="${"grid grid-cols-2 ml-8 mr-8"}">${each(product.expand["lessons(product)"], (lesson) => {
    return `${validate_component(Lesson, "Lesson").$$render(
      $$result,
      {
        duration: lesson.duration,
        start_time: lesson.start_time,
        price: lesson.total_price
      },
      {},
      {}
    )}`;
  })}</div>`;
});
export {
  Page as default
};
