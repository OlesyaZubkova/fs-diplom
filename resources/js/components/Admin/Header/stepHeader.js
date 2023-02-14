export default function StepHeader(props)
{
    const {text} = props;

    return (
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened">
                <h2 className="conf-step__title">{props.title}</h2>
            </header>
        </section>
    )
}
