import PropTypes from "prop-types";
import warning from "../assets/warning.png"
import loading from "../assets/loading.png"
import success from "../assets/success.png"
function TransactionStatus(){
    let status = "loading"
    return(
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div>
               {status==="error" && <StatusComponent
                statusIcon={warning}
                statusMessage="Transaction was not completed"
                />}
                {status === "loading" && <StatusComponent
                statusIcon={loading}
                statusMessage="Please wait as we initiate the transaction"
                spinIcon = {true}
                />}
                {status === "success" && <StatusComponent
                statusIcon={success}
                statusMessage="Your request was successfull. "
                />}
            </div>
        </div>
    )
}

export default TransactionStatus;

function StatusComponent({statusIcon, statusMessage, spinIcon=false}){
    return(
        <div className="bg-white px-20 py-4 rounded-xl shadow-2xl shadow-green-300">
            <div className={`flex justify-center items-center `}>
                <img className={`${spinIcon && "animate-spin"} w-56 h-56 `} src={statusIcon} alt={statusMessage} />
            </div>
            <div>
                <h1 className="font-light text-2xl text-center my-8">{statusMessage}</h1>
            </div>
        </div>
    )
}

StatusComponent.propTypes ={
    statusIcon:PropTypes.string.isRequired,
    statusMessage:PropTypes.string.isRequired,
    spinIcon:PropTypes.bool.isRequired
}