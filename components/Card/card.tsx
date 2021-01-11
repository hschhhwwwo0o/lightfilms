
import Link from "next/link"

interface ICardProps {

   HREF: string
   AS: string

   img: string
   img2?: string
   h3: string
   h6top: string
   h6bot: string
   type: "single" | "double"
}

const Card: React.FC<ICardProps> = (props) => {
    return <article>
        <Link href={props.HREF} as = {props.AS}>
            <a 
                className = { 
                    props.type === "single" ?
                    "post__preview_single" :
                    "post__preview_double"
                }
            >
                <div className = "img">
                    <img src={props.img} alt="image"/>
                    <img src={props.img2} alt="image"/>
                </div>
                <div className = "tags">
                    <h6 className = "top">{ props.h6top }</h6>
                    <h3>{ props.h3 }</h3>
                    <h6>{ props.h6bot }</h6>
                </div>
            </a>
        </Link>
    </article>
}

export default Card;