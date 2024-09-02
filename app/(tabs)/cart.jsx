import { View, Text, Image, ScrollView, Pressable, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";
import useAppwrite from "../../lib/useAppwrite";
import {
  deleteCartItem,
  getCartItems,
  createOrderItem,
} from "../../lib/appwrite";
// import { deleteItems, getArtItems } from "@/lib/artDatabase";

const Cart = () => {
  const { user } = useGlobalContext();
  const {
    data: initialCartItems,
    isLoading,
    error,
  } = useAppwrite(() => getCartItems(user.$id));
  // const { data: mandalaArtData } = useAppwrite(() => getArtItems("MandalaArt"));
  // const { data: gondArtData } = useAppwrite(() => getArtItems("GondArt"));
  // const { data: madhubaniArtData } = useAppwrite(() =>
  //   getArtItems("MadhubaniArt")
  // );
  // const { data: wildlifeArtData } = useAppwrite(() =>
  //   getArtItems("WildlifeArt")
  // );
  // const { data: sculptureData } = useAppwrite(() =>
  //   getArtItems("SculptureArt")
  // );
  // const { data: modernAbstractData } = useAppwrite(() =>
  //   getArtItems("ModernAbstract")
  // );
  // const { data: radhaKrishnaArtData } = useAppwrite(() =>
  //   getArtItems("RadhakrishnaArt")
  // );
  // const { data: pattachitraArtData } = useAppwrite(() =>
  //   getArtItems("PattachitraArt")
  // );
  // const { data: dokraCraftData } = useAppwrite(() => getArtItems("DokraCraft"));
  // const { data: latestArtData } = useAppwrite(() => getArtItems("LatestArt"));
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (initialCartItems) {
      setCartItems(initialCartItems);
    }
  }, [initialCartItems]);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [cartItems]);

  const removeCartItem = async (documentId) => {
    try {
      await deleteCartItem(documentId);
      const updatedCartItems = cartItems.filter(
        (item) => item.$id !== documentId
      );
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Failed to delete cart item:", error);
    }
  };


  if (isLoading) {
    return (
      <SafeAreaView className="bg-primary h-full">
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="bg-primary h-full">
        <Text>Error loading cart items</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        {cartItems.length === 0 ? (
          <Text className="text-center mt-10">Your cart is empty</Text>
        ) : (
          cartItems.map(
            ({
              id,
              title,
              artist,
              medium,
              dimensions,
              price,
              imageUrl,
              $id,
            }) => (
              <View
                className="my-1 p-[8%] py-[4%] flex-row gap-5 justify-between items-center"
                key={id}
              >
                <View className="border-[3px] border-black p-1 w-[40%] h-[170px]">
                  <Image
                    source={{ uri: imageUrl }}
                    height={"100%"}
                    width={"100%"}
                    resizeMode="stretch"
                  />
                </View>

                <View className="w-[50%]">
                  <Text className="text-md text-[#b75a3e] font-semibold my-2">
                    {title}
                  </Text>
                  <Text className="text-black text-sm font-semibold">
                    {artist}
                  </Text>
                  <Text className="text-sm">{medium}</Text>
                  <Text>{dimensions}</Text>
                  <Text className="text-black font-medium text-lg">
                    ₹ {price}
                  </Text>
                  <Pressable
                    onPress={() => removeCartItem($id)}
                    className="text-lg"
                  >
                    <Text className="text-green-500 font-bold text-xl">
                      Remove
                    </Text>
                  </Pressable>
                </View>
              </View>
            )
          )
        )}
      </ScrollView>
      <View className="fixed flex-row items-center justify-between px-5 z-10 h-[70px] bg-slate-400">
        <Text className="text-2xl">₹ {totalPrice}</Text>
        <Pressable>
          <Text className="text-lg font-bold">Checkout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
