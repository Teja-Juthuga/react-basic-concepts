export function NetflixSearch() {
    return (
        <div>
            <div>
                <h5 className="text-center text-white ">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </h5>
            </div>
            <div className="d-flex">
                <input
                    type="text"
                    placeholder="E-mail Address"
                    className="form form-control  me-2"
                />
                <button className="btn btn-danger me-2">
                    Get Started <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    );
}
