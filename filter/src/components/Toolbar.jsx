import React from 'react'

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
    console.log(filters);
    console.log(selected);
    return (
        <div className="toolbar">
            {filters.map(filter => {
                return filter === selected ?
                    <button className='selected'> {filter} </button> :
                    <button onClick={(e) => { onSelectFilter(filter) }}> {filter} </button>
            })}
        </div>
    )
}
