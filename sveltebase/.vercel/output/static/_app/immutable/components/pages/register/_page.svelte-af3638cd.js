import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, C as noop, h as detach, G as component_subscribe, Q as bubble, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, n as attr, F as append_hydration, R as set_input_value, H as listen, T as prevent_default, U as run_all, u as set_data, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-ef0836bc.js";
import { c as currentUser, p as pb } from "../../../chunks/pocketbase-47fbcd4c.js";
function create_else_block(ctx) {
  let div11;
  let div10;
  let div0;
  let t0;
  let div9;
  let div8;
  let div1;
  let h1;
  let t1;
  let t2;
  let form;
  let div7;
  let div6;
  let div2;
  let input0;
  let t3;
  let label0;
  let t4;
  let t5;
  let div3;
  let input1;
  let t6;
  let label1;
  let t7;
  let t8;
  let div4;
  let input2;
  let t9;
  let label2;
  let t10;
  let t11;
  let div5;
  let button;
  let t12;
  let mounted;
  let dispose;
  return {
    c() {
      div11 = element("div");
      div10 = element("div");
      div0 = element("div");
      t0 = space();
      div9 = element("div");
      div8 = element("div");
      div1 = element("div");
      h1 = element("h1");
      t1 = text("Register");
      t2 = space();
      form = element("form");
      div7 = element("div");
      div6 = element("div");
      div2 = element("div");
      input0 = element("input");
      t3 = space();
      label0 = element("label");
      t4 = text("Username");
      t5 = space();
      div3 = element("div");
      input1 = element("input");
      t6 = space();
      label1 = element("label");
      t7 = text("Password");
      t8 = space();
      div4 = element("div");
      input2 = element("input");
      t9 = space();
      label2 = element("label");
      t10 = text("Confirm Password");
      t11 = space();
      div5 = element("div");
      button = element("button");
      t12 = text("Submit");
      this.h();
    },
    l(nodes) {
      div11 = claim_element(nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div0 = claim_element(div10_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach);
      t0 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div1 = claim_element(div8_nodes, "DIV", {});
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Register");
      h1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t2 = claim_space(div8_nodes);
      form = claim_element(div8_nodes, "FORM", {});
      var form_nodes = children(form);
      div7 = claim_element(form_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div2 = claim_element(div6_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      input0 = claim_element(div2_nodes, "INPUT", {
        autocomplete: true,
        id: true,
        name: true,
        type: true,
        class: true,
        placeholder: true
      });
      t3 = claim_space(div2_nodes);
      label0 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      t4 = claim_text(label0_nodes, "Username");
      label0_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t5 = claim_space(div6_nodes);
      div3 = claim_element(div6_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      input1 = claim_element(div3_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        class: true,
        placeholder: true
      });
      t6 = claim_space(div3_nodes);
      label1 = claim_element(div3_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      t7 = claim_text(label1_nodes, "Password");
      label1_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t8 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      input2 = claim_element(div4_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        class: true,
        placeholder: true
      });
      t9 = claim_space(div4_nodes);
      label2 = claim_element(div4_nodes, "LABEL", { for: true, class: true });
      var label2_nodes = children(label2);
      t10 = claim_text(label2_nodes, "Confirm Password");
      label2_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t11 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      button = claim_element(div5_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t12 = claim_text(button_nodes, "Submit");
      button_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      form_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl");
      attr(h1, "class", "text-2xl font-semibold");
      attr(input0, "autocomplete", "off");
      attr(input0, "id", "username");
      attr(input0, "name", "username");
      attr(input0, "type", "text");
      attr(input0, "class", "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600");
      attr(input0, "placeholder", "username");
      attr(label0, "for", "email");
      attr(label0, "class", "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm");
      attr(div2, "class", "relative");
      attr(input1, "id", "password");
      attr(input1, "name", "password");
      attr(input1, "type", "password");
      attr(input1, "class", "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600");
      attr(input1, "placeholder", "Password");
      attr(label1, "for", "password");
      attr(label1, "class", "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm");
      attr(div3, "class", "relative");
      attr(input2, "id", "passwordConfirm");
      attr(input2, "name", "passwordConfirm");
      attr(input2, "type", "password");
      attr(input2, "class", "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600");
      attr(input2, "placeholder", "Password");
      attr(label2, "for", "passwordConfirm");
      attr(label2, "class", "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm");
      attr(div4, "class", "relative");
      attr(button, "class", "bg-blue-500 text-white rounded-md px-2 py-1");
      attr(div5, "class", "relative");
      attr(div6, "class", "py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7");
      attr(div7, "class", "divide-y divide-gray-200");
      attr(div8, "class", "max-w-md mx-auto");
      attr(div9, "class", "relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20");
      attr(div10, "class", "relative py-3 sm:max-w-xl sm:mx-auto");
      attr(div11, "class", "min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12");
    },
    m(target, anchor) {
      insert_hydration(target, div11, anchor);
      append_hydration(div11, div10);
      append_hydration(div10, div0);
      append_hydration(div10, t0);
      append_hydration(div10, div9);
      append_hydration(div9, div8);
      append_hydration(div8, div1);
      append_hydration(div1, h1);
      append_hydration(h1, t1);
      append_hydration(div8, t2);
      append_hydration(div8, form);
      append_hydration(form, div7);
      append_hydration(div7, div6);
      append_hydration(div6, div2);
      append_hydration(div2, input0);
      set_input_value(
        input0,
        /*username*/
        ctx[0]
      );
      append_hydration(div2, t3);
      append_hydration(div2, label0);
      append_hydration(label0, t4);
      append_hydration(div6, t5);
      append_hydration(div6, div3);
      append_hydration(div3, input1);
      set_input_value(
        input1,
        /*password*/
        ctx[1]
      );
      append_hydration(div3, t6);
      append_hydration(div3, label1);
      append_hydration(label1, t7);
      append_hydration(div6, t8);
      append_hydration(div6, div4);
      append_hydration(div4, input2);
      set_input_value(
        input2,
        /*passwordConfirm*/
        ctx[2]
      );
      append_hydration(div4, t9);
      append_hydration(div4, label2);
      append_hydration(label2, t10);
      append_hydration(div6, t11);
      append_hydration(div6, div5);
      append_hydration(div5, button);
      append_hydration(button, t12);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[7]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[8]
          ),
          listen(
            input2,
            "input",
            /*input2_input_handler*/
            ctx[9]
          ),
          listen(
            button,
            "click",
            /*signUp*/
            ctx[4]
          ),
          listen(form, "submit", prevent_default(
            /*submit_handler*/
            ctx[6]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*username*/
      1 && input0.value !== /*username*/
      ctx2[0]) {
        set_input_value(
          input0,
          /*username*/
          ctx2[0]
        );
      }
      if (dirty & /*password*/
      2 && input1.value !== /*password*/
      ctx2[1]) {
        set_input_value(
          input1,
          /*password*/
          ctx2[1]
        );
      }
      if (dirty & /*passwordConfirm*/
      4 && input2.value !== /*passwordConfirm*/
      ctx2[2]) {
        set_input_value(
          input2,
          /*passwordConfirm*/
          ctx2[2]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(div11);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block(ctx) {
  let p;
  let t0;
  let t1_value = (
    /*$currentUser*/
    ctx[3].username + ""
  );
  let t1;
  let t2;
  let button;
  let t3;
  let mounted;
  let dispose;
  return {
    c() {
      p = element("p");
      t0 = text("Signed in as ");
      t1 = text(t1_value);
      t2 = space();
      button = element("button");
      t3 = text("Sign Out");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Signed in as ");
      t1 = claim_text(p_nodes, t1_value);
      t2 = claim_space(p_nodes);
      button = claim_element(p_nodes, "BUTTON", {});
      var button_nodes = children(button);
      t3 = claim_text(button_nodes, "Sign Out");
      button_nodes.forEach(detach);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, t1);
      append_hydration(p, t2);
      append_hydration(p, button);
      append_hydration(button, t3);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*signOut*/
          ctx[5]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*$currentUser*/
      8 && t1_value !== (t1_value = /*$currentUser*/
      ctx2[3].username + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*$currentUser*/
      ctx2[3]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $currentUser;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(3, $currentUser = $$value));
  let username;
  let password;
  let passwordConfirm;
  async function login() {
    const user = await pb.collection("users").authWithPassword(username, password);
    console.log(user);
  }
  async function signUp() {
    try {
      const data = { username, password, passwordConfirm };
      const createdUser = await pb.collection("users").create(data);
      await login();
    } catch (err) {
      console.error(err);
    }
  }
  function signOut() {
    pb.authStore.clear();
  }
  function submit_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input0_input_handler() {
    username = this.value;
    $$invalidate(0, username);
  }
  function input1_input_handler() {
    password = this.value;
    $$invalidate(1, password);
  }
  function input2_input_handler() {
    passwordConfirm = this.value;
    $$invalidate(2, passwordConfirm);
  }
  return [
    username,
    password,
    passwordConfirm,
    $currentUser,
    signUp,
    signOut,
    submit_handler,
    input0_input_handler,
    input1_input_handler,
    input2_input_handler
  ];
}
class Register extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let register;
  let current;
  register = new Register({});
  return {
    c() {
      create_component(register.$$.fragment);
    },
    l(nodes) {
      claim_component(register.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(register, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(register.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(register.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(register, detaching);
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
