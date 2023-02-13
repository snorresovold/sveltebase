<script lang="ts">

    export let name: string;
    export let desc: string;
    export let price: number;
</script>

<div class="block group border-4 border-black m-4">
    <a href={"/products/"} >
        
        <div class="mt-3">
        <h3
            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
        >
            {name}
        </h3>
        <p>{desc}</p>
        <p class="mt-1 text-sm text-gray-700">{price} $</p>
        </div>
    </a>
</div>
