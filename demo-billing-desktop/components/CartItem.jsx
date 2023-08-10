export default function CartItem({ src, title, description, price, quantity }) {
    return (
        <div className="flex p-4 h-max">
            <img src={src} className='w-[400px] h-[275px] object-cover rounded-xl mr-16' />
            <div className="flex flex-col py-4 h-[275px] ">
                <span className="font-bold text-xl">{title}</span>
                { description } 
                {quantity} ₹{price}
            </div>
        </div>
    );
}