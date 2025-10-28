import "./SalaryStats.css"
export default function SalaryStats(){

    return(<>
    
    <div className="TitleText_SS">
        Salary Stats
    </div>

    <div className="SalaryStats">
        <div className="SalaryText">
            This is the about us section which talks a little about how cool the department is. May provide a link too, but everything other than plain text is optional. 
Also please check the font style if it is okay or not.
        </div>
        <div className="EllipseContainer">
            <img src="/assets/graph.svg" className="EllipseSvg"></img>
        </div>
        
        
    </div>
    
    
    </>);
}