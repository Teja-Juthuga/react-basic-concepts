import "./cAndRIndex.css";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

export function CafeAndRestaurant() {
    return (
        <div className="container-fluid bg-container p-0">
            <div className="container-fluid shade">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    );
}
