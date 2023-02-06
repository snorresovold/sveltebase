import { pb } from "$lib/pocketbase"

export const load = async ({ params }: any) => {

    const fetchProduct = async (id: string) => {
        let user = {};
    
        try {
            user = await pb.collection("users").getOne(id, {
                expand: "products(user)" 
            })
    
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message)
            } else {
                console.log("unexpected error", err)
            }
        }
        
        return user
    }
    

    return {
        user: await fetchProduct(params.userID)
    }
}