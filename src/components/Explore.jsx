import { SectionContainer } from "./SectionContainer";
import { useState } from "react";
import { SearchIcon } from "../assets/icons/Icons";

export const Explore = () => {
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

    const [valor, setValor] = useState("")
    const [images, setImages] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);


    const fetchImages = async () => {
        const res = await fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${valor}&per_page=5`);
        const data = await res.json();
        setImages(data.results);
        setHasSearched(true);
        console.log(data.results);
    };

    return (
        <>
            <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full shadow-md bg-white  z-50">
                <div className="flex items-center justify-between max-w-7xl py-2 mx-4 xl:mx-auto ">
                    <a className="flex text-lg" href="/">
                        Image <span className="font-bold">Gallery</span>
                    </a>

                    {/* SEARCH MENU */}
                    <div className="flex items-center border border-gray-400">
                        <input
                            onChange={e => setValor(e.target.value)}
                            type="text"
                            placeholder="Buscar..."
                            className="p-2 outline-none"
                        />
                        <button
                            onClick={fetchImages}
                            className="size-10 bg-red-500 flex items-center justify-center"
                        >
                            <SearchIcon className="size-5 text-white" />
                        </button>
                    </div>
                </div>
            </header>

            <SectionContainer className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-6">
                    {hasSearched && valor.trim()
                        ? `Fotos de ${valor}`
                        : "Busca un término"}
                </h2>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                    {images.map((img) => (
                        <img key={img.id} src={img.urls.small} alt={img.alt_description} className="mb-4 rounded" />
                    ))}
                </div>
            </SectionContainer >
        </>
    );
};
