<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import { currentUser, pb } from './pocketbase';
import Product from './Product.svelte';

let products: any[] = [];
let unsubscribe: () => void;

onMount(async () => {
    // Get initial products
    const resultList = await pb.collection('products').getList(1, 10, {
    sort: 'created',
    expand: 'user',
    });
    products = resultList.items;

    // Subscribe to realtime products
    unsubscribe = await pb
    .collection('products')
    .subscribe('*', async ({ action, record }) => {
        if (action === 'create') {
        // Fetch associated use
        const user = await pb.collection('users').getOne(record.user);
        record.expand = { user };
        products = [...products, record];
        }
        if (action === 'delete') {
        products = products.filter((m) => m.id !== record.id);
        }
    });
});

// Unsubscribe from realtime products
onDestroy(() => {
    unsubscribe?.();
});

</script>

<div class="h-56 grid grid-cols-6 gap-4 content-start">
{#each products as product (product.id)}
    <Product price={product.price} name={product.name} user={product.expand?.user?.username} link={product.id} desc={product.desc}/>
{/each}
</div>