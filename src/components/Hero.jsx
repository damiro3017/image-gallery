import { useEffect, useState } from 'react';
import { SectionContainer } from "./SectionContainer";

export const Hero = ({ searchTerm }) => {
    const [images, setImages] = useState([]);
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        if (!searchTerm) return;

        const fetchImages = async () => {
            try {
                const res = await fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchTerm}&per_page=20`);
                const data = await res.json();
                setImages(data.results);
                setHasSearched(true)
            } catch (error) {
                console.error('Error al cargar imágenes:', error);
            }
        };

        fetchImages();
    }, [searchTerm]);

    return (
        <div className='min-h-screen 
        bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#374151] via-[#f43f5e] to-[#fb923c]'>
            <SectionContainer className="pt-24">

                <h2 className="text-3xl font-bold text-center mb-6 text-white/90">
                    {hasSearched && searchTerm.trim()
                        ? `Fotos de ${searchTerm}`
                        : "Busca un término"}
                </h2>

                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {images.map((img) => (
                        <img
                            key={img.id}
                            src={img.urls.small}
                            alt={img.alt_description || 'Imagen'}
                            className="rounded-lg shadow-lg"
                        />
                    ))}
                </div>
            </SectionContainer>
        </div>
    );
};
