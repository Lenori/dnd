import React, { useState } from 'react';

import * as Interface from '../../@Types'

import * as S from './styles';

export default function Home() {
	const [state, setState] = useState<Interface.WelcomeMessage>({
		message: 'This is a homepage'
	})

	return (
        <S.Container>
			<h1>{state.message}</h1>
		</S.Container>
	);
}
