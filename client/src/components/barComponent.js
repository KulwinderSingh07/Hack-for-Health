import "../CSS/barComponent.css"
const BarComponent = ({data}) => {
    const getPercentage=(data)=>{
        let min_val=data.lower_limit
        let max_val=data.upper_limit
        let val=data.result
        if(val>data.upper_limit){
            val=val%data.upper_limit
        }else{
            val=val
        }
        let percentage=((val-min_val)/(max_val-min_val))*100
        return percentage.toFixed(2)
    }
    return (
        <div className="barWrapper">
            <div className="barDetails">
            <h4>{data.vitalName}</h4>
            <p>{data.result}</p>
            </div>
        <div className="barContainer">
            <div className="barValue" style={{width:`${getPercentage(data)}%`}} ></div>
        </div>
        </div> 
     );
}
 
export default BarComponent;