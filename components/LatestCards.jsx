import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  Pressable
} from "react-native";
import { Link } from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import { getArtItems } from "@/lib/artDatabase";
const screenWidth = Dimensions.get("window").width;

const LatestCards = () => {
  const { data: latestArtData} = useAppwrite(()=>getArtItems("LatestArt"))
  const renderItem = ({ item }) => (
    <Link
      href={{
        pathname: "/(screens)/artdetailscreen",
        params: {
          id: item.id,
          title: item.title,
          artist: item.artist,
          medium: item.medium,
          dimensions: item.dimensions,
          price: item.price,
          imageUrl: item.imageUrl,
          artistInfo: item.artistInfo,
        },
      }}
      asChild
      key={item.id}
    >
      <Pressable activeOpacity={0.8}>
        <View style={{ width: screenWidth / 2 }} className="p-4 items-center">
          <View className="border-[3px] border-black w-full h-40">
            <Image
              source={{ uri: item.imageUrl }}
              className="w-full h-[100%]"
              resizeMode="stretch"
            />
          </View>

          <View>
            <Text className="text-[14px] text-center text-[#b75a3e] font-semibold mt-2">
              {item.title}
            </Text>
            <Text className="text-sm">{item.medium}</Text>
            <Text className="text-sm">{item.dimensions}</Text>
            <Text className="text-black font-medium text-md">
              ₹ {item.price}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <>
      <View className="items-center flex-row mb-6">
        <View className="w-5 h-10 mx-4 bg-red-600 rounded" />
        <View>
          <Text className="text-red-600 text-[20px] font-bold">
            Explore Our Latest Products
          </Text>
        </View>
      </View>
      <FlatList
        data={latestArtData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default LatestCards;
