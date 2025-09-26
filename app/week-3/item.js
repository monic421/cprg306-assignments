export default function Item({ name, quantity, category }) {
    return (
        <li className="text-center rounded-xl border border-purple-400 bg-purple-50 p-3">
            <p className="font-semibold">{name}</p>
            <p className="text-slate-500">Quantity: {quantity}</p>
            <p>
                <span className="inline-flex rounded-full bg-purple-100 px-3 py-0.5 text-xs text-purple-400">
                    {category}
                </span>
            </p>
        </li>
    );
}
