import { Navbar } from "./navbar";

import { DataGridTable } from "../DataGrid/DataGridComp";
import { useState } from "react";

export function PropsDemo() {
    const [empData, setEmpData] = useState([
        {
            s: 1,
            name: "Teja",
            des: "SoftWare Developer",
            Salary: "16LPA",
            loc: "Hyderabad",
        },
        {
            s: 2,
            name: "Raja Teja",
            des: "Testing Engineer",
            Salary: "18LPA",
            loc: "Hyderabad",
        },
        {
            s: 3,
            name: "Kala",
            des: "PHP Developer",
            Salary: "23LPA",
            loc: "Hyderabad",
        }
    ]);

    var data=[
        {
            name: "i Phone 15 pro",
            price: 150000,
            stock: "Available",
        },
    ]

    return (
        <div>
            <h1 className="my-3"> Product Grid </h1>
            <DataGridTable
                caption="Product Details"
                tableFeilds={["Name", "Price", "Stock"]}
               data = {data}
            />
            <h1> Emplyee Grid </h1>
            <DataGridTable
                caption="Emplyee Details"
                tableFeilds={[
                    "S.no",
                    "Name of The Employee",
                    "Designation",
                    "Salary",
                    "Location",
            ]}
                data = {empData}
            />
        </div>
    );
}
