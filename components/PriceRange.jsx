import { View, Text,Pressable,Image, ImageBackground,Dimensions } from 'react-native'
import React from 'react'
import priceRange1 from "@/assets/images/priceRange/priceRange1.jpg"
import priceRange2 from "@/assets/images/priceRange/priceImage2.jpeg"
import priceRange3 from "@/assets/images/priceRange/priceImage3.jpeg"
import priceRange4 from "@/assets/images/priceRange/priceImage4.jpg"
import { Link } from 'expo-router';
const screenWidth = Dimensions.get("window").width;
import colors from "@/constants/colors"

const PriceRange = () => {
    
  return (
    <View className="my-16">
      <View className="items-center flex-row mb-10">
        <View className="w-5 h-10 mx-4 bg-red-600 rounded" />
        <View>
          <Text className="text-red-600 text-[20px] font-bold">
            Affordable Art Treasures
          </Text>
        </View>
      </View>
      <View className="flex-row flex-wrap bg-[#636e72] pt-10">
        <Link
          href={{
            pathname: "/(screens)/priceartscreen",
            params: {
              upperPrice: 5000,
              lowerPrice: 0,
            },
          }}
          asChild
        >
          <Pressable
            className="flex-col mb-10 h-[200px] p-2"
            style={{ width: screenWidth / 2 }}
          >
            <Image
              source={priceRange1}
              className="h-[100%] w-[100%]"
              resizeMode="stretch"
              style={{ borderWidth: 4, borderColor: "black" }}
            />
            <View className="relative bottom-16 ml-2 z-10">
              <Text className="text-white text-xl font-bold">Below</Text>
              <Text className="text-white text-xl font-bold">₹ 5,000</Text>
            </View>
          </Pressable>
        </Link>
        <Link
          href={{
            pathname: "/(screens)/priceartscreen",
            params: {
              upperPrice: 10000,
              lowerPrice: 5000,
            },
          }}
          asChild
        >
          <Pressable
            className="flex-col mb-10 h-[200px] p-2"
            style={{ width: screenWidth / 2 }}
          >
            <Image
              source={priceRange2}
              className="h-[100%] w-[100%]"
              resizeMode="stretch"
              style={{ borderWidth: 4, borderColor: "black" }}
            />
            <View className="relative bottom-16 ml-2 z-10">
              <Text className="text-white text-xl font-bold">₹ 5,000-</Text>
              <Text className="text-white text-xl font-bold">₹ 10,000</Text>
            </View>
          </Pressable>
        </Link>
        <Link
          href={{
            pathname: "/(screens)/priceartscreen",
            params: {
              upperPrice: 15000,
              lowerPrice: 10000,
            },
          }}
          asChild
        >
          <Pressable
            className="flex-col mb-10 h-[200px] p-2"
            style={{ width: screenWidth / 2 }}
          >
            <Image
              source={priceRange3}
              className="h-[100%] w-[100%]"
              resizeMode="stretch"
              style={{ borderWidth: 4, borderColor: "black" }}
            />
            <View className="relative bottom-16 ml-2 z-10">
              <Text className="text-white text-lg font-bold">₹ 10,000-</Text>
              <Text className="text-white text-lg font-bold">₹ 15,000</Text>
            </View>
          </Pressable>
        </Link>
        <Link
          href={{
            pathname: "/(screens)/priceartscreen",
            params: {
              upperPrice: 1000000,
              lowerPrice: 15000,
            },
          }}
          asChild
        >
          <Pressable
            className="flex-col mb-10 h-[200px] p-2"
            style={{ width: screenWidth / 2 }}
          >
            <Image
              source={priceRange4}
              className="h-[100%] w-[100%]"
              resizeMode="stretch"
              style={{ borderWidth: 4, borderColor: "black" }}
            />
            <View className="relative bottom-16 ml-2 z-10">
              <Text className="text-white text-xl font-bold">Above</Text>
              <Text className="text-white text-xl font-bold">₹ 15,000</Text>
            </View>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

export default PriceRange