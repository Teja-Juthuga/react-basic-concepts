export function Header(){
    return(
        <header className="d-flex justify-content-around text-white p-4">
            <div className="d-flex">
                <p className="me-3 p-3"> ABOUT US </p>
                <p className="me-3 p-3"> MENU </p>
                <p className="me-3 p-3"> RESERVATION </p>
            </div>
            <div>
                <h2> Touche </h2>
            </div>
            <div className="d-flex">
                <p className="me-3 p-3"> NEWS & EVENTS </p>
                <p className="me-3 p-3"> GALLERY </p>
                <p className="me-3 p-3"> CONTACT </p>
            </div>
        </header>
    );
}