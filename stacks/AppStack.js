import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthStack from './AuthStack'
import MainStack from './MainStack'

const AppStack = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name="Main" component={MainStack} />
            <Stack.Screen options={{
                headerShown: false
            }} name="Auth" component={AuthStack} />
        </Stack.Navigator>
    )
}

export default AppStack
