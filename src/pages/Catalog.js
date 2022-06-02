import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import {useDispatch} from "react-redux";
import RecSliders from "../components/RecSliders";
import {api} from "../http/api";
import ProdBooks from "../components/ProdBooks";

const Catalog = () => {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/categories/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])

    return (
        <div className="container mx-auto" >
            {catalog.length === 0 ? (<div className="Loading">
                <div className="loading ">
                    <div className="lds-spinner">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>) :
            <div>
                <div className="grid catalogSET sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  pt-[50px] ">
                    {
                        catalog.map(el => (
                            <Card el={el} key={el.id}/>
                        ))
                    }
                </div>
                <RecSliders/>

            </div>

        }

        </div>
    );
};
export default Catalog;