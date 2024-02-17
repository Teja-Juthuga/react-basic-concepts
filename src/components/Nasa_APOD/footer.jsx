export function ApodFooter() {
    return (
        <footer className="bg-dark text-white position-stiky fixed-bottom center-content d-flex justify-content-evenly ">
            <div className="text-center">
                <a
                    href="https://www.linkedin.com/in/teja-juthuga/"
                    className="fs-4"
                    target="_blank"
                >
                    <span className="ms-3 bi bi-linkedin"></span>
                </a>
                <a
                    href="https://github.com/Teja-Juthuga"
                    className="fs-4"
                    target="_blank"
                >
                    <span className="ms-3 bi bi-github"></span>
                </a>
                <a
                    href="https://instagram.com/i_manikanta_mani?"
                    className="fs-4"
                    target="_blank"
                >
                    <span className="ms-3 bi bi-instagram"></span>
                </a>
            </div>
            <div>
                <p className="p-2 m-3 fs-6">
                    &copy; 2023, Teja Juthuga. All rights reserved.
                    Made with Love ❤️
                </p>
            </div>
        </footer>
    );
}
