import { useState } from "react";
import { router } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import  Ionicons  from "@expo/vector-icons/Ionicons";

const SearchInput = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center w-[80%] self-center my-4 h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-black flex-1 font-pregular"
        value={query}
        placeholder="Search By Art | Artist | Anything"
        placeholderTextColor="#123456"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please Input Something To Search"
            );

          else router.push({pathname: '(screens)/searchartscreen',params: {searchValue: query}});
        }}
      >
        <Ionicons name="search" size={25}/>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
