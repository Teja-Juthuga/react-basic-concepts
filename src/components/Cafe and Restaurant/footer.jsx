export function Footer() {
    return (
        <footer className="text-white d-flex flex-row justify-content-between mt-5 pt-5" >
            <div className="ms-5 fs-2 ">
                <span className="bi bi-twitter me-4"></span>
                <span className="bi bi-facebook me-4"></span>
                <span className="bi bi-instagram me-4"></span>
            </div>
            <div className="d-flex me-5">
                <span className="fs-2 bi bi-geo-alt-fill text-warning me-3"></span>
                <p className="fs-6 mt-3 ">
                    {" "}
                    1234 Dining Str., Los Angeles, CA 12345-0000{" "}
                </p>
            </div>
        </footer>
    );
}
