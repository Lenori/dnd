import React, { createContext, useContext, useState } from 'react';

import { ClassPropTypes } from '../interfaces/classe';

export const ClassesContext = createContext({});

interface statePropTypes {
    list: ClassPropTypes[];
}

export function ClassesProvider(props: {
    children: JSX.Element | JSX.Element[];
}) {
    const [classes, setClasses] = useState<statePropTypes>({
        list: [{ name: 'test name' }],
    });

    return (
        <ClassesContext.Provider value={{ data: classes }}>
            {props.children}
        </ClassesContext.Provider>
    );
}

export function useClasses() {
    return useContext(ClassesContext);
}
