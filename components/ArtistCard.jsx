import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable
} from "react-native";
import { Link } from "expo-router";
const screenWidth = Dimensions.get("window").width;


const ArtistCard = ({ artist, arts }) => {
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
    >
      <Pressable>
        <View style={{ width: screenWidth / 2.2 }} className="p-4 items-center">
          <View className="border-[3px] border-black w-full h-40">
            <Image
              source={{ uri: item.imageUrl }}
              className="w-full h-[100%]"
              resizeMode="stretch"
            />
          </View>

          <View>
            <Text className="text-[14px] h-[85px] text-center text-[#b75a3e] font-semibold mt-5">
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
    <View className="mb-20 border-b-4 border-[#6a51ae] ">
      <View>
        <View className="flex-row items-center justify-evenly mb-4">
          <Image
            source={artist.artistImage}
            className="w-20 h-20 rounded-full mb-2.5"
            resizeMode="stretch"
          />
          <View className="">
            <Text className="text-lg font-bold mb-1.25">{artist.name}</Text>
            <Text className="text-base text-gray-500 mb-1.25">
              {artist.city}, {artist.state}
            </Text>
          </View>
        </View>
        <Text className="text-sm text-center">{artist.bio}</Text>
      </View>
      <FlatList
        data={arts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ArtistCard;
