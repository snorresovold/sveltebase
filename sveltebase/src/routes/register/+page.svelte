<script lang="ts">
	import Nav from "$lib/Nav.svelte";
	import { currentUser, pb } from "./utils"

	let username: string;
	let password: string;

	async function login() {
		const user = await pb.collection('users').authWithPassword(username, password);
		console.log(user)
	}

	async function signUp() {
		try {
		const data = {
			username,
			password,
			passwordConfirm: password,
			name: 'hi mom!',
		};
		const createdUser = await pb.collection('users').create(data);
		await login();
		} catch (err) {
		console.error(err)
		}
	}
	
	function signOut() {
		pb.authStore.clear();
		console.log("leared")
	}

</script>

{#if $currentUser}
	<Nav/>
	<p>
	Signed in as {$currentUser.username} 
	<button on:click={signOut}>Sign Out</button>
	</p>
{:else}
	<form on:submit|preventDefault>
		<input
		placeholder="Username"
		type="text"
		bind:value={username}
		/>

		<input 
		placeholder="Password" 
		type="password" 
		bind:value={password} 
		/>
		<button on:click={signUp}>Sign Up</button>
		<button on:click={login}>Login</button>
	</form>
{/if}