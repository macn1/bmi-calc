import "./App.css";

import FORM from "./components/Form";

import Bmiscore from "./components/Bmiscore";
import Bmillist from "./components/Bmillist";
import { useState } from 'react';

function App() {
  
  const[changeWeight,setChangeWeight]=useState({weight:"",type:""})
  const [bmi,setBmi]=useState("00")
  const [bmitype ,setBmitype]=useState("not-calculated")
  const [bmiRange, setBmiRnge] = useState({
    underWeight :{low:""},
    normal:{low:"",high:""},
    overWeight:{low:"",high:""},
    obesessityClass1:{low:"",high:""},
    obesessityClass2:{low:"",high:""},
    obesessityClass3:{low:"",high:""},

  }
  
  )

  const onFormSub = (w, h) => {
    let b = calcBmi(w,h)
    setBmi(b)
   let bType= weightType(b)
   setBmitype(bType)
   const range = {
    underWeight:{low:calWeight(18.5,h)},
    normal:{low:calWeight(18.5,h),high:calWeight(24.9,h)},
    overWeight:{low:calWeight(25,h),high:calWeight(29.9,h)},
    obesessityClass1:{low:calWeight(30,h),high:calWeight(34.9,h)},
    obesessityClass2:{low:calWeight(35,h),high:calWeight(39.9,h)},
    obesessityClass3:{high:calWeight(40,h)},
   }
   setBmiRnge(range)
   setChangeWeight(weightChange(b,w,range))
  };


  const calcBmi = (w,h)=>{
    return ((w/h*h)).toFixed(2)
  }

  const calWeight = (b,h) =>(b*h*h).toFixed(2)

  const weightChange = (b,w,range) =>{
    let changeObj ;
    if (b>24.9) {

      changeObj ={
        weight:(w-range.normal.high).toFixed(2),
        type:"positve"
      };
      return changeObj;
      
    } else if (b<18.5) {
      changeObj= {
        weight:(range.normal.low-w).toFixed(2),
        type:"negative"
      }
      return changeObj
    }else  {

      changeObj ={weight:0,type:"normal"}
      return changeObj

    }

  }
  const weightType =(bmi)=>{
    if (bmi<18.5) {
      return  "under-weight";
      
    } else if (18.5<bmi && bmi<24.9){
      return  "normal";

    } else if (24.9<bmi && bmi<29.9){
      return  "over-weight";
    }
    else if (29.9<bmi && bmi<34.9){
      return  "obsesity class1"
    }else if (34.9<bmi && bmi<39.9){
      return  "obesity class2";
    }else if (bmi>39.9){
      return  "obesity class2";
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <FORM getData={onFormSub} />
        </div>
        <div className="row jusify-content-center mt-5">
          <div className="col-12 col-sm-6 mb-5">
            <Bmiscore  bmiScore={bmi} bmiType= {bmitype}  changeWeight ={changeWeight}/>
          </div>

          <div className="col-12 col-sm-6 ">
            <Bmillist range={bmiRange} bmi={bmi}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
