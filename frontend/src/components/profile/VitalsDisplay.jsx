import React from 'react'

export default function VitalsDisplay() {
  return (
    <div>
      <div className="col-12 col-md-9 p-4 m-auto">
        <div className="card p-4 m-3">
            <form className="row g-3">
            <h2>User Information</h2>
            <div className="col-md-4">
                <label>First Name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Last Name</label>
                <input type="email" className="form-control"/>
            </div>
            <div className="col-2">
                <label>Age</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-2">
                <label>Weight</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-2">
                <label>Height</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-2">
                <label>Systolic</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-2">
                <label>Diastolic</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-4">
                <label>Activity level:</label>
                <select name='activity' required>
                <option value=''>Please select</option>
                <option value='Sedentary'>Sedentary</option>
                <option value='Moderate'>Moderate</option>
                <option value='Active'>Active</option>
                </select>
            </div>
            

            <div className="col-md-12">
                <button type="submit" className="btn w-100 mt-2">Update Information</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}
