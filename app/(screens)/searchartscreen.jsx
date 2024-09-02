import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams } from "expo-router";
import colors from "@/constants/colors";
// import useAppwrite from "@/lib/useAppwrite";
// import { getAllArtItems } from "@/lib/artDatabase";
import allArtData from "@/assets/data/allArtData";

let searchedArts = [];

const SearchArtScreen = () => {
  const { searchValue } = useLocalSearchParams();
  const [displayArts, setDisplayArts] = useState([]);

  useEffect(() => {
    searchedArts = allArtData.filter(
      (art) =>
        art.artist.toLowerCase().includes(searchValue.toLowerCase()) ||
        art.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDisplayArts(
      searchedArts.length == 0 ? allArtData.slice(5, 35) : searchedArts
    );
  }, [searchValue]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="my-12">
          <Text
            className="text-xl text-black self-center border-y-4 p-4"
            style={{ borderColor: colors.Primary }}
          >
            Searched Arts and Paintings
          </Text>
        </View>

        {searchedArts.length === 0 ? (
          <View>
            <Text className="ml-2 text-lg font-semibold">
              No Search Found, Explore Different Arts:
            </Text>
          </View>
        ) : (
          <View>
            <Text className="text-lg font-semibold ml-2">
              Explore Arts Matched Your Preference:
            </Text>
          </View>
        )}

        {displayArts.map(
          ({
            id,
            title,
            artist,
            medium,
            dimensions,
            price,
            imageUrl,
            artistInfo,
          }) => (
            <Link
              href={{
                pathname: "/(screens)/artdetailscreen",
                params: {
                  id: id,
                  title: title,
                  artist: artist,
                  medium: medium,
                  dimensions: dimensions,
                  price: price,
                  imageUrl: imageUrl,
                  artistInfo: artistInfo,
                },
              }}
              asChild
              key={id}
            >
              <Pressable activeOpacity={0.8}>
                <View className="my-8 px-[8%]">
                  <View className="border-4 border-black p-1 w-[100%] h-[400px]">
                    <Image
                      source={{ uri: imageUrl }}
                      width={"100%"}
                      className="h-[100%]"
                      resizeMode="stretch"
                    />
                  </View>

                  <View>
                    <Text
                      className="text-[17px] font-extrabold my-2"
                      style={{ color: colors.Primary }}
                    >
                      {title}
                    </Text>
                    <Text className="text-black font-semibold">{artist}</Text>
                    <Text>{medium}</Text>
                    <Text>{dimensions}</Text>
                    <Text className="text-black font-medium text-lg">
                      ₹ {price}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </Link>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchArtScreen;
