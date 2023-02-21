<script lang="ts">

    export let duration: number;
    export let start_time: string;
    export let price: number;
    const date = new Date(start_time);
    date.toLocaleString()

</script>

<div class="block group border-4 border-black m-4">
        
        <div class="mt-3">
        <h3
            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
        >
            {date}
        </h3>
        <p>test</p>
        <p>{duration} minutes</p>
        <p class="mt-1 text-sm text-gray-700">{price} $</p>
        <button>Buy now</button>
       </div>
</div>
