export function ArrayBinding() {
    var categories = ["All", "Electronics", "Footwear", "Fashion"];
    var mobile = {
        title: "Realme C53 (Champion Black, 64 GB)",
        price: 10999,
        image: "Capture.png",
        rating: { rate: 4.5, count: 12644, reviews: 575 },
        features: [
            "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
            "17.12 cm (6.74 inch) HD Display",
            "108MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "T612 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
        ],
    };

    var mobiles = [
        {   
            id: 1,
            title: "Realme C53 (Champion Black, 64 GB)",
            price: 10999,
            image: "Capture.png",
            rating: { rate: 4.5, count: 12644, reviews: 575 },
            features: [
                "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                "17.12 cm (6.74 inch) HD Display",
                "108MP + 2MP | 8MP Front Camera",
                "5000 mAh Battery",
                "T612 Processor",
                "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
            ],
        },
        {
            id: 2,
            title: "Realme 11 Pro+ 5G (Sunrise Begie , 256 GB)",
            price: 27999,
            image: "Capture1.png",
            rating: { rate: 4.3, count: 18797, reviews: 2237 },
            features: [
                "realme 11 Pro+ 5G (Sunrise Beige, 256 GB)",
                "4.318,797 Ratings & 2,237 Reviews",
                "8 GB RAM | 256 GB ROM",
                "17.02 cm (6.7 inch) Full HD+ Display",
                "200MP (OIS) + 8MP + 2MP | 32MP Front Camera",
                "5000 mAh Battery",
                "Dimensity 7050 Processor",
                "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories",
            ],
        },
        {
            id: 3,
            title: "realme 10 (Clash White, 64 GB)",
            price: 11499,
            image: "Capture2.png",
            rating: { rate: 4.2, count: 17953, reviews: 1575 },
            features: [
                "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
                "16.26 cm (6.4 inch) Full HD+ Display",
                "50MP + 2MP | 16MP Front Camera",
                "5000 mAh Battery",
                "Mediatek Helio G99 Octa Core Processor",
                "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            ],
        },
    ];
    return (
        /* <select className="form m-5">
            {
                categories.map(category => 
                    <>
                        <option> { category} </option>
                    </>    
                )
            }
        </select>
        */
        /*
        <div className="container-fluid">
            <div className="row card m-2 p-2 d-flex flex-row">
                <div className="col-3">
                    <img src={mobile.image} />
                </div>
                <div className="col-6">
                    <h2 className="text-primary"> {mobile.title} </h2>
                    <div className="d-flex">
                        <p className="bg-success text-light p-2 d-inline">
                            {mobile.rating.rate}{" "}
                            <span className="bi bi-star-fill"> </span>
                        </p>
                        <p className="p-2 fs-6">
                            {" "}
                            {mobile.rating.count} Ratings &{" "}
                            {mobile.rating.reviews} Reviews {}
                        </p>
                    </div>
                    <ul>
                        {mobile.features.map((feature) => (
                            <li> {feature} </li>
                        ))}
                    </ul>
                </div>
                <div className="col-3">
                    <h1> &#8377; {mobile.price} </h1>
                </div>
            </div>
        </div>
        */
        <div className="container-fluid">
            {mobiles.map((mobile) => 
                <div className="row card m-2 p-2 d-flex flex-row" key={mobile.id}>
                    <div className="col-lg-3">
                        <img src={mobile.image} />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="text-primary"> {mobile.title} </h2>
                        <div className="d-flex">
                            <p className="bg-success text-light p-2 d-inline rounded rounded-2">
                                {mobile.rating.rate}{" "}
                                <span className="bi bi-star-fill"> </span>
                            </p>
                            <p className="p-2 fs-6">
                                {mobile.rating.count} Ratings &{" "}
                                {mobile.rating.reviews} Reviews {}
                            </p>
                        </div>
                        <ul>
                            {mobile.features.map((feature) => (
                                <li> {feature} </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
                        <h1> &#8377; {mobile.price} </h1>
                        <button className="btn btn-success w-100"> <span className="bi bi-cart4"></span> Buy Now </button>
                    </div>
                </div>
            )
        }
        </div>
    );
}
