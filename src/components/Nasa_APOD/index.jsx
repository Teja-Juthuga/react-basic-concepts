import "./index_apod.css";
import { ApodHeader } from "./header";
import { ApodMain } from "./main";
import { ApodFooter } from "./footer";

export function APOD(){
    return(
        <div className="container-fluid bg">
            < ApodHeader />
            < ApodMain />
            < ApodFooter />
        </div>
    );
}