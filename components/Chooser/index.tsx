interface IChooserProps {
    h1?: string
    children?: any
}

const Chooser: React.FC<IChooserProps> = ({ h1, children }) => {
    return <>
        <section id="selection">
            <h1>{ h1 }</h1>
            <div id="selection__body">
                { children }
            </div>
        </section>
    </>
}

export default Chooser;