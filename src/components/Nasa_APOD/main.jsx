import { useState, useEffect } from "react";

export function ApodMain() {
    const [data, setdata] = useState({});

    useEffect(() => {
        fetch(
            "https://api.nasa.gov/planetary/apod?api_key=sFimMAPDOB1c1cTe28K201pBecOePJ68qgFY5N4c"
        )
            .then((response) => response.json())
            .then((obj) => {
                setdata(obj);
            });
    }, []);

    return (
        <main className="container-fluid mt-4">
            <div className="row">
                <div className="col-12 col-lg-5 m-auto">
                    <h3 className="text-center">{data.title}</h3>
                    <p className="fs-5 text-justify text-center">
                        <b>Explanation:</b> <br />
                        {data.explanation}
                    </p>
                    
                    <p className="fs-6"> <span className="fw-bold fs-5"> Date: </span> {data.date}</p>
                </div>
                <div className="col-12 col-lg-5 m-auto">
                    <a href={data.hdurl} target="_blank" className="ms-3 me-3">
                        <img
                            src={data.url}
                            height={400}
                            className="rounded shadow-lg "
                        />
                    </a>
                </div>
            </div>
        </main>
    );
}
