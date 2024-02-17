import "./index.css";
import { NetflixHeader } from "./header";
import { NetflixMain } from "./main.jsx";
import { NetflixSearch } from "./search";

export function Netflix() {
    return (
        <div className="container-fluid bg-container p-0">
            <div className="container-fluid shade m-0">
                <NetflixHeader />
                <div className="main-container">
                    <NetflixMain />
                    <NetflixSearch />
                </div>
            </div>
        </div>
    );
}
