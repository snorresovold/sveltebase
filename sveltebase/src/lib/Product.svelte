<script lang="ts">
	import UserIcon from "./UserIcon.svelte";

    export let price: any;
    export let name: any;
    export let user: string;
    export let link: any;
    export let desc: any;
</script>
<a href={"products/" + link} class="block group border-4 border-black">

  <UserIcon id={user} />

  <div class="mt-3">
    <h3
      class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
    >
      {name}
    </h3>
    <p>{desc}</p>
    <p class="mt-1 text-sm text-gray-700">{price} $</p>
  </div>
</a>