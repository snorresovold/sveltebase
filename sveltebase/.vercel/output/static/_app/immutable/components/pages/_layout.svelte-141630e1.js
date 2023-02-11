import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, D as svg_element, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, E as claim_svg_element, n as attr, b as insert_hydration, F as append_hydration, C as noop, G as component_subscribe, H as listen, u as set_data, I as create_slot, x as create_component, y as claim_component, z as mount_component, J as update_slot_base, K as get_all_dirty_from_scope, L as get_slot_changes, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-e8fcc4fa.js";
import { c as currentUser, p as pb } from "../../chunks/pocketbase-9e424909.js";
function create_else_block(ctx) {
  let div1;
  let div0;
  let a0;
  let t0;
  let t1;
  let a1;
  let t2;
  let t3;
  let button;
  let span;
  let t4;
  let t5;
  let svg;
  let path;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      a0 = element("a");
      t0 = text("Login");
      t1 = space();
      a1 = element("a");
      t2 = text("Register");
      t3 = space();
      button = element("button");
      span = element("span");
      t4 = text("Toggle menu");
      t5 = space();
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "Login");
      a0_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      a1 = claim_element(div0_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "Register");
      a1_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      span = claim_element(button_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t4 = claim_text(span_nodes, "Toggle menu");
      span_nodes.forEach(detach);
      t5 = claim_space(button_nodes);
      svg = claim_svg_element(button_nodes, "svg", {
        xmlns: true,
        class: true,
        fill: true,
        viewBox: true,
        stroke: true,
        "stroke-width": true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "class", "block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700");
      attr(a0, "href", "/login");
      attr(a1, "class", "hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block");
      attr(a1, "href", "/register");
      attr(div0, "class", "sm:flex sm:gap-4");
      attr(span, "class", "sr-only");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "d", "M4 6h16M4 12h16M4 18h16");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "h-5 w-5");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "stroke", "currentColor");
      attr(svg, "stroke-width", "2");
      attr(button, "class", "block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden");
      attr(div1, "class", "flex items-center gap-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, a0);
      append_hydration(a0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, a1);
      append_hydration(a1, t2);
      append_hydration(div1, t3);
      append_hydration(div1, button);
      append_hydration(button, span);
      append_hydration(span, t4);
      append_hydration(button, t5);
      append_hydration(button, svg);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_if_block(ctx) {
  var _a;
  let div1;
  let div0;
  let p;
  let t0;
  let t1_value = (
    /*$currentUser*/
    ((_a = ctx[0]) == null ? void 0 : _a.username) + ""
  );
  let t1;
  let t2;
  let button0;
  let t3;
  let t4;
  let button1;
  let span;
  let t5;
  let t6;
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      p = element("p");
      t0 = text("Signed in as ");
      t1 = text(t1_value);
      t2 = space();
      button0 = element("button");
      t3 = text("Sign out");
      t4 = space();
      button1 = element("button");
      span = element("span");
      t5 = text("Toggle menu");
      t6 = space();
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      p = claim_element(div0_nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Signed in as ");
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      button0 = claim_element(div0_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t3 = claim_text(button0_nodes, "Sign out");
      button0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      span = claim_element(button1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t5 = claim_text(span_nodes, "Toggle menu");
      span_nodes.forEach(detach);
      t6 = claim_space(button1_nodes);
      svg = claim_svg_element(button1_nodes, "svg", {
        xmlns: true,
        class: true,
        fill: true,
        viewBox: true,
        stroke: true,
        "stroke-width": true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button0, "class", "block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700");
      attr(div0, "class", "sm:flex sm:gap-4");
      attr(span, "class", "sr-only");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "d", "M4 6h16M4 12h16M4 18h16");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "h-5 w-5");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "stroke", "currentColor");
      attr(svg, "stroke-width", "2");
      attr(button1, "class", "block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden");
      attr(div1, "class", "flex items-center gap-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, p);
      append_hydration(p, t0);
      append_hydration(p, t1);
      append_hydration(div0, t2);
      append_hydration(div0, button0);
      append_hydration(button0, t3);
      append_hydration(div1, t4);
      append_hydration(div1, button1);
      append_hydration(button1, span);
      append_hydration(span, t5);
      append_hydration(button1, t6);
      append_hydration(button1, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(
          button0,
          "click",
          /*signOut*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty & /*$currentUser*/
      1 && t1_value !== (t1_value = /*$currentUser*/
      ((_a2 = ctx2[0]) == null ? void 0 : _a2.username) + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let header;
  let div1;
  let a0;
  let span;
  let t0;
  let t1;
  let svg;
  let path;
  let t2;
  let div0;
  let nav;
  let ul;
  let li0;
  let a1;
  let t3;
  let t4;
  let li1;
  let a2;
  let t5;
  let t6;
  let li2;
  let a3;
  let t7;
  let t8;
  let li3;
  let a4;
  let t9;
  let t10;
  let li4;
  let a5;
  let t11;
  let t12;
  let li5;
  let a6;
  let t13;
  let t14;
  function select_block_type(ctx2, dirty) {
    if (
      /*$currentUser*/
      ctx2[0]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      header = element("header");
      div1 = element("div");
      a0 = element("a");
      span = element("span");
      t0 = text("Home");
      t1 = space();
      svg = svg_element("svg");
      path = svg_element("path");
      t2 = space();
      div0 = element("div");
      nav = element("nav");
      ul = element("ul");
      li0 = element("li");
      a1 = element("a");
      t3 = text("About");
      t4 = space();
      li1 = element("li");
      a2 = element("a");
      t5 = text("Careers");
      t6 = space();
      li2 = element("li");
      a3 = element("a");
      t7 = text("History");
      t8 = space();
      li3 = element("li");
      a4 = element("a");
      t9 = text("Services");
      t10 = space();
      li4 = element("li");
      a5 = element("a");
      t11 = text("Projects");
      t12 = space();
      li5 = element("li");
      a6 = element("a");
      t13 = text("Blog");
      t14 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { "aria-label": true, class: true });
      var header_nodes = children(header);
      div1 = claim_element(header_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      span = claim_element(a0_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Home");
      span_nodes.forEach(detach);
      t1 = claim_space(a0_nodes);
      svg = claim_svg_element(a0_nodes, "svg", {
        class: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true, fill: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      nav = claim_element(div0_nodes, "NAV", { "aria-label": true, class: true });
      var nav_nodes = children(nav);
      ul = claim_element(nav_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      a1 = claim_element(li0_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "About");
      a1_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t4 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      a2 = claim_element(li1_nodes, "A", { class: true, href: true });
      var a2_nodes = children(a2);
      t5 = claim_text(a2_nodes, "Careers");
      a2_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      t6 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      a3 = claim_element(li2_nodes, "A", { class: true, href: true });
      var a3_nodes = children(a3);
      t7 = claim_text(a3_nodes, "History");
      a3_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      t8 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      a4 = claim_element(li3_nodes, "A", { class: true, href: true });
      var a4_nodes = children(a4);
      t9 = claim_text(a4_nodes, "Services");
      a4_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      t10 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      a5 = claim_element(li4_nodes, "A", { class: true, href: true });
      var a5_nodes = children(a5);
      t11 = claim_text(a5_nodes, "Projects");
      a5_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      t12 = claim_space(ul_nodes);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      a6 = claim_element(li5_nodes, "A", { class: true, href: true });
      var a6_nodes = children(a6);
      t13 = claim_text(a6_nodes, "Blog");
      a6_nodes.forEach(detach);
      li5_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      t14 = claim_space(div0_nodes);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "sr-only");
      attr(path, "d", "M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z");
      attr(path, "fill", "currentColor");
      attr(svg, "class", "h-8");
      attr(svg, "viewBox", "0 0 28 24");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(a0, "class", "block text-teal-600");
      attr(a0, "href", "/");
      attr(a1, "class", "text-gray-500 transition hover:text-gray-500/75");
      attr(a1, "href", "/");
      attr(a2, "class", "text-gray-500 transition hover:text-gray-500/75");
      attr(a2, "href", "/");
      attr(a3, "class", "text-gray-500 transition hover:text-gray-500/75");
      attr(a3, "href", "/");
      attr(a4, "class", "text-gray-500 transition hover:text-gray-500/75");
      attr(a4, "href", "/");
      attr(a5, "class", "text-gray-500 transition hover:text-gray-500/75");
      attr(a5, "href", "/");
      attr(a6, "class", "text-gray-500 transition hover:text-gray-500/75");
      attr(a6, "href", "/");
      attr(ul, "class", "flex items-center gap-6 text-sm");
      attr(nav, "aria-label", "Site Nav");
      attr(nav, "class", "hidden md:block");
      attr(div0, "class", "flex flex-1 items-center justify-end md:justify-between");
      attr(div1, "class", "mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8");
      attr(header, "aria-label", "Site Header");
      attr(header, "class", "bg-white");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, div1);
      append_hydration(div1, a0);
      append_hydration(a0, span);
      append_hydration(span, t0);
      append_hydration(a0, t1);
      append_hydration(a0, svg);
      append_hydration(svg, path);
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      append_hydration(div0, nav);
      append_hydration(nav, ul);
      append_hydration(ul, li0);
      append_hydration(li0, a1);
      append_hydration(a1, t3);
      append_hydration(ul, t4);
      append_hydration(ul, li1);
      append_hydration(li1, a2);
      append_hydration(a2, t5);
      append_hydration(ul, t6);
      append_hydration(ul, li2);
      append_hydration(li2, a3);
      append_hydration(a3, t7);
      append_hydration(ul, t8);
      append_hydration(ul, li3);
      append_hydration(li3, a4);
      append_hydration(a4, t9);
      append_hydration(ul, t10);
      append_hydration(ul, li4);
      append_hydration(li4, a5);
      append_hydration(a5, t11);
      append_hydration(ul, t12);
      append_hydration(ul, li5);
      append_hydration(li5, a6);
      append_hydration(a6, t13);
      append_hydration(div0, t14);
      if_block.m(div0, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(header);
      if_block.d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $currentUser;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(0, $currentUser = $$value));
  function signOut() {
    pb.authStore.clear();
  }
  return [$currentUser, signOut];
}
class Nav extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
const app = "";
function create_fragment(ctx) {
  let nav;
  let t;
  let current;
  nav = new Nav({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      create_component(nav.$$.fragment);
      t = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      claim_component(nav.$$.fragment, nodes);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(nav, target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(nav.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(nav.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(nav, detaching);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
