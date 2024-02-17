import "./index.css";
import { useCapcha } from "../../hooks/capcha.hook";

export function Login(){

    const capcha = useCapcha();
    return(
        <div className="container-fluid card-container">
            <div className="card p-4 shadow-lg">
                <div className="text-center m-2">
                    <h2> <span className="bi bi-person-fill"></span> User Login </h2>
                </div>
                <div className="m-2">
                    <label for="uname">  User Name </label>
                    <input type="text" id="uname" className="form-control"/>
                </div>
                <div className="m-2">
                    <label for="upassword"> Password </label>
                    <input type="password" id="upassword" className="form-control"/>
                </div>
                <div className="m-2">
                    <p> Verify Code </p>
                    <div> {capcha} </div>
                </div>
                <div className="m-2">
                    <button className="btn btn-primary form-control"> Login <span className="bi bi-arrow-right"></span></button>
                </div>
            </div>
        </div>
    );
}