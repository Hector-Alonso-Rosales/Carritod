import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css";

const Products = () => {
    const { data, buyProducts } = useContext(dataContext);

    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} height={450} width={300}alt="img-product-card"/>
                <h3>{product.name}</h3>
                <h4>{product.author}</h4>
                <h5>{product.price}$</h5>
                <button onClick={() => buyProducts(product)}>Agregar al Carro</button>
            </div>
        );
    });
};

export default Products;