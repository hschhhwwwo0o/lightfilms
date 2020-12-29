
interface CardProps {
    width?: string
    height?: string
}

const Card: React.FC<CardProps> = (props) => {
    return <>
        <div className = "card">
            <div className="imgs">
                <div></div>
                <div></div>
            </div>
            <div className="tags">
                <h6></h6>
                <h3></h3>
                <h6></h6>
            </div>
        </div>
        <style jsx global>{`
            
        `}</style>
    </>
}

export default Card;