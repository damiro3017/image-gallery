export const SectionContainer = ({ children, ...props }) => {
    return (
        <section
            {...props}
            className={`max-w-6xl mx-auto py-10 px-4 ${props.className}`}
        >
            {children}
        </section>
    )
}
