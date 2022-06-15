import "./File.css";
import Data from "./Data";
import New from "./New";


function Sec2pg1(props) {
    console.log(props)
    return ( 
        <div id="Sec2pg1row">
            <br></br>
                <Data {...props} />
                <New/>
                </div>
     );
}

export default Sec2pg1;