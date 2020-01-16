import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, Button } from '@ui-kitten/components';
import globalStyles from './globalStyles'
import { View } from 'react-native';

const Body = props => (
    <SafeAreaView style={{ flex: 1, ...globalStyles.body }}>
        {props.children}
    </SafeAreaView>
)

const baseItems = [
    { id: 1, name: "Apple", },
    { id: 2, name: "Melon", },
    { id: 3, name: "Grapes", },
    { id: 4, name: "Banana", },
    { id: 5, name: "Peach", },
]

const ItemCardFooter = ({ item, onDelete }) => (

    <View style={{ paddingVertical: 10,paddingHorizontal: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
        <Button
            icon={style => <Icon style={{ ...style }} name="trash-2"/>}
            appearance="ghost"
            status="danger"
            onPress={() => onDelete(item)}
            />

        <Button onPress={() => { onDelete(item) }}>
            Delete
        </Button>
    </View>
)

const ItemCard = ({ item, onDelete }) => (
    <Card
        footer={() => <ItemCardFooter item={item} onDelete={onDelete} />} style={{ margin: 10 }}>
        <Text>
            {item.name.toUpperCase()}
        </Text>
    </Card>
)


const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const DetailsScreen = ({ navigation }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems([...baseItems])
    }, [])

    /* Actions */
    const deleteItemAction = toBeDeleted => {
        setItems(items => items.filter(item => item.id !== toBeDeleted.id))
    }

    const navigateBack = () => {
        navigation.goBack();
    };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <Body>
      <TopNavigation
        title='MyApp'
        alignment='center'
        leftControl={BackAction()}/>

      <Divider/>
      <Layout style={{ flex: 1 }}>

        <ScrollView>
            {items.map(item => (
                <ItemCard
                    key={item.id}
                    onDelete={deleteItemAction}
                    item={item}
                    />
            ))}
        </ScrollView>
      </Layout>
    </Body>
  );
};