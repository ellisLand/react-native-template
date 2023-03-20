import { View, Text } from 'react-native'
import { Stack, useSearchParams, useRouter } from 'expo-router'

export default function Details() {
  const router = useRouter()
  const params = useSearchParams()

  const title = Array.isArray(params.name) ? params.name[0] : params.name
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title,
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' })
        }}
      >
        Update the title
      </Text>
    </View>
  )
}
