import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {api} from "../http/api";
 import mapProdBooks from "./mapProdBooks";

const ProdBooks = () => {

    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/books/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])
    return (
        <div>
            <div className="grid catalogSET sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  pt-[50px] ">
                {
                    catalog.map(el => (
                        <mapProdBooks el={el} key={el.id}/>
                    ))
                }
            </div>
            
        </div>
    );
};

export default ProdBooks;