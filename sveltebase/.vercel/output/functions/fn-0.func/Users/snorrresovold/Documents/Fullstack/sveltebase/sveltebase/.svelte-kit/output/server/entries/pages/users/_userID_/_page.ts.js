import { p as pb } from "../../../../chunks/pocketbase.js";
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
export {
  load
};
