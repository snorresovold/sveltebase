import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, P as src_url_equal, b as insert_hydration, F as append_hydration, C as noop } from "./index-e8fcc4fa.js";
function create_fragment(ctx) {
  let div;
  let a;
  let img;
  let img_src_value;
  let a_href_value;
  return {
    c() {
      div = element("div");
      a = element("a");
      img = element("img");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "avatar");
      if (!src_url_equal(img.src, img_src_value = `https://avatars.dicebear.com/api/identicon/${/*id*/
      ctx[0]}.svg`))
        attr(img, "src", img_src_value);
      attr(img, "alt", "avatar");
      attr(img, "width", "40px");
      attr(a, "href", a_href_value = "/users/" + /*id*/
      ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, img);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*id*/
      1 && !src_url_equal(img.src, img_src_value = `https://avatars.dicebear.com/api/identicon/${/*id*/
      ctx2[0]}.svg`)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*id*/
      1 && a_href_value !== (a_href_value = "/users/" + /*id*/
      ctx2[0])) {
        attr(a, "href", a_href_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { id } = $$props;
  console.log(id);
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(0, id = $$props2.id);
  };
  return [id];
}
class UserIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { id: 0 });
  }
}
export {
  UserIcon as U
};
