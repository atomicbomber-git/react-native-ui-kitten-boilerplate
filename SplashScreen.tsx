import React from 'react'
import Body from "./Body"
import { Layout, Text } from "@ui-kitten/components"

export default function({ navigation }) {
    const SPLASH_TIMEOUT_MILLISECONDS = 2000

    setTimeout(() => {
        navigation.navigate('Home')
    }, SPLASH_TIMEOUT_MILLISECONDS)

    return (
        <Body>
            <Layout style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Text category="h1">
                    Example Todo App
                </Text>
            </Layout>
        </Body>
    )
}