<script lang="ts">
    export let data: any;
    $: ({ user } = data);
</script>

<img
    class="avatar"
    src={`https://avatars.dicebear.com/api/identicon/${user.expand?.user?.username}.svg`}
    alt="avatar"
    width="40px"
/>
