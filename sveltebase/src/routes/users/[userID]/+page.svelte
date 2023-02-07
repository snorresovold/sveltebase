<script lang="ts">
	import Products from "$lib/Products.svelte";
	import Product from "$lib/Product.svelte";
    export let data: any;
    $: ({ user } = data);
    //console.log(data)
</script>

<p>{user.username}</p>

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