import React from 'react';

import * as S from './Home.styles';

import * as Interface from './Home.types';

export default function Component() {
	const state: Interface.HomePropTypes = {
		message: 'Componente vazio',
	};

	return (
		<S.Container>
			<h1>{state.message}</h1>
		</S.Container>
	);
}
