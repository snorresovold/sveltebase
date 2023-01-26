import { pb } from "$lib/pocketbase"

export const load = ({ fetch, params }: any) => {

    const fetchProduct = async (id: string) => {
        const product = await pb.collection('products').getOne(id, {
            expand: "user, image"
        },
        )
        console.log(product)
        return product
    }

    return {
        product: fetchProduct(params.productID)
    }
}