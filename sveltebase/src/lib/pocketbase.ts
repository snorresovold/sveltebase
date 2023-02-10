import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

//Hosted
export const pb = new PocketBase('https://scarce-salesmen.pockethost.io'); 

// DEV
//export const pb = new PocketBase('http://127.0.0.1:8090'); 

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    currentUser.set(pb.authStore.model);
});
