import plus from '../src/assets/plus.svg'
import minus from '../src/assets/minus.svg'

export default function CartItem({ src, title, description, price, quantity }) {
    return (
        <div className="flex p-4">
            <img src={src} className='w-[250px] h-[175px] object-cover rounded-xl mr-16' />
            <div className="flex flex-col py-4 h-[175px]">
                <span className="font-bold text-xl">{title}</span>
                <span className="font-light text-md">{ description }</span>
                <span className='flex gap-4 my-4 items-center'>
                    <img className='w-[30px]' src={minus} />
                    <span className='text-lg'>{ quantity }</span>
                    <img className='w-[30px]' src={plus} />
                </span>
                <span className='font-bold text-lg'>₹{price}</span>
            </div>
        </div>
    );
}