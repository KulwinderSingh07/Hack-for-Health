import "../CSS/DashBoardPage.css"
const MainDashBoardComponent = () => {
    return ( 
        <div className="DashBoardWrapper">
            <div className="DashBoardHeader">
                <h3>DashBoard</h3>
                <div>ProfilePic</div>
            </div>
            <div className="OperationCardsWrapper">
                <div className="Card">Hello</div>
                <div className="Card">Hello</div>
                <div className="Card">Hello</div>
            </div>
            <div className="GraphWrapper">
                <div>Graph</div>
            </div>
            <div className="BottomGraphs">
                <div className="Card">Interactive Card</div>
                <div className="Card">Graph card</div>
            </div>
        </div>
     );
}
 
export default MainDashBoardComponent;