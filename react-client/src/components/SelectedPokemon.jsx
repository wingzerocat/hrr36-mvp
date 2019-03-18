import React from 'react';

const SelectedPokemon = (props) => (
  <div key={props.poke.id}>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" value={props.poke.id} onClick={(e) => props.selectedPoke(e)}>
      { props.poke.name }
    </button>

    <div className={"modal fade " + props.target[0].type_1} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className={"modal-content "}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.target[0].id}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.target[0].name}

            <div className="image">
              <img src={"https://img.pokemondb.net/artwork/" + props.target[0].name.toLowerCase() + ".jpg"} />
            </div>



            {props.target[0].type_2 ? 
              <div className="type-field">
                <span className={'type text-center ' + props.target[0].type_1}>
                  {props.target[0].type_1}
                </span>
                <span className="spacer"></span>
                <span className={'type text-center ' + props.target[0].type_2}>
                  {props.target[0].type_2}
                </span>
              </div>
              : 
              <div className="type-field">
                <span className={'type text-center ' + props.target[0].type_1}>
                  {props.target[0].type_1}
                </span>
              </div>
            }
            
{/* Abilities */}
            <div>
              {props.target[0].hidden ? 
                <table className="table ability-field">
                  <tbody>
                    <tr>
                      <td>{props.target[0].ability_1} <br /> {props.target[0].ability_2}</td>
                      <td>{props.target[0].hidden}</td>
                    </tr>
                  </tbody>
                </table>
                :
                <table className="table">
                  <tbody>
                    <tr>
                      <td>{props.target[0].ability_1} <br /> {props.target[0].ability_2}</td>
                    </tr>
                  </tbody>
                </table>
              }
            </div>

{/* Stats */}
            <div>
              <table className="table table-bordered">
                <thead>
                  <th scope="col">HP</th>
                  <th scope="col">ATK</th>
                  <th scope="col">DEF</th>
                  <th scope="col">SPA</th>
                  <th scope="col">SPD</th>
                  <th scope="col">SPE</th>
                  <th scope="col">TOTAL</th>
                </thead>
                <tbody>
                  <td>{props.poke.hp}</td>
                  <td>{props.poke.atk}</td>
                  <td>{props.poke.def}</td>
                  <td>{props.poke.spa}</td>
                  <td>{props.poke.spd}</td>
                  <td>{props.poke.spe}</td>
                  <td>{props.poke.total}</td>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SelectedPokemon;