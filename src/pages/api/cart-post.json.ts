import type { APIRoute } from "astro";
import { pb } from "../../utils/pb";
import { CreateCart, Todo } from "../../utils/cart";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  try {
    CreateCart(data.productId, data.productQty, data.productPrice);
  } catch (error) {
    console.log(error);
  }
  return new Response(
    JSON.stringify({
      message: data ? "success" : "error",
    })
  );
};
