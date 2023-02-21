import { p as pb } from "./pocketbase-47fbcd4c.js";
const load = async ({ params }) => {
  const fetchProduct = async (id) => {
    let user = {};
    try {
      user = await pb.collection("users").getOne(id, {
        expand: "products(user)"
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("unexpected error", err);
      }
    }
    return user;
  };
  return {
    user: await fetchProduct(params.userID)
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
