export function ApodHeader(){
    return(
        <header className="d-flex justify-content-between">
            <img src="nasaLogo.png" alt="Nasa Logo" className="mt-3 ms-5 " height={90} />
            <div className="center-content">
                <h2 className="mt-3"> Astriod Picture of Day</h2>
            </div>
            <div className="center-content fs-1 me-5">
                <span className="bi bi-rocket"></span>
            </div>
        </header>
    )
}