<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import { currentUser, pb } from './pocketbase';
import Product from './Product.svelte';

export let products: any[] = [];
</script>

<div class="h-56 grid grid-cols-4 content-start">
    {#each products as product (product.id)}
        <Product price={product.price} name={product.name} user={product.expand?.user?.id} link={product.id} desc={product.desc} />
    {/each}
</div>