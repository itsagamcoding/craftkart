import {StatusBar,ScrollView } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import Gallery from '@/components/Gallery'
import PriceRange from '@/components/PriceRange'
import LatestCards from '@/components/LatestCards'
import SearchInput from '@/components/SearchInput'
import mandalaArtData from "@/assets/data/mandalaArt";
import wildlifeArtData from "@/assets/data/wildlifeArtData";
import madhubaniArtData from "@/assets/data/madhubaniArtData";
import dokraCraftData from "@/assets/data/dokraCraftData";
import pattachitraArtData from "@/assets/data/pattachitraArtData";
import radhaKrishnaArtData from "@/assets/data/radhaKrishnaArtData";
import sculptureData from "@/assets/data/sculptureData";
import modernAbstractData from "@/assets/data/modernAbstractData";
import gondArtData from "@/assets/data/gondArt";
import latestArtData from "@/assets/data/latestArtData";
import allArtData from "@/assets/data/allArtData"
import {createItem} from "@/lib/artDatabase"

const home = () => {
//   try {
//       gondArtData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       wildlifeArtData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       pattachitraArtData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       latestArtData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       dokraCraftData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       madhubaniArtData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       mandalaArtData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       radhaKrishnaArtData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       sculptureData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }
//   try {
//       modernAbstractData.map((item) =>
//         createItem({
//           id: item.id,
//           title: item.title,
//           artist: item.artist,
//           imageUrl: item.imageUrl,
//           artistInfo: item.artistInfo,
//           price: item.price,
//           medium: item.medium,
//           dimensions: item.dimensions,
//           artType: item.artType
//         })
//       )
//     console.log("All items processed successfully");
//   } catch (error) {
//     console.error("Failed to process art items:", error);
// }

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Header />
        <SearchInput/>
        <Gallery />
        <Nav />
        <LatestCards />
        <PriceRange />
      </ScrollView>
    </SafeAreaView>
  );
}

export default home