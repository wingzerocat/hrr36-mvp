import React from 'react';

const SelectGen = (props) => {
    const GenerationsList = [
        'Gen 1',
        'Gen 2',
        'Gen 3',
        'Gen 4',
        'Gen 5',
        'Gen 6',
        'Gen 7'
    ]

    var genList = GenerationsList.map(function(generation) {
        return <button className="btn" value={generation.slice(4, 5)} onClick={(e) => props.changeGen(e)}>{generation}</button>
    })

    return (
        <div>
            {genList}
        </div>
    );
}

export default SelectGen;