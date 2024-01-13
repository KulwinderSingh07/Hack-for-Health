import "../CSS/barComponent.css"
const BarComponent = ({data}) => {
    const getPercentage=(data)=>{
        let min_val=data.min
        let max_val=data.max

        let percentage=((data.val-min_val)/(max_val-min_val))*100
        return percentage.toFixed(2)
    }
    return (
        <div className="barWrapper">
            <div className="barDetails">
            <h4>{data.heading}</h4>
            <p>{getPercentage(data)}%</p>
            </div>
        <div className="barContainer">
            <div className="barValue" style={{width:`${getPercentage(data)}%`}} ></div>
        </div>
        </div> 
     );
}
 
export default BarComponent;