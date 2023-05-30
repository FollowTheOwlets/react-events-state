import React, { useState } from 'react'
import ImageRepository from '../repositories/ImageRepository';
import { Toolbar } from './Toolbar';
import { ProjectList } from './ProjectList';

export const Portfolio = () => {
    const [filter, setFilter] = useState(ImageRepository.types.ALL);

    return (
        <div className="portfolio">
            <Toolbar
                filters={Object.values(ImageRepository.types)}
                selected={filter}
                onSelectFilter={(filter) => setFilter(filter)} />
            <ProjectList
                projects={filter === ImageRepository.types.ALL ? ImageRepository.getImages() : ImageRepository.getImages().filter(img => img.category === filter)} />
        </div>

    )
}
