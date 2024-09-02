import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from 'react'
import ArtFAQ from "@/components/ArtFAQ";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams } from "expo-router";
import otherArtData from "@/assets/data/otherArtData";
import colors from "@/constants/colors";
import TabLayout from "../(tabs)/_layout";
import {getArtItems} from "@/lib/artDatabase";
import useAppwrite from "../../lib/useAppwrite";

const ArtCardScreen = () => {
  
  const { artnameClicked } = useLocalSearchParams();
  
  const result = otherArtData.filter((art) => art.artname === artnameClicked);
  const artData = result[0]

  let artDetails = [];
  if (artnameClicked == "Gond Art") {
      const { data: gondArtData } = useAppwrite(() => getArtItems("GondArt"));

     artDetails = gondArtData;
  }
  else if (artnameClicked == "Mandala Art") { 
    const { data: mandalaArtData } = useAppwrite(() => getArtItems("MandalaArt"));
artDetails = mandalaArtData;}
  else if (artnameClicked == "Pattchitra Painting") {
      const { data: pattachitraArtData } = useAppwrite(() =>
        getArtItems("PattachitraArt")
      );

    artDetails = pattachitraArtData;}
  else if (artnameClicked == "Wildlife Painting") { 
    const { data: wildlifeArtData } = useAppwrite(() =>
    getArtItems("WildlifeArt")
  );
artDetails = wildlifeArtData;}
  else if (artnameClicked == "Madhubani Art") { 
    const { data: madhubaniArtData } = useAppwrite(() =>
    getArtItems("MadhubaniArt")
  );
artDetails = madhubaniArtData;}
  else if (artnameClicked == "Dokra Craft") {
      const { data: dokraCraftData } = useAppwrite(() =>
        getArtItems("DokraCraft")
      );

    artDetails = dokraCraftData;}
  else if (artnameClicked == "Sculptures") {const { data: sculptureData } = useAppwrite(() =>
    getArtItems("SculptureArt")
  );artDetails = sculptureData;}
  else if (artnameClicked == "Radha Krishna Paintings") {  const { data: radhaKrishnaArtData } = useAppwrite(() =>
    getArtItems("RadhakrishnaArt")
  );
artDetails = radhaKrishnaArtData;}
  else if (artnameClicked == "Modern Abstract Art") {  const { data: modernAbstractData } = useAppwrite(() =>
    getArtItems("ModernAbstract")
  );
artDetails = modernAbstractData;}

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <ScrollView>
          <View className="mb-12 px-[4%]">
            <Text className="text-black text-2xl font-bold my-4 text-center">
              {artData.artname}
            </Text>
            <Text
              className="text-justify border-y-2 py-5 font-normal"
              style={{ borderColor: colors.Primary }}
            >
              {artData.details}
            </Text>
          </View>
          {artDetails.map(
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
          <ArtFAQ artname={artnameClicked} />
        </ScrollView>
      </SafeAreaView>
    );
}

export default ArtCardScreen; 




