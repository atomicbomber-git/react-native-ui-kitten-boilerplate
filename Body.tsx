import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import globalStyles from './globalStyles'

export default props => (
    <SafeAreaView style={{ flex: 1, ...globalStyles.body }}>
        {props.children}
    </SafeAreaView>
)