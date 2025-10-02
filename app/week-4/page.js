import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="p-5 max-w-md mx-auto">
            <h1 className="mb-3 text-2xl font-bold text-purple-400 text-center">Add New Item</h1>
            <NewItem />
        </main>
    );
}