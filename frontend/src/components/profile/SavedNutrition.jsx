import React from 'react';

export default function NutritionDisplay() {
  return (
    <div className="row">
      <div className="col-md-4">
        <img className="card-img-top" src="..." alt="Card image cap" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
