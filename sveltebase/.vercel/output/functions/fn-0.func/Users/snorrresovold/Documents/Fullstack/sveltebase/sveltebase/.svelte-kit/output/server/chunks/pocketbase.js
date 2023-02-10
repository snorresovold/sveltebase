import PocketBase from "pocketbase";
import { w as writable } from "./index.js";
const pb = new PocketBase("https://scarce-salesmen.pockethost.io");
const currentUser = writable(pb.authStore.model);
pb.authStore.onChange((auth) => {
  console.log("authStore changed", auth);
  currentUser.set(pb.authStore.model);
});
export {
  currentUser as c,
  pb as p
};
