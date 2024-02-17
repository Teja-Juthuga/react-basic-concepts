export function DataGridTable(props) {
    return (
        <div className="container-fluid">
            <table className="table table-hover caption-top">
                <caption> {props.caption}</caption>
                <thead>
                    <tr>
                        {props.tableFeilds.map((eachFeild) => (
                            <th key={eachFeild}> {eachFeild}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((eachDoc) => (
                        <tr>
                            {Object.keys(eachDoc).map((feild) => (
                                <td key={feild}>{eachDoc[feild]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
