import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, g as group_outros, M as update_keyed_each, d as check_outros, f as transition_in, t as transition_out, e as empty, x as create_component, y as claim_component, z as mount_component, A as destroy_component, N as outro_and_destroy_block, q as text, a as space, r as claim_text, c as claim_space, F as append_hydration, o as onMount, O as onDestroy } from "../../chunks/index-e8fcc4fa.js";
import { P as Product } from "../../chunks/Product-50da7151.js";
import { p as pb } from "../../chunks/pocketbase-9e424909.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  var _a, _b;
  let first;
  let product;
  let current;
  product = new Product({
    props: {
      price: (
        /*product*/
        ctx[1].price
      ),
      name: (
        /*product*/
        ctx[1].name
      ),
      user: (
        /*product*/
        (_b = (_a = ctx[1].expand) == null ? void 0 : _a.user) == null ? void 0 : _b.id
      ),
      link: (
        /*product*/
        ctx[1].id
      ),
      desc: (
        /*product*/
        ctx[1].desc
      )
    }
  });
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(product.$$.fragment);
      this.h();
    },
    l(nodes) {
      first = empty();
      claim_component(product.$$.fragment, nodes);
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      mount_component(product, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      var _a2, _b2;
      ctx = new_ctx;
      const product_changes = {};
      if (dirty & /*products*/
      1)
        product_changes.price = /*product*/
        ctx[1].price;
      if (dirty & /*products*/
      1)
        product_changes.name = /*product*/
        ctx[1].name;
      if (dirty & /*products*/
      1)
        product_changes.user = /*product*/
        (_b2 = (_a2 = ctx[1].expand) == null ? void 0 : _a2.user) == null ? void 0 : _b2.id;
      if (dirty & /*products*/
      1)
        product_changes.link = /*product*/
        ctx[1].id;
      if (dirty & /*products*/
      1)
        product_changes.desc = /*product*/
        ctx[1].desc;
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
      if (detaching)
        detach(first);
      destroy_component(product, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let current;
  let each_value = (
    /*products*/
    ctx[0]
  );
  const get_key = (ctx2) => (
    /*product*/
    ctx2[1].id
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "h-56 grid grid-cols-4 content-start");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*products*/
      1) {
        each_value = /*products*/
        ctx2[0];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { products = [] } = $$props;
  $$self.$$set = ($$props2) => {
    if ("products" in $$props2)
      $$invalidate(0, products = $$props2.products);
  };
  return [products];
}
class Products extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { products: 0 });
  }
}
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let products_1;
  let current;
  products_1 = new Products({ props: { products: (
    /*products*/
    ctx[0]
  ) } });
  return {
    c() {
      h1 = element("h1");
      t0 = text("Welcome to SvelteKit");
      t1 = space();
      create_component(products_1.$$.fragment);
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Welcome to SvelteKit");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(products_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      mount_component(products_1, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const products_1_changes = {};
      if (dirty & /*products*/
      1)
        products_1_changes.products = /*products*/
        ctx2[0];
      products_1.$set(products_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(products_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(products_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      destroy_component(products_1, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let products;
  onMount(async () => {
    const resultList = await pb.collection("products").getList(1, 10, { sort: "created", expand: "user" });
    $$invalidate(0, products = resultList.items);
  });
  onDestroy(() => {
  });
  return [products];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
