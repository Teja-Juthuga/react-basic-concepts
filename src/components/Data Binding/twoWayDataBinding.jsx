import { useState } from "react";

export function TwoWayDataBinding(){

    const [product , setProduct] = useState({name: "Vivo Y 51", price : 19000, city : "Kakinada", stock : true});

    function handleProductName(event){
        setProduct({
            name : event.target.value,
        })
    }
    function update(){
        handleProductName();
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="card col-5 m-3 p-3 shadow-lg">
                    <h1 className="text-center">Stock Data</h1>
                    <dl>
                        <dt> Product Name: </dt>
                        <dd> <input type="text" className="form-control" value={product.name} /></dd>
                        <dt> Product Price: </dt>
                        <dd> <input type="number" className="form-control"value={product.price}/></dd>
                        <dt> Available Cities </dt>
                        <dd> 
                            <select className="form-select" value={product.city}>
                                <option> Select City </option>
                                <option> Hyderabad </option>
                                <option> Surat </option>
                                <option> Kakinada </option>
                                <option> Delhi </option>
                            </select>
                        </dd>
                        <dt> Stock Available </dt>
                        <dd className="form-switch"> <input type="checkbox" className="form-check-input" checked={product.stock}/> <label> {(product.stock)?"Available":" Out of Stock " }</label></dd>
                    </dl>
                    <button className="btn btn-primary" onClick={update}> Update </button>
                </div>
                <div className="card col-6 m-3 p-3 shadow-lg">
                    <h1 className="text-center"> Stock Details </h1>
                    <p className="fs-4"> Product Name: <span> { product.name }</span></p>
                    <p className="fs-4"> Product Price: <span> { product.price }</span></p>
                    <p className="fs-4"> City : <span> { product.city }</span></p>
                    <p className="fs-4"> Stock : <span> { (product.stock)?"Available":" Out of Stock " }</span></p>
                </div>
            </div>
        </div>
    )
}