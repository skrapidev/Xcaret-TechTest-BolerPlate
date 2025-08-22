import { useContext, useEffect } from "react";
import { OrderContext } from "../../Context/OrderContext";
import Card from "./Components/Card";

const Home = () => {
  const { order, getOrder } = useContext(OrderContext);

  useEffect(() => {
    getOrder();
  }, []); // didmount
  return (
    <div>
      <h1>Home</h1>
      <p>Esta es la pagina de inicio</p>
      <Card />
      <p>
        OrdenId: {order.id} -------- Orden: {order.name}
      </p>
    </div>
  );
};

export default Home;
