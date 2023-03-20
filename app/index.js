import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Link, Stack } from 'expo-router'

export default function Index() {
  const { i18n } = useTranslation()

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
      <Text>Open up App.tsx to start working on your </Text>
      <StatusBar style='auto' />
      <Text>hardy</Text>
      <Text>{i18n.t('title')}</Text>
      <Text>{i18n.t('description')}</Text>
      <Button
        title='Switch to English'
        onPress={() => {
          i18n.changeLanguage('en')
          console.log('English')
        }}
      />
      <Button
        title='Switch to 中文'
        onPress={() => {
          i18n.changeLanguage('zh')
          console.log('中文')
        }}
      />
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
