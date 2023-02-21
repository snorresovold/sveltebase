import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, F as append_hydration, u as set_data, C as noop, x as create_component, y as claim_component, z as mount_component, f as transition_in, d as check_outros, t as transition_out, A as destroy_component, V as destroy_each, g as group_outros } from "../../../../chunks/index-ef0836bc.js";
import { U as UserIcon } from "../../../../chunks/UserIcon-603e9132.js";
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let h3;
  let t0;
  let t1;
  let p0;
  let t2;
  let t3;
  let t4;
  let p1;
  let t5;
  let t6;
  let t7;
  let button;
  let t8;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      h3 = element("h3");
      t0 = text(
        /*date*/
        ctx[2]
      );
      t1 = space();
      p0 = element("p");
      t2 = text(
        /*duration*/
        ctx[0]
      );
      t3 = text(" minutes");
      t4 = space();
      p1 = element("p");
      t5 = text(
        /*price*/
        ctx[1]
      );
      t6 = text(" $");
      t7 = space();
      button = element("button");
      t8 = text("Buy now");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t0 = claim_text(
        h3_nodes,
        /*date*/
        ctx[2]
      );
      h3_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(
        p0_nodes,
        /*duration*/
        ctx[0]
      );
      t3 = claim_text(p0_nodes, " minutes");
      p0_nodes.forEach(detach);
      t4 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t5 = claim_text(
        p1_nodes,
        /*price*/
        ctx[1]
      );
      t6 = claim_text(p1_nodes, " $");
      p1_nodes.forEach(detach);
      t7 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", {});
      var button_nodes = children(button);
      t8 = claim_text(button_nodes, "Buy now");
      button_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4");
      attr(p1, "class", "mt-1 text-sm text-gray-700");
      attr(div0, "class", "mt-3");
      attr(div1, "class", "block group border-4 border-black m-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h3);
      append_hydration(h3, t0);
      append_hydration(div0, t1);
      append_hydration(div0, p0);
      append_hydration(p0, t2);
      append_hydration(p0, t3);
      append_hydration(div0, t4);
      append_hydration(div0, p1);
      append_hydration(p1, t5);
      append_hydration(p1, t6);
      append_hydration(div0, t7);
      append_hydration(div0, button);
      append_hydration(button, t8);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*duration*/
      1)
        set_data(
          t2,
          /*duration*/
          ctx2[0]
        );
      if (dirty & /*price*/
      2)
        set_data(
          t5,
          /*price*/
          ctx2[1]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { duration } = $$props;
  let { start_time } = $$props;
  let { price } = $$props;
  const date = new Date(start_time);
  date.toLocaleString();
  $$self.$$set = ($$props2) => {
    if ("duration" in $$props2)
      $$invalidate(0, duration = $$props2.duration);
    if ("start_time" in $$props2)
      $$invalidate(3, start_time = $$props2.start_time);
    if ("price" in $$props2)
      $$invalidate(1, price = $$props2.price);
  };
  return [duration, price, date, start_time];
}
class Lesson extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { duration: 0, start_time: 3, price: 1 });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let lesson;
  let current;
  lesson = new Lesson({
    props: {
      duration: (
        /*lesson*/
        ctx[2].duration
      ),
      start_time: (
        /*lesson*/
        ctx[2].start_time
      ),
      price: (
        /*lesson*/
        ctx[2].total_price
      )
    }
  });
  return {
    c() {
      create_component(lesson.$$.fragment);
    },
    l(nodes) {
      claim_component(lesson.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(lesson, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const lesson_changes = {};
      if (dirty & /*product*/
      1)
        lesson_changes.duration = /*lesson*/
        ctx2[2].duration;
      if (dirty & /*product*/
      1)
        lesson_changes.start_time = /*lesson*/
        ctx2[2].start_time;
      if (dirty & /*product*/
      1)
        lesson_changes.price = /*lesson*/
        ctx2[2].total_price;
      lesson.$set(lesson_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(lesson.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(lesson.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(lesson, detaching);
    }
  };
}
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
  let t9;
  let div;
  let current;
  usericon = new UserIcon({
    props: { id: (
      /*product*/
      (_d = (_c = ctx[0].expand) == null ? void 0 : _c.user) == null ? void 0 : _d.id
    ) }
  });
  let each_value = (
    /*product*/
    ctx[0].expand["lessons(product)"]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
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
      t9 = space();
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
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
      t9 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "grid grid-cols-2 ml-8 mr-8");
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
      insert_hydration(target, t9, anchor);
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
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
      if (dirty & /*product*/
      1) {
        each_value = /*product*/
        ctx2[0].expand["lessons(product)"];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(usericon.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(usericon.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
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
      if (detaching)
        detach(t9);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
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
