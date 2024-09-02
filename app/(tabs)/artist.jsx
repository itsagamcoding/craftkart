import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArtistCard from "@/components/ArtistCard";
import artistData from "@/assets/data/artistData";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import allArtData from "@/assets/data/allArtData";
import useAppwrite from "@/lib/useAppwrite";
import { getAllArtItems } from "@/lib/artDatabase";

const artist = () => {
  // const {data: AllArtData} = useAppwrite(()=> getAllArtItems())
    const getArtistArts = (artistName) => {
      return allArtData.filter((art) => art.artist === artistName);
    };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ marginHorizontal: 20 }}>
        <View className="mb-20">
          <Text className="text-black text-2xl font-bold my-4 text-center">
            Explore The Talent
          </Text>
          <Text className="text-justify border-y-2 py-5 font-normal" style={{borderColor: colors.Primary}}>
            For artists featured in our app, creativity knows no bounds. We
            showcase a diverse array of local Indian talent, each piece a
            testament to cultural richness and artistic innovation. From
            traditional to contemporary expressions, our platform celebrates the
            vibrant tapestry of Indian artistry. Explore their stories,
            techniques, and inspirations as they redefine boundaries and
            captivate audiences worldwide. Join us in discovering the unique
            voices shaping the future of Indian art.
          </Text>
        </View>
        {artistData.map((artist) => (
          <ArtistCard
            key={artist.id}
            artist={artist}
            arts={getArtistArts(artist.name)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default artist