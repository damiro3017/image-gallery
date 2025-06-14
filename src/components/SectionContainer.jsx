export const SectionContainer = ({ children, ...props }) => {
    return (
        <section
            {...props}
            className={`max-w-6xl mx-auto py-10 ${props.className}`}
        >
            {children}
        </section>
    )
}
