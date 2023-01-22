<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { currentUser, pb } from './pocketbase';
    
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
            // Fetch associated user
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
    
    <div class="products">
    {#each products as product (product.id)}
        <div class="msg">
        <img
            class="avatar"
            src={`https://avatars.dicebear.com/api/identicon/${product.expand?.user?.username}.svg`}
            alt="avatar"
            width="40px"
        />
        <div>
            <small>
            Sent by @{product.expand?.user?.username}
            </small>
            <p class="msg-text">{product.name}</p>
        </div>
        </div>
    {/each}
    </div>