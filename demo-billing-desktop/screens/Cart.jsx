import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from "../components/Button";
import { CartItem, Loader } from "../components";
import back from '../src/assets/back.svg'

export default function Cart() {
    const location = useLocation();
    const phoneNumber = location.state;

    const navigate = useNavigate();

    console.log(phoneNumber);

    const [cartData, setCartData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function goBack() {
        navigate(-1);
    }

    useEffect(()=>{
        async function getCartData() {
            setIsLoading(true);

            const cart = await axios.get(
                `http://127.0.0.1:8000/api/cart/get-cart-details/${phoneNumber}`,
            );
    
            setCartData(cart.data);
            console.log(cart.data);
            setIsLoading(false);
        }

        getCartData();
    }, [])

    return (
        <div className="h-[90vh] w-100 py-8">
            <div>
                <div className="w-full flex items-center justify-between mb-8">
                    <div className="flex items-center font-semibold text-3xl">
                        <span>
                            <img src={back} onClick={goBack} className="w-[40px] mr-4 hover:cursor-pointer" /></span> Cart
                        {
                            cartData && <span className="text-sm ml-2">({(cartData.items.length)})</span>
                        }
                    </div>
                </div>
                <div className="h-full w-100 flex items-start justify-between">
                    <div className="h-[60vh] w-[60.5%] bg-[#1C1C24] rounded-lg flex flex-col align-items items-start p-6 overflow-scroll no-scrollbar">
                        {
                            cartData?.items.map(item => 
                                <CartItem 
                                    key={item.product._id}
                                    src={item.product.imageURL}
                                    title={item.product.name}
                                    description={item.product.detail}
                                    price={item.product.price}
                                    quantity={item.quantity}
                                />
                            )
                        }
                    </div>

                    <div className="h-[80%] w-[37.5%] bg-[#1C1C24] rounded-lg flex flex-col align-items items-start p-8">
                        <span className="font-semibold text-3xl mb-8">Bill Details</span>

                        <div className="flex flex-col w-full">
                            <span>Number of items: { cartData?.items.length }</span>
                            <span className="text-lg mt-4">Summary</span>
                            <div className="flex flex-col mb-4 font-light text-sm w-full">
                                {
                                    cartData?.items.map(item => 
                                        <span className="w-full flex justify-between">
                                            <span>{item.quantity} x {item.product.name}</span>
                                            <span>₹ {item.product.price}</span>
                                        </span>
                                    )
                                }
                            </div>
                            <span className="mb-4 text-lg">Total : ₹ { cartData?.total }</span>
                            <Button label="Pay" />
                        </div>
                    </div>
                </div>
            </div>
            {
                isLoading && <Loader />
            }
        </div>
    );
}