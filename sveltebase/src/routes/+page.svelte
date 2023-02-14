<script lang="ts">
	import Products from "$lib/Products.svelte";
	import { onMount, onDestroy } from 'svelte';
	import { currentUser, pb } from '$lib/pocketbase';

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
<h1>Welcome to SvelteKit</h1>
<Products products={products}/>
<h1>Test test</h1>