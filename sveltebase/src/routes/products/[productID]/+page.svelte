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
<img
	class="avatar"
	src={product.expand?.image[0]?.url}
	alt="avatar"
	width="40px"
/>
<img
	class="avatar"
	src={product.expand?.image[1]?.url}
	alt="avatar"
	width="40px"
/>