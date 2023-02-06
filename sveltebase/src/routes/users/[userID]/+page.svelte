<script lang="ts">
	import Product from "$lib/Product.svelte";
    export let data: any;
    $: ({ user } = data);
    console.log(data)
</script>

<p>{user.username}</p>

<img
    class="avatar"
    src={`https://avatars.dicebear.com/api/identicon/${user.expand?.user?.username}.svg`}
    alt="avatar"
    width="40px"
/>


{#each user.expand as product}
    <Product price={product.price} name={product.name} user={product.user} link={product.link}  desc={product.desc}/>
{/each}
