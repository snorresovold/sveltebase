import { pb } from "$lib/pocketbase"

export const load = async ({ params }: any) => {

    const fetchProduct = async (id: string) => {
        const user = await pb.collection("users").getOne(id, {
            expand: "products(user)" 
        })
        return user
    }

    return {
        user: await fetchProduct(params.userID)
    }
}