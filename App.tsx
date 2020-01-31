import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {light as theme, mapping} from '@eva-design/eva';
import {AppNavigator} from './Navigator';

function App() {
    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider mapping={mapping} theme={theme}>
                <AppNavigator/>
            </ApplicationProvider>
        </React.Fragment>
    );
}

export default App;
