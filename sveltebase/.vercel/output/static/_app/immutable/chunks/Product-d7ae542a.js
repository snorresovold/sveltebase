import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, a as space, q as text, l as claim_element, m as children, y as claim_component, c as claim_space, r as claim_text, h as detach, n as attr, b as insert_hydration, F as append_hydration, z as mount_component, u as set_data, f as transition_in, t as transition_out, A as destroy_component } from "./index-ef0836bc.js";
import { U as UserIcon } from "./UserIcon-603e9132.js";
function create_fragment(ctx) {
  let div1;
  let a;
  let usericon;
  let t0;
  let div0;
  let h3;
  let t1;
  let t2;
  let p0;
  let t3;
  let t4;
  let p1;
  let t5;
  let t6;
  let a_href_value;
  let current;
  usericon = new UserIcon({ props: { id: (
    /*user*/
    ctx[2]
  ) } });
  return {
    c() {
      div1 = element("div");
      a = element("a");
      create_component(usericon.$$.fragment);
      t0 = space();
      div0 = element("div");
      h3 = element("h3");
      t1 = text(
        /*name*/
        ctx[1]
      );
      t2 = space();
      p0 = element("p");
      t3 = text(
        /*desc*/
        ctx[4]
      );
      t4 = space();
      p1 = element("p");
      t5 = text(
        /*price*/
        ctx[0]
      );
      t6 = text(" $");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a = claim_element(div1_nodes, "A", { href: true });
      var a_nodes = children(a);
      claim_component(usericon.$$.fragment, a_nodes);
      t0 = claim_space(a_nodes);
      div0 = claim_element(a_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t1 = claim_text(
        h3_nodes,
        /*name*/
        ctx[1]
      );
      h3_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(
        p0_nodes,
        /*desc*/
        ctx[4]
      );
      p0_nodes.forEach(detach);
      t4 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t5 = claim_text(
        p1_nodes,
        /*price*/
        ctx[0]
      );
      t6 = claim_text(p1_nodes, " $");
      p1_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      a_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4");
      attr(p1, "class", "mt-1 text-sm text-gray-700");
      attr(div0, "class", "mt-3");
      attr(a, "href", a_href_value = "/products/" + /*link*/
      ctx[3]);
      attr(div1, "class", "block group border-4 border-black m-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, a);
      mount_component(usericon, a, null);
      append_hydration(a, t0);
      append_hydration(a, div0);
      append_hydration(div0, h3);
      append_hydration(h3, t1);
      append_hydration(div0, t2);
      append_hydration(div0, p0);
      append_hydration(p0, t3);
      append_hydration(div0, t4);
      append_hydration(div0, p1);
      append_hydration(p1, t5);
      append_hydration(p1, t6);
      current = true;
    },
    p(ctx2, [dirty]) {
      const usericon_changes = {};
      if (dirty & /*user*/
      4)
        usericon_changes.id = /*user*/
        ctx2[2];
      usericon.$set(usericon_changes);
      if (!current || dirty & /*name*/
      2)
        set_data(
          t1,
          /*name*/
          ctx2[1]
        );
      if (!current || dirty & /*desc*/
      16)
        set_data(
          t3,
          /*desc*/
          ctx2[4]
        );
      if (!current || dirty & /*price*/
      1)
        set_data(
          t5,
          /*price*/
          ctx2[0]
        );
      if (!current || dirty & /*link*/
      8 && a_href_value !== (a_href_value = "/products/" + /*link*/
      ctx2[3])) {
        attr(a, "href", a_href_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(usericon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usericon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(usericon);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { price } = $$props;
  let { name } = $$props;
  let { user } = $$props;
  let { link } = $$props;
  let { desc } = $$props;
  $$self.$$set = ($$props2) => {
    if ("price" in $$props2)
      $$invalidate(0, price = $$props2.price);
    if ("name" in $$props2)
      $$invalidate(1, name = $$props2.name);
    if ("user" in $$props2)
      $$invalidate(2, user = $$props2.user);
    if ("link" in $$props2)
      $$invalidate(3, link = $$props2.link);
    if ("desc" in $$props2)
      $$invalidate(4, desc = $$props2.desc);
  };
  return [price, name, user, link, desc];
}
class Product extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      price: 0,
      name: 1,
      user: 2,
      link: 3,
      desc: 4
    });
  }
}
export {
  Product as P
};
