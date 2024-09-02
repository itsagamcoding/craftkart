import {
  View,
  Text,
  FlatList,
  Pressable,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
const screenWidth = Dimensions.get("window").width;
const ArtDetailsCard= ({ artist, artistArts,art }) => {

  // For Artworks From ARTIST
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
            <Text className="text-[14px] h-[80px] text-center text-[#b75a3e] font-semibold mt-5">
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
    <ScrollView>
      {/* For Artworks From ARTIST  */}
      <View className="border-[8px] border-yellow-600 w-[90%] bg-black self-center my-10 h-[280px]" >
        <Image
          source={{uri: art.imageUrl} }
          width={"100%"}
          className="h-[100%]"
          resizeMode="stretch"
        />
      </View>
      <View className="mx-4">
        <Text className="text-xl font-semibold">{art.title}</Text>
        <Text>By {art.artist}</Text>
      </View>
      <View className="my-6 pl-4">
        <Text className="text-lg font-bold">Artworks From {artist}</Text>
      </View>
      <FlatList
        data={artistArts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: "#dfe6e9" }}
      />
    </ScrollView>
  );
};

export default ArtDetailsCard;
