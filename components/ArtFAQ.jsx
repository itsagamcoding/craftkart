import React from "react";
import { Text, View ,TouchableOpacity} from "react-native";
import otherArtData from "@/assets/data/otherArtData"
import { Link } from "expo-router";

const ArtFAQ = ({artname}) => {
  const result = otherArtData.filter((art) => art.artname === artname);
  // console.log(result);
  const faqArray = result[0].faqs;
  // console.log(faqArray)
  return ( 
    <>
      <View className="mt-[60px] border-t-2 border-gray-400 w-[80%] self-center">
        <Text className="text-center text-3xl text-[#ce4396] font-bold mt-8 mb-10">FAQs</Text>
      </View>
      {faqArray.map(({ id, question, answer }) => (
        <View className="my-8 px-[6%]" key={id}>
          <Text className="text-black font-semibold text-lg">
            Q. {question}
          </Text>
          <Text className="text-black font-normal text-md text-justify mt-6">
            <Text className="text-black font-semibold text-[15px] leading-[22px]">
              Ans.{" "}
            </Text>
            {answer}
          </Text>
        </View>
      ))}
    </>
  );
};

export default ArtFAQ;
