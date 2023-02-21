import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, P as src_url_equal, b as insert_hydration, F as append_hydration, u as set_data, f as transition_in, d as check_outros, t as transition_out, V as destroy_each, G as component_subscribe, x as create_component, y as claim_component, z as mount_component, A as destroy_component, g as group_outros } from "../../../../chunks/index-ef0836bc.js";
import { P as Product } from "../../../../chunks/Product-d7ae542a.js";
import { c as currentUser } from "../../../../chunks/pocketbase-47fbcd4c.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let button;
  let t;
  return {
    c() {
      button = element("button");
      t = text("Create more");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Create more");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
    },
    d(detaching) {
      if (detaching)
        detach(button);
    }
  };
}
function create_each_block(ctx) {
  let product;
  let current;
  product = new Product({
    props: {
      price: (
        /*product*/
        ctx[3].price
      ),
      name: (
        /*product*/
        ctx[3].name
      ),
      user: (
        /*product*/
        ctx[3].user
      ),
      link: (
        /*product*/
        ctx[3].id
      ),
      desc: (
        /*product*/
        ctx[3].desc
      )
    }
  });
  return {
    c() {
      create_component(product.$$.fragment);
    },
    l(nodes) {
      claim_component(product.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(product, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const product_changes = {};
      if (dirty & /*user*/
      1)
        product_changes.price = /*product*/
        ctx2[3].price;
      if (dirty & /*user*/
      1)
        product_changes.name = /*product*/
        ctx2[3].name;
      if (dirty & /*user*/
      1)
        product_changes.user = /*product*/
        ctx2[3].user;
      if (dirty & /*user*/
      1)
        product_changes.link = /*product*/
        ctx2[3].id;
      if (dirty & /*user*/
      1)
        product_changes.desc = /*product*/
        ctx2[3].desc;
      product.$set(product_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(product.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(product.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(product, detaching);
    }
  };
}
function create_fragment(ctx) {
  var _a;
  let p;
  let t0_value = (
    /*user*/
    ctx[0].username + ""
  );
  let t0;
  let t1;
  let t2;
  let img;
  let img_src_value;
  let t3;
  let h1;
  let t4;
  let t5;
  let div;
  let current;
  let if_block = (
    /*user*/
    (ctx[0].id ?? /*$currentUser*/
    ((_a = ctx[1]) == null ? void 0 : _a.id)) && create_if_block()
  );
  let each_value = (
    /*user*/
    ctx[0].expand["products(user)"]
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
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      img = element("img");
      t3 = space();
      h1 = element("h1");
      t4 = text("SUS");
      t5 = space();
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, t0_value);
      p_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      t2 = claim_space(nodes);
      img = claim_element(nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t3 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t4 = claim_text(h1_nodes, "SUS");
      h1_nodes.forEach(detach);
      t5 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "avatar");
      if (!src_url_equal(img.src, img_src_value = `https://avatars.dicebear.com/api/identicon/${/*user*/
      ctx[0].id}.svg`))
        attr(img, "src", img_src_value);
      attr(img, "alt", "avatar");
      attr(img, "width", "40px");
      attr(div, "class", "h-56 grid grid-cols-4 content-start");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      insert_hydration(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, img, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t4);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2;
      if ((!current || dirty & /*user*/
      1) && t0_value !== (t0_value = /*user*/
      ctx2[0].username + ""))
        set_data(t0, t0_value);
      if (
        /*user*/
        ctx2[0].id ?? /*$currentUser*/
        ((_a2 = ctx2[1]) == null ? void 0 : _a2.id)
      ) {
        if (if_block)
          ;
        else {
          if_block = create_if_block();
          if_block.c();
          if_block.m(t2.parentNode, t2);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (!current || dirty & /*user*/
      1 && !src_url_equal(img.src, img_src_value = `https://avatars.dicebear.com/api/identicon/${/*user*/
      ctx2[0].id}.svg`)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*user*/
      1) {
        each_value = /*user*/
        ctx2[0].expand["products(user)"];
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
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(img);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let user;
  let $currentUser;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(1, $currentUser = $$value));
  let { data } = $$props;
  if (data.user.id == ($currentUser == null ? void 0 : $currentUser.id)) {
    console.log("yo, this is your page");
  } else {
    console.log("not your page");
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(2, data = $$props2.data);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*data*/
    4) {
      $$invalidate(0, { user } = data, user);
    }
  };
  return [user, $currentUser, data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 2 });
  }
}
export {
  Page as default
};
