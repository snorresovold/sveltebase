<script lang="ts">
	import Products from "$lib/Products.svelte";
	import { onMount, onDestroy } from 'svelte';
	import { currentUser, pb } from '$lib/pocketbase';
	import { p } from "vitest/dist/index-5aad25c1";

	let products: any[]
	let unsubscribe: () => void;
	onMount(async () => {
		// Get initial products
		const resultList = await pb.collection('products').getList(1, 10, {
		sort: 'created',
		expand: 'user',
		});
		products = resultList.items;

		// Subscribe to realtime products
	});

	// Unsubscribe from realtime products
	onDestroy(() => {
		unsubscribe?.();
	});

</script>
<Products products={products}/>
<p>helvete</p>