export default function Button({ onClick, label }) {
    return (
            <button onClick={onClick}
                className="bg-[#57C072] py-4 px-12 font-bold tracking-widest rounded-md"
            >
                    {label}
            </button>
    );
}