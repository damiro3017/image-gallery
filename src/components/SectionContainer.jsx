export const SectionContainer = ({ children, ...props }) => {
    return (
        <section
            {...props}
            className={`max-w-7xl my-10 mx-4 xl:mx-auto ${props.className}`}>
            {children}
        </section>
    )
}
