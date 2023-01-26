import { pb } from "$lib/pocketbase"

export const load = ({ fetch, params }: any) => {

    const fetchProduct = async (id: string) => {
        return await pb.collection('products').getOne(id)
    }

    return {
        product: fetchProduct(params.productID)
    }
}