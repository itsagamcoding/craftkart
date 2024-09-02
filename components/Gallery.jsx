import { Text,Dimensions, ScrollView, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import galleryImages from "@/assets/data/galleryImages"

const Gallery = () => {
  const width = Dimensions.get("screen").width;
  return (
    <ScrollView>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={galleryImages}
        scrollAnimationDuration={1000}
        className="my-10"
        pagingEnabled
        renderItem={(info) => (
          <Link
            href={{
              pathname: "/(screens)/artcardscreen",
              params: {
                artnameClicked: info.item.artName,
              },
            }}
            asChild
          >
            <Pressable>
              <Image
                source={{ uri: info.item.imageUrl }}
                className="h-[100%] w-[100%]"
                resizeMode="stretch"
              />
              <Text>{info.item.artName}</Text>
            </Pressable>
          </Link>
        )}
      />
    </ScrollView>
  );
};

export default Gallery;

