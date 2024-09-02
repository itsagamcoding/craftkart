import { Stack } from 'expo-router';

export default function ScreenLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="artcardscreen" />
      <Stack.Screen name="artdetailscreen" />
      <Stack.Screen name="priceartscreen" />
      <Stack.Screen name="searchartscreen" />
    </Stack>
  );
}
