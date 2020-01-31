import React, {useEffect} from 'react';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';
import Body from './Body';
import * as Google from 'expo-google-app-auth';
import * as Auth from "./Auth"


export const HomeScreen = ({navigation}) => {
    Auth.getCachedAuthAsync()
        .then(auth => {
            if (auth === null) {
                Auth.signInAsync()
                    .then(authState => {
                        alert("Signed In")
                    })
                    .catch(error => {
                        alert(error)
                    })
            }
            else {
                alert("Obtained from cache")
            }
        })
        .catch(error => {
            alert(error)
        })

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <Body>
            <TopNavigation title='MyApp' alignment='center'/>
            <Divider/>
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={navigateDetails}> Details </Button>
            </Layout>
        </Body>
    );
};
