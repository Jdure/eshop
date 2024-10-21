import { pb } from "./pb";

interface Cart {
  id: string;
  quantity: number;
  price: string;
}

export const CreateCart = async (
  productId: string,
  productQty: number,
  productPrice: number
) => {
  const data = {
    product_id: productId,
    quantity: productQty,
    price: productPrice,
  };
  try {
    const record = await pb.collection("cart").create(data, {});
  } catch (error) {
    console.log(error);
  }
};

export const Todo = async (title: string) => {
  const data = {
    title: title,
  };
  try {
    const newTodo = await pb.collection("todo").create(data);
  } catch (error) {
    console.log(error);
  }
};
