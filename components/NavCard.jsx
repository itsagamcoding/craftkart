import { Text, Pressable, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const NavCard = ({ artname, artimage }) => {
  return (
    <Link
      href={{
        pathname: "/(screens)/artcardscreen",
        params: {
          artnameClicked: artname,
        },
      }}
      asChild
    >
      <Pressable className=" flex-col mb-10 items-center w-[150px] h-[150px] p-2">
        <Image
          source={artimage}
          className="h-[100%] w-[100%] duration-250 rounded-3xl"
          resizeMethod="stretch"
        />
        <Text className="text-black text-md font-medium mt-2">{artname}</Text>
      </Pressable>
    </Link>
  );
};

export default NavCard;
