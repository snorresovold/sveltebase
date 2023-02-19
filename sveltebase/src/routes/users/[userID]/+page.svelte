<script lang="ts">
	import Product from "$lib/Product.svelte";
    import { currentUser } from "$lib/pocketbase";
    export let data: any;
    $: ({ user } = data);
    if (data.user.id == $currentUser?.id) {
        console.log("yo, this is your page")
    } else {
        console.log("not your page")
    }
</script>

<p>{user.username}</p>

{#if user.id ?? $currentUser?.id}
    <button class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700">Create more</button>
{/if}
<img
    class="avatar"
    src={`https://avatars.dicebear.com/api/identicon/${user.id}.svg`}
    alt="avatar"
    width="40px"
/>

<div class="h-56 grid grid-cols-4 content-start">
    {#each user.expand["products(user)"] as product}
        <Product price={product.price} name={product.name} user={product.user} link={product.id}  desc={product.desc}/>
    {/each}
</div>