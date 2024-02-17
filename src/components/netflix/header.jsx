
export function NetflixHeader(){
    return(
        <header className="d-flex justify-content-around pt-5">
            <div> 
                <h2 className="text-danger"> NETFLIX </h2>
            </div>
            <div>
                <div className="input-group border border-0 "> 
                    <span className="bi bi-globe input-group-text"></span>
                    <select className="form-slect">
                        <option> English</option>
                    </select>
                    <button className="btn btn-danger ms-1"> Sign In </button>
                </div>
            </div>
        </header>
    )
}
