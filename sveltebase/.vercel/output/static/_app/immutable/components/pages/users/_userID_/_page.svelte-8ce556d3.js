import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, P as src_url_equal, b as insert_hydration, F as append_hydration, u as set_data, f as transition_in, d as check_outros, t as transition_out, W as destroy_each, x as create_component, y as claim_component, z as mount_component, A as destroy_component, g as group_outros } from "../../../../chunks/index-e8fcc4fa.js";
import { P as Product } from "../../../../chunks/Product-50da7151.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let product;
  let current;
  product = new Product({
    props: {
      price: (
        /*product*/
        ctx[2].price
      ),
      name: (
        /*product*/
        ctx[2].name
      ),
      user: (
        /*product*/
        ctx[2].user
      ),
      link: (
        /*product*/
        ctx[2].id
      ),
      desc: (
        /*product*/
        ctx[2].desc
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
        ctx2[2].price;
      if (dirty & /*user*/
      1)
        product_changes.name = /*product*/
        ctx2[2].name;
      if (dirty & /*user*/
      1)
        product_changes.user = /*product*/
        ctx2[2].user;
      if (dirty & /*user*/
      1)
        product_changes.link = /*product*/
        ctx2[2].id;
      if (dirty & /*user*/
      1)
        product_changes.desc = /*product*/
        ctx2[2].desc;
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
  let p;
  let t0_value = (
    /*user*/
    ctx[0].username + ""
  );
  let t0;
  let t1;
  let img;
  let img_src_value;
  let t2;
  let div;
  let current;
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
      img = element("img");
      t2 = space();
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
      img = claim_element(nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t2 = claim_space(nodes);
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
      insert_hydration(target, img, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*user*/
      1) && t0_value !== (t0_value = /*user*/
      ctx2[0].username + ""))
        set_data(t0, t0_value);
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
      if (detaching)
        detach(img);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let user;
  let { data } = $$props;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(1, data = $$props2.data);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*data*/
    2) {
      $$invalidate(0, { user } = data, user);
    }
  };
  return [user, data];
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
