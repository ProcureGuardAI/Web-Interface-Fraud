import TableWithPagination from "../../../components/dashboard/table/TableWithPagination";


function VendorsList(){
    return(
        <div className="w-full flex justify-center">
        <div className="w-11/12">
            <TableWithPagination endpoint="http://localhost:3001/vendorsList" />
        </div>
        </div>
    )
}

export default VendorsList;