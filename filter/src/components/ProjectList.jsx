import React from 'react'

export const ProjectList = ({ projects }) => {
    const columns = [[], [], []];
    projects.forEach((e, i) => { columns[i % 3].push(e) });

    return (
        <div className="list">
            <div className="column">
                {columns[0].map(({ img }) => {
                    return <img src={img} alt={img} />
                })}
            </div>
            <div className="column">
                {columns[1].map(({ img }) => {
                    return <img src={img} alt={img} />
                })}
            </div>
            <div className="column">
                {columns[2].map(({ img }) => {
                    return <img src={img} alt={img} />
                })}
            </div>
        </div>
    )
}
