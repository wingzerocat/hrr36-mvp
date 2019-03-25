import React from 'react';

const SelectedPokemon = (props) => (
  <div key={props.poke.id}>
    <div class="btn-group" role="group">
    <button type="button" className="btn btn-custom"> { props.poke.id }</button>
    <button type="button" className="btn btn-big" data-toggle="modal" data-target="#exampleModal" value={props.poke.id} onClick={(e) => props.selectedPoke(e)}>      
      { props.poke.name }
    </button>
    </div>

    <div className={"modal fade " + props.target[0].type_1} id="exampleModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className={"modal-content "}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.target[0].id + ' ' + props.target[0].name}</h5>

          </div>
          <div className="modal-body">
            <div className="image">
              <img src={"https://img.pokemondb.net/artwork/" + props.target[0].name.toLowerCase() + ".jpg"} />
            </div>

            <div>
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
            </div>
            
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

 {/*Stats with Bars */}   
            <table className="table bars">
              <tbody>
                <tr>
                  <td>HP</td>
                  <td>
                    <div class="progress">
                      <div class="progress-bar hp" role="progressbar" style={{width: (props.target[0].hp/255 * 100) + '%'}}>
                      </div>
                    </div>
                  </td>
                  <td>{props.target[0].hp}</td>
                </tr>
                <tr>
                  <td>ATK</td>
                  <td>
                    <div class="progress">
                      <div class="progress-bar atk" role="progressbar" style={{width: (props.target[0].atk/255 * 100) + '%'}}>
                      </div>
                    </div>
                  </td>
                  <td>{props.target[0].atk}</td>
                </tr>
                <tr>
                  <td>DEF</td>
                  <td>
                    <div class="progress">
                      <div class="progress-bar def" role="progressbar" style={{width: (props.target[0].def/255 * 100) + '%'}}>
                      </div>
                    </div>
                  </td>
                  <td>{props.target[0].def}</td>
                </tr>
                <tr>
                  <td>SPA</td>
                  <td>
                    <div class="progress">
                      <div class="progress-bar spa" role="progressbar" style={{width: (props.target[0].spa/255 * 100) + '%'}}>
                      </div>
                    </div>
                  </td>
                  <td>{props.target[0].spa}</td>
                </tr>
                <tr>
                  <td>SPD</td>
                  <td>
                    <div class="progress">
                      <div class="progress-bar spd" role="progressbar" style={{width: (props.target[0].spd/255 * 100) + '%'}}>
                      </div>
                    </div>
                  </td>
                  <td>{props.target[0].spd}</td>
                </tr>
                <tr>
                  <td>SPE</td>
                  <td>
                    <div class="progress">
                      <div class="progress-bar spe" role="progressbar" style={{width: (props.target[0].spe/255 * 100) + '%'}}>
                      </div>
                    </div>
                  </td>
                  <td>{props.target[0].spe}</td>
                </tr>
                <tr>
                  <td>TOTAL</td>
                  <td>
                    <div class="progress">
                      <div class={"progress-bar " + props.target[0].type_1} role="progressbar" style={{width: (props.target[0].total/720 * 100) + '%'}}>
                      </div>
                    </div>
                  </td>
                  <td>{props.target[0].total}</td>
                </tr>
              </tbody>    
            </table>
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