import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function Index() {
  const { i18n } = useTranslation()

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your </Text>
      <StatusBar style="auto" />
      <Text>hardy</Text>
      <Text>{i18n.t('title')}</Text>
      <Text>{i18n.t('description')}</Text>
      <Button
        title="Switch to English"
        onPress={() => {
          i18n.changeLanguage('en')
          console.log('English')
        }}
      />
      <Button
        title="Switch to 中文"
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
