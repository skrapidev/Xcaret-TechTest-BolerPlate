import { createContext, useState } from "react";
interface orderModel {
  id: number;
  name: string;
}
export interface orderContext {
  order: orderModel;
  getOrder: () => void;
}
export const OrderContext = createContext({
  order: { id: 0, name: "sin orden" },
  getOrder: () => {},
});

export const OrderProvider = ({ children }: any) => {
  const [order, setOrder] = useState<orderModel>({ id: 0, name: "sin orden" });

  const getOrder = () => {
    const order: orderModel = { id: 1, name: "Order 1" };
    setOrder(order);
  };
  return (
    <OrderContext.Provider value={{ order, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
