export default function Navbar() {
    return (
        <div className="w-100 min-h-[10vh] flex justify-between items-center tracking-widest drop-shadow-lg">
            <span className="font-bold text-2xl">Apna Bazaar</span>
            <ul className="flex text-md gap-8 font-semibold">
                <li className="hover:font-bold">Create Bill</li>
                <li className="hover:font-bold">All Bills</li>
                <li className="hover:font-bold">Settings</li>
            </ul>
        </div>
    );
}