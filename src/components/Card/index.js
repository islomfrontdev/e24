import { Link } from "react-router-dom";
import CardWrapper from "./CardWrapper";

const Card = ({ }) => {
    return (<CardWrapper className="box">
        <div className="img">
            <img className="w-100" src="https://media.express24.uz/r/1124/970/upload/iblock/79c/79cc84398235e23515ecd0ff823c37b9.jpg" alt="" />
            <div className="img-overlay">
                <Link to='korzina'>
                <button className="btn bg-yellow px-2">
                    Добавить
                </button>
                </Link>
            </div>
        </div>
        <div className="bottom p-3 bg-white">
            <h5 className="">Moscow pizza</h5>
            <p className="text-muted">Ингридиенты, грибы, сыр, горчица, помидоры.</p>
            <p>55,000 сум</p>
        </div>
    </CardWrapper>)
}

export default Card;