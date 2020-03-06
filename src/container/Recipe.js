import React from 'react'

function Recipe(props) {
    const selected = props.selected;
    const recipe = (selected !== null) ? (
        <div>
            {selected.label}
        </div>
    ) : (
        <div>Fetching recipe...</div>
    )
    return (
        <div>
            {recipe}
        </div>
    )
}

export default Recipe

