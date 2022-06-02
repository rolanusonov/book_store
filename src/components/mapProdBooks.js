import React from 'react';
import {Link} from "react-router-dom";

const MapProdBooks = ({details}) => {
    return (
        <div>
            <div className="recCard">
                <div className="basket-card      ">
                    <Link className=""  to={`/details/${details.id}`}>
                        <div className="school">
                            <img className="imgSlider" src={details.image} alt=""/>
                        </div>
                        <div className="schoolH1">
                            <h1 style={{
                                height:"90px",
                                overflow:"hidden"
                            }}>{details.title}</h1>

                            <h1 className="schoolPrice" style={{fontSize: "24px", color: "#FF005C"}}>{details.price}</h1>
                        </div>
                    </Link>
                    <Link to={`/details/${details.id}`}>
                        <button
                            className="w-36 ert   h-9 rounded-md text-white text-lg mt-5">

                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MapProdBooks;