import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function QuickCheckoutInput() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value);
        console.log(input);
    }

    function handleClick() {
        navigate('cart', { state: input });
    }

    return (
        <div className="h-[90vh] w-100 py-8">
            <span className="font-semibold text-3xl">Quick Checkout</span>
            <div className="h-full w-100 flex items-center">
                <div className="h-[80%] w-[100%] bg-[#1C1C24] rounded-lg flex align-items items-center">
                    <div className="w-full flex flex-col items-center">
                        <div className="flex flex-col">
                            <label className="text-lg pb-2">Phone Number</label>
                            <input className="tracking-[3.1vw] px-8 font-bold rounded-md outline-none w-[40vw] h-16 bg-transparent border-2 border-[#3A3A43]"
                                value={input}
                                onChange={handleChange}
                            />

                            <div className="flex justify-center mt-12">
                                <Button onClick={handleClick} label="Checkout" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};