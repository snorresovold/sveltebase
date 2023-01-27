<script lang="ts">
	export let data;
	const { product } = data;
</script>

<h1>{product.name}</h1>
<p>{product.price}</p>
<p>{product.desc}</p>
<p>{product.expand?.user?.username}</p>
<img
	class="avatar"
	src={`https://avatars.dicebear.com/api/identicon/${product.expand?.user?.username}.svg`}
	alt="avatar"
	width="40px"
/>
{#each product as x}
	<img
		class="avatar"
		src={x.url}
		alt="avatar"
		width="40px"
	/>
{/each}