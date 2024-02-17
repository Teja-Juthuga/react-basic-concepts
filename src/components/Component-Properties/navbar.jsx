export function Navbar(props) {
    return (
        <div className="container-fluid p-0 mt-3 ">
            <div className={`${props.theme} ${props.color} d-flex justify-content-between align-items-center p-2`}>
                <div>
                    <h3> {props.brandName} </h3>
                </div>
                <div>
                    {
                        props.options.map(option => 
                            <a href="#" style={{textDecoration:"none", color:"white",}} className="ms-2" key={option}> {option}</a>    
                        )
                    }
                </div>
                <div>
                    <span className="bi bi-search ms-2"></span>
                    <span className="bi bi-heart text-danger ms-2"></span>
                    <span className="bi bi-cart4 ms-2"></span>
                </div>
            </div>
        </div>
    );
    {/*             
            <Navbar brandName="Shopper." theme="bg-dark" color="text-white" options={["Home", "Products", "Wishlist", "About" ]}/>
            <Navbar brandName="Cafe and Restarunt" theme="bg-warning" color="text-white" options={["Home", 'Menu', "Today's Specials", "Contact"]}/>
*/}
}
