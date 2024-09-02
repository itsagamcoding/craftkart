import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "@/constants/colors";

import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams } from "expo-router";
import allArtData from "@/assets/data/allArtData";

const PriceArtScreen = () => {
  const { upperPrice, lowerPrice } = useLocalSearchParams();

  console.log(upperPrice);
  console.log(lowerPrice);
  const PricedData = allArtData.filter(
    (art) => art.price <= upperPrice && art.price >= lowerPrice
  )
  // console.log(PricedData);

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <ScrollView>
        <View className="mb-12 px-[4%]">
          <Text className="text-black text-xl font-bold my-4 mt-10 text-center">
            Your Price Range : {lowerPrice} to {upperPrice}
          </Text>
          <Text
            className="text-justify border-y-2 py-5 font-normal"
            style={{ borderColor: colors.Primary }}
          >
            Discover a world of creativity with our diverse collection of
            artworks available at various price points. Whether you're a
            seasoned collector or a first-time buyer, our curated selection
            ensures there's something for every budget. From affordable
            masterpieces to high-end creations, our range caters to all tastes
            and preferences. Embrace the joy of owning art without breaking the
            bank and find pieces that resonate with you, all while supporting
            local artists. Explore our price range today and bring home art that
            inspires, all within your budget.
          </Text>
        </View>
        {PricedData.map(
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
              <TouchableOpacity activeOpacity={0.8}>
                <View className="my-8 px-[8%]">
                  <View className="border-4 border-black p-1 w-[100%] h-[400px]">
                    <Image
                      source={{ uri: imageUrl }}
                      // height={350}
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
              </TouchableOpacity>
            </Link>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PriceArtScreen;
