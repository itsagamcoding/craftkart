import { Image, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import logo from '@/assets/images/logo.png'

const Header = () => {
  return (
    <SafeAreaView>
      <View className="py-2 bg-[#6a51ae]">
        <View className="flex-row items-center justify-center gap-2">
          <Image source={logo} className="h-[50px] w-[50px]" />
          <Text className="text-white text-2xl">Craftopia</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Header
