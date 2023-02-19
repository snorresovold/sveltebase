<script lang="ts">
    export let id: string;
    //console.log(id)
</script>

<div>
    <a href={"/users/" + id} >
        <img
        class="avatar"
        src={`https://avatars.dicebear.com/api/identicon/${id}.svg`}
        alt="avatar"
        width="40px"
        />
    </a>
</div>