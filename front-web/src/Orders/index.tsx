import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from "./ProductsList";
import Footer from "../Footer";
import { useEffect, useState } from 'react';
import { OrderLocationdata, Product } from './types';
import { fethProducts } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import { checkIsSelected } from './helpers';



function Orders(){

const [products, setProducts] = useState<Product[]>([]);
const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
}, 0);

useEffect(() => {
    fethProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
}, []);

const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

const handSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
}

    return (    
    <>
            <div className="orders-container">
                <StepsHeader />  
                <ProductsList 
                products={products} 
                onSelectProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
                />
                <OrderLocation 
                    onChangeLocation={location => setOrderLocation(location)} 
                />
                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice} 
                />
            </div>
                <Footer />
    </>
    )
}

export default Orders;