"use client";
import { Product } from "@/types";
import React, { createContext, useContext, useReducer, useEffect } from "react";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id,
      );

      if (existingItem) {
        const updatedItems = state.items?.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );

        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
          ),
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      }

      const newItems = [...state.items, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        items: newItems,
        total: newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        ),
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) => item._id !== action.payload,
      );
      return {
        ...state,
        items: newItems,
        total: newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        ),
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case "UPDATE_QUANTITY": {
      const updatedItems = state.items
        .map((item) =>
          item._id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        ),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case "CLEAR_CART":
      return initialState;

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isMounted, setIsMounted] = React.useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("beams-coffee-cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsedCart });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("beams-coffee-cart", JSON.stringify(state));
  }, [state]);

  const addItem = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
