import React, {useState} from 'react';
import "../css/calculator.css";

const Calculator = () => {
  /* eslint no-eval: 0 */

    const [input, setInput] = useState("");
    const buttons = [];
    [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].forEach((item) => {
  
        buttons.push(    
            <button onClick={(e) => { setInput(input + e.target.value); }} value={item} key={item} > 
                {" "} {item} 
            </button>
        );
    });

    buttons.push(    
        <button className="clearButton" onClick={() => setInput("")} value=""> AC  </button>
    );

  return (
    <div className="contain">
        <div className="show-result">{input}</div>

        <div className="calc">
            <div className="digitsButton flex">{buttons}</div>
            
        </div>
    </div>
  );
}
 
export default Calculator;