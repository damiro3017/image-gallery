// REACT
import { Link } from "react-router-dom"
import { useState } from "react"

// ICONS
import { SearchIcon } from "../assets/icons/Icons"

export const Header = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue);
        setInputValue('');
    };

    return (
        <header className="fixed w-full mt-4">
            <div className="flex items-center justify-between gap-4 max-w-5xl mx-auto py-2 px-2 rounded-full
            bg-white/60 backdrop-blur-lg">
                {/* ICON */}
                <Link to="/" className="text-xl text-gray-800 ml-4">
                    Image<span className="font-bold">Gallery</span>
                </Link>

                {/* USER ACTIONS */}
                <form onSubmit={handleSubmit} className="flex items-center border border-gray-600/20 rounded-3xl">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="py-2 px-4 rounded-bl-3xl rounded-tl-3xl outline-none max-w-[200px]"
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <button
                        className="bg-[#374151] text-white p-2 rounded-br-3xl rounded-tr-3xl"
                        type="submit"
                    >
                        <SearchIcon className="size-6 hover:scale-105 transition ease-in-out duration-300" />
                    </button>
                </form>
            </div>
        </header >
    )
}
