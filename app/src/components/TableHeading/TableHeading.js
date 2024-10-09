import PropTypes from "prop-types";

    function TableHeading({tableCellName}){
        return (
            <thead>
                <tr>
                    {tableCellName.map((cellName, index)=><td key={index}>{cellName}</td>)}
                </tr>
            </thead>
        )
    }

    TableHeading.propTypes ={
        tableCellName: PropTypes.array.isRequired,
    }

    export default TableHeading;