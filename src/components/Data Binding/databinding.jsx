export function DataBinding(){
    var menu = [
        {
            "category" : "Electronics",
            "products" : ["TV", "Mobile", "Watch"]
        },
        {
            "category" : "Foot Wear",
            "products" : ["Sneakers", "Casuals", "Daily Wear"]
        }
    ]
    return(
        <ol>
            {
                menu.map(item => 
                    <>
                    <li> 
                        {
                            item.category
                        }
                    </li>
                    <ul>
                        {
                            item.products.map(product => 
                                <li> { product }</li>    
                            )
                        }
                    </ul>    
                    </>
                )
            }
        </ol>
    )
}