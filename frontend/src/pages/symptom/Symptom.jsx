import React from 'react'

export default function Symptom() {


  
  return (
    <div>
      <form action="">
            <h1 className="text-center">Symptoms</h1>
            <div className="form-">
                {/* <label htmlFor="task">Enter task</label> */}
                <input className="form-control" type="text" name="symptom" placeholder='What Symptoms Do You Have...' />
                <input type="submit" value="Submit" className='btn btn-outline-primary w-100 mt-3' />
            </div>
        </form>
    </div>
  )
}
