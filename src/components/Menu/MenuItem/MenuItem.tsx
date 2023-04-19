import React from 'react';

import * as S from './MenuItem.styles';

import * as Interface from './MenuItem.types';

export default function MenuItem(props: Interface.MenuItemPropTypes) {
    return (
        <S.Container>
            <S.Title>{props.title}</S.Title>
        </S.Container>
    );
}
