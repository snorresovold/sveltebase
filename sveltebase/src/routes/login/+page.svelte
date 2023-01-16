<script lang="ts">
	import { currentUser, pb } from "../../lib/utils"

    function signOut() {
		pb.authStore.clear();
	}

</script>

<p>
	Signed in as {$currentUser?.username} 
	<button on:click={signOut}>Sign Out</button>
</p>