import React from 'react'

export default function PokeDisplay({ pokeInfo }) {
    return (
        <div className='row mt-5'>
            <div className="col-12 col-lg-6 offset-lg-3">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={pokeInfo.sprites?.front_default} className="img-fluid" alt={pokeInfo.name} />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{pokeInfo.name}</h5>
                            <ul className='list-group list-group-flush'>
                                <li className="list-group-item">Height: <strong>{pokeInfo.height}</strong></li>
                                <li className="list-group-item">Weight: <strong>{pokeInfo.weight}</strong></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}