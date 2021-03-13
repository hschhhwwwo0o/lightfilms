interface IChooserProps {
    h1?: string
    children?: any
}

const Chooser: React.FC<IChooserProps> = ({ h1, children }) => {
    return <>
        <section id="header-choose">
            <h1>{ h1 }</h1>
            <div id="chooser">
                { children }
            </div>
        </section>
    </>
}

export default Chooser;