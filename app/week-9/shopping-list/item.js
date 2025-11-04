export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li
            onClick={onSelect}
            role="button"
            tabIndex={0}
            className="text-center rounded-xl border border-purple-400 bg-purple-50 p-3 dark:border-purple-500 dark:bg-purple-400/20">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-slate-500">Quantity: {quantity}</p>
            <p>
                <span className="inline-flex rounded-full bg-purple-100 px-3 py-0.5 text-xs text-purple-400 dark:text-purple-300 dark:bg-purple-400/20">
                    {category}
                </span>
            </p>
        </li>
    );
} 