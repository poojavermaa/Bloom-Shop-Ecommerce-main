import React from "react";
import { useNavigate } from "react-router-dom";

export default function Itemdiv(props) {

    const navigate = useNavigate();

    return (
        <div className="Itemdiv">
            <div className="card" onClick={() => navigate(`/single-product/${props.id}`)}>
                <img src={props.img} alt="" />
                <p>{props.title}</p>
                <p>&#8377;{props.price * 40}/-</p>
            </div>
        </div>
    )
};