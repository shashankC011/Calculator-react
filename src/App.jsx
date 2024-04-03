import "./styling.css" 
import { useState } from "react";
function App() {
  const[currentOpr,setCurrentOpr] = useState();
  const[prevOpr,setPrevOpr]=useState();
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{prevOpr}</div>
        <div className="current-operand">{currentOpr}</div>
      </div>
      <button className="span-two" onClick={(()=>{
        setCurrentOpr();
        setPrevOpr();
      })}>Ac</button>

      <button onClick={()=>{
        setCurrentOpr((existing)=>{
          if(!existing){
            return;
          }
          else if(existing >= 0 && existing <= 9){
            return;
          }
          else{
          let numberString = existing.toString();
          let newNumberString = numberString.slice(0,-1);
          let newNumber = parseFloat(newNumberString)
          return newNumber;
          }
        })
      }}>Del</button>

      <button onClick={()=>{
        if(currentOpr && prevOpr){
        let prevOprString = prevOpr.slice(0,-1);
        let prevOprNum = parseFloat(prevOprString);
        let oprString = prevOpr.slice(-1);
        let currentOprNum = parseFloat(currentOpr)
        if( oprString == '+'){
          setPrevOpr(prevOprNum+currentOprNum + "÷");
          setCurrentOpr();
        }
        else if( oprString == '-'){
          setPrevOpr(prevOprNum-currentOprNum + "÷");
          setCurrentOpr();
        }
        else if( oprString == '*'){
          setPrevOpr(prevOprNum*currentOprNum + "÷");
          setCurrentOpr();
        }
        else if( oprString == '÷'){
          setPrevOpr(prevOprNum/currentOprNum + "÷");
          setCurrentOpr();
        }
        }
        else if(currentOpr){
        setPrevOpr(currentOpr + "÷");
        }
        else if(prevOpr && !currentOpr){
          let prevOprString = prevOpr.slice(0,-1);
          setPrevOpr(prevOprString + '+')          
        }
        setCurrentOpr();
      }}>÷</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "1";
          }
          else {
            return existing + "1"
          }
        }
        )
      }}>1</button>
    
      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "2";
          }
          else {
            return existing + "2"
          }
        }
        )
      }}>2</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "3";     
          }
          else {
            return existing + "3"
          }
        }
        )
      }}>3</button>

      <button onClick={()=>{
        if(currentOpr && prevOpr){
          let prevOprString = prevOpr.slice(0,-1);
          let prevOprNum = parseFloat(prevOprString);
          let oprString = prevOpr.slice(-1);
          let currentOprNum = parseFloat(currentOpr)
          if( oprString == '+'){
            setPrevOpr(prevOprNum+currentOprNum + "*");
            setCurrentOpr();
          }
          else if( oprString == '-'){
            setPrevOpr(prevOprNum-currentOprNum + "*");
            setCurrentOpr();
          }
          else if( oprString == '*'){
            setPrevOpr(prevOprNum*currentOprNum + "*");
            setCurrentOpr();
          }
          else if( oprString == '÷'){
            setPrevOpr(prevOprNum/currentOprNum + "*");
            setCurrentOpr();
          }
        }
        else if(currentOpr){
        setPrevOpr(currentOpr + "*");
        }
        else if(prevOpr && !currentOpr){
          let prevOprString = prevOpr.slice(0,-1);
          setPrevOpr(prevOprString + '*')          
        }
        setCurrentOpr();
      }} >*</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "4";
          }
          else {
            return existing + "4"
          }
        }
        )
      }}>4</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "5";
          }
          else {
            return existing + "5"
          }
        }
        )
      }}>5</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "6";
          }
          else {
            return existing + "6"
          }
        }
        )
      }}>6</button>

      <button onClick={()=>{
        if(currentOpr && prevOpr){
          let prevOprString = prevOpr.slice(0,-1);
          let prevOprNum = parseFloat(prevOprString);
          let oprString = prevOpr.slice(-1);
          let currentOprNum = parseFloat(currentOpr)
          if( oprString == '+'){
            setPrevOpr(prevOprNum+currentOprNum + "+");
            setCurrentOpr();
          }
          else if( oprString == '-'){
            setPrevOpr(prevOprNum-currentOprNum + "+");
            setCurrentOpr();
          }
          else if( oprString == '*'){
            setPrevOpr(prevOprNum*currentOprNum + "+");
            setCurrentOpr();
          }
          else if( oprString == '÷'){
            setPrevOpr(prevOprNum/currentOprNum + "+");
            setCurrentOpr();
          }
        }
        else if(currentOpr){
        setPrevOpr(currentOpr + "+");
        }
        else if(prevOpr && !currentOpr){
          let prevOprString = prevOpr.slice(0,-1);
          setPrevOpr(prevOprString + '+')          
        }
        setCurrentOpr();
      }}>+</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "7";
          }
          else {
            return existing + "7"
          }
        }
        )
      }}>7</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "8";
          }
          else {
            return existing + "8"
          }
        }
        )
      }}>8</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "9";
          }
          else {
            return existing + "9"
          }
        }
        )
      }}>9</button>

      <button onClick={()=>{

       if(currentOpr && prevOpr ){
          if(currentOpr != '-'){
          let prevOprString = prevOpr.slice(0,-1);
          let prevOprNum = parseFloat(prevOprString);
          let oprString = prevOpr.slice(-1);
          let currentOprNum = parseFloat(currentOpr)
          if( oprString == '+'){
            setPrevOpr(prevOprNum+currentOprNum + "-");
            setCurrentOpr();
          }
          else if( oprString == '-'){
            setPrevOpr(prevOprNum-currentOprNum + "-");
            setCurrentOpr();
          }
          else if( oprString == '*'){
            setPrevOpr(prevOprNum*currentOprNum + "-");
            setCurrentOpr();
          }
          else if( oprString == '÷'){
            setPrevOpr(prevOprNum/currentOprNum + "-");
            setCurrentOpr();
          }
        }
        }
        // else if(prevOpr && !currentOpr){
        //   let prevOprString = prevOpr.slice(0,-1);
        //   setPrevOpr(prevOprString + '-')          
        // }
        else if(currentOpr){
          if(currentOpr != '-'){
          setPrevOpr(currentOpr+'-');
          setCurrentOpr();
          }
        }

        else if(!currentOpr){
          setCurrentOpr('-')
        }

      }}>-</button>

      <button onClick={()=>{
        if(currentOpr){
        if(currentOpr.includes('.')){
        }
        else{
          setCurrentOpr(existing=> existing + '.')
        }
      }
      else{
        setCurrentOpr(0+'.');
      }
      }}>.</button>

      <button onClick={()=>{
        setCurrentOpr(existing=>{
          if(!existing){
            return "0";
          }
          else {
            return existing + "0"
          }
        }
        )
      }}>0</button>

      <button className="span-two" onClick={()=>{
        if(prevOpr && currentOpr){
        let prevOprString = prevOpr.slice(0,-1);
        let prevOprNum = parseFloat(prevOprString);
        let oprString = prevOpr.slice(-1);
        let currentOprNum = parseFloat(currentOpr)
        if( oprString == '+'){
          setPrevOpr();
          setCurrentOpr(prevOprNum+currentOprNum);
        }
        else if( oprString == '-'){
          setPrevOpr();
          setCurrentOpr(prevOprNum-currentOprNum);
        }
        else if( oprString == '*'){
          setPrevOpr();
          setCurrentOpr(prevOprNum*currentOprNum);
        }
        else if( oprString == '÷'){
          setPrevOpr();
          setCurrentOpr(prevOprNum/currentOprNum);
        }
      }
      else if(prevOpr && !currentOpr){
        let prevOprString = prevOpr.slice(0,-1);
        setCurrentOpr(prevOprString);
        setPrevOpr();
      }
      }}>=</button>
    </div>
  );
}

export default App;
