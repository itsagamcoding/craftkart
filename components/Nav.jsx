import { StyleSheet, Text, View } from "react-native";
import React from "react";
import gondArtImage from "@/assets/images/gondArtImage.jpg";
import mandalaArtImage from "@/assets/images/mandalaArt.jpeg";
import madhubaniArtImage from "@/assets/images/madhubaniArtImage.png";
import wildlifeArtImage from "@/assets/images/wildlifeArt.png";
import pattachitraArtImage from "@/assets/images/pattachitraArt.jpg";
import dokraCraftImage from "@/assets/images/dokraCraftImage.jpg";

import NavCard from "./NavCard";

const Nav = () => {
  return (
    <View className="mb-20">
      <View className="mx-4 mb-14 mt-5">
        <View className="items-center gap-4 flex-row">
          <View className="w-5 h-10 bg-red-600 rounded" />
          <View >
            <Text className="text-red-600 text-[22px] font-bold">
              Discover Indian Art Forms
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row flex-wrap justify-evenly">
        <NavCard artimage={madhubaniArtImage} artname={"Madhubani Art"} />
        <NavCard artimage={mandalaArtImage} artname="Mandala Art" />
        <NavCard artimage={wildlifeArtImage} artname="Wildlife Painting" />
        <NavCard artimage={dokraCraftImage} artname={"Dokra Craft"} />

        <NavCard
          artimage={pattachitraArtImage}
          artname={"Pattchitra Painting"}
        />
        <NavCard artimage={gondArtImage} artname={"Gond Art"} />
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({});
