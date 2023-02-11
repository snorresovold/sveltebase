import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, x as create_component, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, y as claim_component, b as insert_hydration, F as append_hydration, z as mount_component, u as set_data, f as transition_in, t as transition_out, A as destroy_component } from "../../../../chunks/index-e8fcc4fa.js";
import { U as UserIcon } from "../../../../chunks/UserIcon-7a653460.js";
function create_fragment(ctx) {
  var _a, _b, _c, _d;
  let h1;
  let t0_value = (
    /*product*/
    ctx[0].name + ""
  );
  let t0;
  let t1;
  let p0;
  let t2_value = (
    /*product*/
    ctx[0].price + ""
  );
  let t2;
  let t3;
  let t4;
  let p1;
  let t5_value = (
    /*product*/
    ctx[0].desc + ""
  );
  let t5;
  let t6;
  let p2;
  let t7_value = (
    /*product*/
    ((_b = (_a = ctx[0].expand) == null ? void 0 : _a.user) == null ? void 0 : _b.username) + ""
  );
  let t7;
  let t8;
  let usericon;
  let current;
  usericon = new UserIcon({
    props: { id: (
      /*product*/
      (_d = (_c = ctx[0].expand) == null ? void 0 : _c.user) == null ? void 0 : _d.id
    ) }
  });
  return {
    c() {
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      p0 = element("p");
      t2 = text(t2_value);
      t3 = text(" $");
      t4 = space();
      p1 = element("p");
      t5 = text(t5_value);
      t6 = space();
      p2 = element("p");
      t7 = text(t7_value);
      t8 = space();
      create_component(usericon.$$.fragment);
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, t0_value);
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, t2_value);
      t3 = claim_text(p0_nodes, " $");
      p0_nodes.forEach(detach);
      t4 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, t5_value);
      p1_nodes.forEach(detach);
      t6 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, t7_value);
      p2_nodes.forEach(detach);
      t8 = claim_space(nodes);
      claim_component(usericon.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t2);
      append_hydration(p0, t3);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t5);
      insert_hydration(target, t6, anchor);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t7);
      insert_hydration(target, t8, anchor);
      mount_component(usericon, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2, _b2, _c2, _d2;
      if ((!current || dirty & /*product*/
      1) && t0_value !== (t0_value = /*product*/
      ctx2[0].name + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & /*product*/
      1) && t2_value !== (t2_value = /*product*/
      ctx2[0].price + ""))
        set_data(t2, t2_value);
      if ((!current || dirty & /*product*/
      1) && t5_value !== (t5_value = /*product*/
      ctx2[0].desc + ""))
        set_data(t5, t5_value);
      if ((!current || dirty & /*product*/
      1) && t7_value !== (t7_value = /*product*/
      ((_b2 = (_a2 = ctx2[0].expand) == null ? void 0 : _a2.user) == null ? void 0 : _b2.username) + ""))
        set_data(t7, t7_value);
      const usericon_changes = {};
      if (dirty & /*product*/
      1)
        usericon_changes.id = /*product*/
        (_d2 = (_c2 = ctx2[0].expand) == null ? void 0 : _c2.user) == null ? void 0 : _d2.id;
      usericon.$set(usericon_changes);
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
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t8);
      destroy_component(usericon, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let product;
  let { data } = $$props;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(1, data = $$props2.data);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*data*/
    2) {
      $$invalidate(0, { product } = data, product);
    }
  };
  return [product, data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 1 });
  }
}
export {
  Page as default
};
