import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.PB_TEMP_URL);

interface Cart {
  id: string;
  quantity: number;
  price: string;
}

export const CreateCart = async (
  productId: string,
  productQty: string | number,
  productPrice: string | number
) => {
  let newCart;
  const data = {
    product_id: productId,
    quantity: productQty,
    price: productPrice,
  };
  try {
    newCart = await pb.collection("cart").create(data);
    console.log(newCart);
  } catch (error) {
    console.log(error);
  }

  return newCart;
};
