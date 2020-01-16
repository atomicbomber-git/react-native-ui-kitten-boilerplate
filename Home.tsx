import React from 'react';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import Body from './Body';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <Body>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}> Details </Button>
      </Layout>
    </Body>
  );
};