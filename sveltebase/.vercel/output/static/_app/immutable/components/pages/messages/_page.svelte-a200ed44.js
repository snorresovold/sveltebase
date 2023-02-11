import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, n as attr, b as insert_hydration, F as append_hydration, R as set_input_value, H as listen, T as prevent_default, M as update_keyed_each, C as noop, U as run_all, G as component_subscribe, o as onMount, O as onDestroy, P as src_url_equal, u as set_data, V as destroy_block, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-e8fcc4fa.js";
import { c as currentUser, p as pb } from "../../../chunks/pocketbase-9e424909.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  var _a, _b;
  let div1;
  let img;
  let img_src_value;
  let t0;
  let div0;
  let small;
  let t1;
  let t2_value = (
    /*message*/
    ((_b = (_a = ctx[6].expand) == null ? void 0 : _a.user) == null ? void 0 : _b.username) + ""
  );
  let t2;
  let t3;
  let p;
  let t4_value = (
    /*message*/
    ctx[6].text + ""
  );
  let t4;
  let t5;
  return {
    key: key_1,
    first: null,
    c() {
      div1 = element("div");
      img = element("img");
      t0 = space();
      div0 = element("div");
      small = element("small");
      t1 = text("Sent by @");
      t2 = text(t2_value);
      t3 = space();
      p = element("p");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      small = claim_element(div0_nodes, "SMALL", {});
      var small_nodes = children(small);
      t1 = claim_text(small_nodes, "Sent by @");
      t2 = claim_text(small_nodes, t2_value);
      small_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", { class: true });
      var p_nodes = children(p);
      t4 = claim_text(p_nodes, t4_value);
      p_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a2, _b2;
      attr(img, "class", "avatar");
      if (!src_url_equal(img.src, img_src_value = `https://avatars.dicebear.com/api/identicon/${/*message*/
      (_b2 = (_a2 = ctx[6].expand) == null ? void 0 : _a2.user) == null ? void 0 : _b2.username}.svg`))
        attr(img, "src", img_src_value);
      attr(img, "alt", "avatar");
      attr(img, "width", "40px");
      attr(p, "class", "msg-text");
      attr(div1, "class", "msg");
      this.first = div1;
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, img);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      append_hydration(div0, small);
      append_hydration(small, t1);
      append_hydration(small, t2);
      append_hydration(div0, t3);
      append_hydration(div0, p);
      append_hydration(p, t4);
      append_hydration(div1, t5);
    },
    p(new_ctx, dirty) {
      var _a2, _b2, _c, _d;
      ctx = new_ctx;
      if (dirty & /*messages*/
      2 && !src_url_equal(img.src, img_src_value = `https://avatars.dicebear.com/api/identicon/${/*message*/
      (_b2 = (_a2 = ctx[6].expand) == null ? void 0 : _a2.user) == null ? void 0 : _b2.username}.svg`)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*messages*/
      2 && t2_value !== (t2_value = /*message*/
      ((_d = (_c = ctx[6].expand) == null ? void 0 : _c.user) == null ? void 0 : _d.username) + ""))
        set_data(t2, t2_value);
      if (dirty & /*messages*/
      2 && t4_value !== (t4_value = /*message*/
      ctx[6].text + ""))
        set_data(t4, t4_value);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t0;
  let form;
  let input;
  let t1;
  let button;
  let t2;
  let mounted;
  let dispose;
  let each_value = (
    /*messages*/
    ctx[1]
  );
  const get_key = (ctx2) => (
    /*message*/
    ctx2[6].id
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
      t0 = space();
      form = element("form");
      input = element("input");
      t1 = space();
      button = element("button");
      t2 = text("Send");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      t0 = claim_space(nodes);
      form = claim_element(nodes, "FORM", {});
      var form_nodes = children(form);
      input = claim_element(form_nodes, "INPUT", { placeholder: true, type: true });
      t1 = claim_space(form_nodes);
      button = claim_element(form_nodes, "BUTTON", { type: true });
      var button_nodes = children(button);
      t2 = claim_text(button_nodes, "Send");
      button_nodes.forEach(detach);
      form_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "messages");
      attr(input, "placeholder", "Message");
      attr(input, "type", "text");
      attr(button, "type", "submit");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      insert_hydration(target, t0, anchor);
      insert_hydration(target, form, anchor);
      append_hydration(form, input);
      set_input_value(
        input,
        /*newMessage*/
        ctx[0]
      );
      append_hydration(form, t1);
      append_hydration(form, button);
      append_hydration(button, t2);
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[3]
          ),
          listen(form, "submit", prevent_default(
            /*sendMessage*/
            ctx[2]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*messages*/
      2) {
        each_value = /*messages*/
        ctx2[1];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
      }
      if (dirty & /*newMessage*/
      1 && input.value !== /*newMessage*/
      ctx2[0]) {
        set_input_value(
          input,
          /*newMessage*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (detaching)
        detach(t0);
      if (detaching)
        detach(form);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $currentUser;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(5, $currentUser = $$value));
  let newMessage;
  let messages = [];
  let unsubscribe;
  onMount(async () => {
    const resultList = await pb.collection("messages").getList(1, 50, { sort: "created", expand: "user" });
    $$invalidate(1, messages = resultList.items);
    unsubscribe = await pb.collection("messages").subscribe("*", async ({ action, record }) => {
      if (action === "create") {
        const user = await pb.collection("users").getOne(record.user);
        record.expand = { user };
        $$invalidate(1, messages = [...messages, record]);
      }
      if (action === "delete") {
        $$invalidate(1, messages = messages.filter((m) => m.id !== record.id));
      }
    });
  });
  onDestroy(() => {
    unsubscribe == null ? void 0 : unsubscribe();
  });
  async function sendMessage() {
    const data = { text: newMessage, user: $currentUser == null ? void 0 : $currentUser.id };
    await pb.collection("messages").create(data);
    $$invalidate(0, newMessage = "");
  }
  function input_input_handler() {
    newMessage = this.value;
    $$invalidate(0, newMessage);
  }
  return [newMessage, messages, sendMessage, input_input_handler];
}
class Messages extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let messages;
  let current;
  messages = new Messages({});
  return {
    c() {
      create_component(messages.$$.fragment);
    },
    l(nodes) {
      claim_component(messages.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(messages, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(messages.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(messages.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(messages, detaching);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
