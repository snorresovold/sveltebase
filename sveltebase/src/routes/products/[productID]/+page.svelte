<script lang="ts">
    export let data;
    const { product } = data;
</script>

<h1>{product.name}</h1>
<p>{product.price}</p>
<p>{product.desc}</p>
<p>{product.expand?.user?.username}</p>