import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <div className="p-5">
                <h1 className="mb-5 text-4xl font-bold text-purple-400 text-center">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}