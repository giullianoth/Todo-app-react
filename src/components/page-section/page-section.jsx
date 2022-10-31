const PageSection = (props) => {
    return (
        <section className={props.className}>
            {props.children}
        </section>
    );
}

export default PageSection;