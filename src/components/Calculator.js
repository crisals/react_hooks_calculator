import React, {useState} from 'react';
import "../css/calculator.css";

{/* 
    Constant that has the calculator logic, contains the action of the buttons and the html structure.
*/}  
const Calculator = () => {
  /* eslint no-eval: 0 */

    {/* 
        Constant containing the variable to be displayed on the calculator output screen.
    */} 
    const [input, setInput] = useState("");

    {/* 
        Constant containing the number buttons, the period sign, and the delete button.
    */} 
    const buttons = [];

    {/* 
        Arrangement with numbers and dot sign.
    */} 
    [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].forEach((item) => {
  
        buttons.push(    
            <button onClick={(e) => { setInput(input + e.target.value); }} value={item} key={item} > 
                {" "} {item} 
            </button>
        );
    });

    {/*
        Action that adds the delete button to the calculator buttons.
    */} 
    buttons.push(    
        <button className="clearButton" onClick={() => setInput("")} value=""> AC  </button>
    );

  return (
    
    // Html structure of the calculator with its buttons and actions.
    <div className="contain">
        <div className="show-result">{input}</div>

        <div className="calc">
            <div className="digitsButton flex">{buttons}</div>
            <div className="arithmetic subgrid">
                <button onClick={(e) => setInput(input + e.target.value)} value="+"> + </button>
    
                <button onClick={(e) => setInput(input + e.target.value)} value="-"> {" "} - {" "} </button>

                <button onClick={(e) => setInput(input + e.target.value)} value="*"> {" "} x </button>

                <button onClick={(e) => setInput(input + e.target.value)} value="/"> {" "} ÷ </button>
            </div>
            <div className="equals subgrid">
                <button className="equalButton operator" onClick={(e) => {
                if (String(eval(input)) !== 'undefined'){
                    setInput(
                        String(eval(input)).length > 3 &&
                        String(eval(input)).includes(".")
                        ? String(eval(input).toFixed(4))
                        : String(eval(input))
                    );
                }}} value="=" > = </button>
            </div>
        </div>
    </div>
  );
}
 
export default Calculator;