import { CloseIcon } from "../assets/icons/Icons";

export const ImageModal = ({ image, onClose }) => {
    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains('modal-background')) {
            onClose();
        }
    };

    return (
        <div
            className="modal-background fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={handleBackgroundClick}
        >
            <div className="bg-white py-4 px-4 rounded relative shadow-lg mx-auto">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-700 hover:text-black text-xl font-bold"
                >
                    <CloseIcon className="size-6" />
                </button>

                <img
                    src={image.urls?.regular}
                    alt={image.alt_description || 'Imagen'}
                    className="max-h-[80vh] max-w-[80vw] rounded my-6"
                />

                <div className="text-center">
                    <a
                        href={image.links?.download}
                        download
                        className="bg-gray-600 text-white px-4 py-2  rounded hover:bg-gray-700 transition"
                    >
                        Descargar
                    </a>
                </div>
            </div>
        </div>
    );
};
