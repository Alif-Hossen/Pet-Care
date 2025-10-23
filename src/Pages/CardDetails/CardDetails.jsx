import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsPage from "../ServiceDetailsPage/ServiceDetailsPage";

const CardDetails = () => {



    const data = useLoaderData();
    const { id } = useParams();
    const [card, setCard] = useState({});
    console.log(data, id, card);


    useEffect(() => {
        const CardDetails = data.find((singleCard) => singleCard.id == id);
        setCard(CardDetails);
    }, [data, id])

    return (
        <div>
            <h2>emon hoy kno?</h2>
            <ServiceDetailsPage card={card} ></ServiceDetailsPage>
        </div>

    );
};

export default CardDetails;
