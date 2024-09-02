import GlobalProvider from '@/context/GlobalProvider';
import { Stack } from 'expo-router';



export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(screens)" />
        <Stack.Screen name="index" />
      </Stack>
    </GlobalProvider>
  );
}
