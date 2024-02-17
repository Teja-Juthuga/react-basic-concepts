import { useState } from "react";

export function UseStateCon() {
    const [getter, setter] = useState([1, "Ram"]);

    console.log(getter);
    return <div></div>;
}
