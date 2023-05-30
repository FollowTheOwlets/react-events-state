
import React from 'react'
import { useState } from 'react'
import { IconSwitch } from './IconSwitch';
import { ICONS, PRODUCTS } from '../utils/Constants';
import { CardsView } from './CardsView';
import { ListView } from './ListView';

export const Store = () => {
    const [isGrid, setGrid] = useState(true);

    return (
        <div className="store">
            <IconSwitch icon={isGrid ? ICONS.VEIW_MODULE : ICONS.VEIW_LIST} onSwitch={() => setGrid(!isGrid)} />
            {isGrid ? <CardsView products={PRODUCTS} /> : <ListView products={PRODUCTS} />}
        </div>
    )
}
