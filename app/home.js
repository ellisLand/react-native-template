import { useLayoutEffect } from 'react'
import { View, Button, Text, Image } from 'react-native'
import { Stack } from 'expo-router'

function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} source={require('../assets/splash.png')} />
}

export default function Home() {
  const [count, setCount] = React.useState(0)

  return (
    // https://reactnavigation.org/docs/header-buttons#header-interaction-with-its-screen-component
    <>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title='Update count' />,
        }}
      />
      <Text>Count: {count}</Text>
    </>
  )
}
