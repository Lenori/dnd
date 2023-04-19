import React from 'react';

import * as S from './Menu.styles';

import * as Interface from './Menu.types';

import MenuItem from './MenuItem/MenuItem';

export default function Menu() {
    return (
        <S.Container>
            <MenuItem title="Classes" />
            <MenuItem title="Races" />
            <MenuItem title="Spells" />
            <MenuItem title="Equipments" />
            <MenuItem title="Mechanics" />
            <MenuItem title="Rules" />
        </S.Container>
    );
}
