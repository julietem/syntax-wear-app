import IconCart from "@/assets/images/icon-cart.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CartButtonProps {
  onClick?: () => void;
}
export const CartButton = ({onClick}: CartButtonProps) => {
    const { cart } =
        useContext(CartContext);

  return (
   <button
        className="relative cursor-pointer"
        onClick={onClick}
      >
        <img src={IconCart} alt="Ícone carrinho de compras" />
        {cart.length > 0 && (
          <span className="absolute top-1 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
  )
}
