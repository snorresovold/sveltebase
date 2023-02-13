<script lang="ts">
	import Lesson from "$lib/Lesson.svelte";
import UserIcon from "$lib/UserIcon.svelte";

    export let data: any;
    $: ({ product } = data);
</script>

<h1>{product.name}</h1>
<p>{product.price} $</p>
<p>{product.desc}</p>
<p>{product.expand?.user?.username}</p>
<UserIcon id={product.expand?.user?.id} />

<div class="grid grid-cols-2 ml-8 mr-8">
    {#each product.expand["lessons(product)"] as lesson}
        <Lesson duration={lesson.duration} start_time={lesson.start_time} price={lesson.total_price} />
    {/each}
</div>