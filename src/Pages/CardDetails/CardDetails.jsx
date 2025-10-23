import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {

    const { id } = useParams();
    const cardId = parseInt(id);

    const data = useLoaderData();
    const singleCard = data.find(card => card.id === cardId);

    const { image } = singleCard


    return (
        <>
            <img src={image} alt="" />
        </>
    );
};

export default CardDetails;






























