import { Link, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Text, Card, Button } from '@rneui/themed'

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: 'Overview' }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Button
        title='Basic Button'
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      >
        <Link href='/details'>Go to Details</Link>
      </Button>

      <Card>
        <Text>Word of the Day</Text>
        <Text h4>be-nev-o=lent</Text>
        <Text>adjective</Text>
        <Text>
          well meaning and kindly.
          {'"a benevolent smile"'}
        </Text>
        <Stack.Screen options={{ title: 'Overview' }} />
        <Button
          title='Basic Button'
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
