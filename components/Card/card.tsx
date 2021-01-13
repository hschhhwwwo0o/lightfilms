
import Link from "next/link";
import Image from "next/image";

interface ICardProps {

   HREF: string
   AS: string
   ALT?: string

   img: string
   img2?: string
   h3: string
   h6top: string
   h6bot: string
   type: "single" | "double"
}

const IMG = (props) => {
    return (
        <>
            <div className="res" style = {{ position: "relative" }} >
                <Image src={props.img} alt={props.ALT} layout = "fill" quality = {70} />
            </div>
            <div className="res" style = {{ position: "relative" }}>
                <Image src={props.type === "double" ? props.img2 : props.img} alt={props.ALT} layout = "fill" quality = {70}/>
            </div>
        </>
    )
}

const IMG2 = (props) => {
    return (
        <>
            <div className="res" style = {{ position: "relative" }} >
                <img src={props.img} alt={props.ALT} />
            </div>
            <div className="res" style = {{ position: "relative" }}>
                <img src={props.type === "double" ? props.img2 : props.img} alt={props.ALT} />
            </div>
        </>
    )
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
                <div className = "img" >
                    <div className="res" style = {{ position: "relative" }} >
                    <Image src={props.img} alt={props.ALT} layout = "fill" unoptimized />
                </div>
                <div className="res" style = {{ position: "relative" }}>
                    <Image src={props.type === "double" ? props.img2 : props.img} alt={props.ALT} layout = "fill" unoptimized />
                </div>
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