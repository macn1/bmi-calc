import React from 'react'

function Bmiscore({bmiScore,bmiType,changeWeight}) {
  console.log(changeWeight);
  return (
    <div className='text-center shadow rounded p-4'>
      <div>Your BMI Score</div>
      <div className='row justify-content-md-center'>
        <div className='p-3 my-2 alert fs-1 alert-primary col-sm-4'>{bmiScore}</div>

      </div>
      <div className='fs-3 fw-bold text-primary'>{bmiType}</div>
      {changeWeight.type==='positive' && (
        <div className='fs-4'>"you need to loose <span className='fw-bold'>{changeWeight.weight}kg"</span></div>
      )}
       {changeWeight.type==='negative' && (
        <div className='fs-4'>"you need to gain <span className='fw-bold'>{changeWeight.weight}kg"</span></div>
      )}
       {changeWeight.type==='normal' && (
        <div className='fs-4'>"your weight is normal , good  for you" </div>
      )}
    </div>
  )
}

export default Bmiscore
