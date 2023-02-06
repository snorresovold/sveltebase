<script lang="ts">
	import UserIcon from "$lib/UserIcon.svelte";

    export let data: any;
    $: ({ product } = data);
</script>

<h1>{product.name}</h1>
<p>{product.price} $</p>
<p>{product.desc}</p>
<p>{product.expand?.user?.username}</p>
<UserIcon id={product.expand?.user?.id} />
{#each product.expand.image as x}
	<img
		class="avatar"
		src={x.url}
		alt="avatar"
		width="40px"
	/>
{/each}