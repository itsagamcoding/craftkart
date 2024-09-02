import { createCartItem, getCartItems } from "@/lib/appwrite";
import { Link, router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";  
import useAppwrite from "../../lib/useAppwrite";
import { StatusBar } from "react-native";
import ArtDetailsCard from "@/components/ArtDetailsCard";
import colors from "@/constants/colors";
import { getAllArtItems } from "@/lib/artDatabase";

const ArtDetailsScreen = () => {
  const { user } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getCartItems(user.$id));
  const { data : AllArtData} = useAppwrite(() => getAllArtItems());
  const { id, title, artist, medium, dimensions,price, imageUrl,artistInfo } = useLocalSearchParams();
  const art = {
    id: id,
    title: title,
    artist: artist,
    medium: medium,
    dimensions: dimensions,
    price: price,
    imageUrl: imageUrl,
    artistInfo: artistInfo
  };
  const item = posts.filter((art) => art.id == id).length;
  if(item==0)
    itemExist=false;
  else{
    itemExist=true;
  }

  
  form ={
    title: title,
    artist: artist,
    medium: medium,
    dimensions: dimensions,
    price: parseInt(price),
    imageUrl: imageUrl,
  };

  const submit =  () => {
    try {
      createCartItem({
        id: parseInt(id),
        ...form,
        userId: user.$id,
      });

      Alert.alert("Success", "Post uploaded successfully");
      router.push("/cart");
    } catch (error) {
      Alert.alert("Error", error.message);
    } 
  }

  const goToCart=()=> {
    router.push("/cart");
  }

  const getArtistArts = (artistName) => {
    return AllArtData.filter((art) => art.artist === artist);
  };

  return (
    <SafeAreaView className=" h-full">
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <ScrollView>
        <ArtDetailsCard
          key={id}
          artist={artist}
          artistArts={getArtistArts(artist)}
          art={art}
        />
      </ScrollView>

      <View className="fixed flex-row">
        <Link href="(tabs)/home" asChild>
          <Pressable className="bg-gray-300 w-[50%] z-10 h-[60px] flex-row items-center justify-center border-r-2 border-black">
            <Text
              className="text-xl font-extrabold"
              style={{ color: colors.Primary }}
            >
              Explore
            </Text>
          </Pressable>
        </Link>

        {!itemExist ? (
          <Pressable
            onPress={submit}
            className="bg-pink-400  w-[50%] z-10 h-[60px] flex-row items-center justify-center border-l-2 border-black"
            style={{ backgroundColor: colors.Primary }}
          >
            <Text className="text-white text-lg">Add To CART</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={goToCart}
            className="bg-pink-400  w-[50%] z-10 h-[60px] flex-row items-center justify-center border-l-2 border-black"
            style={{ backgroundColor: colors.Primary }}
          >
            <Text className="text-white text-lg">Already In CART</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ArtDetailsScreen;
