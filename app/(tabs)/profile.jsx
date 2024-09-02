import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text,Pressable } from "react-native";
import {signOut} from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import InfoBox from "@/components/InfoBox";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

  const logout = async () => {
    try{
       await signOut();
      setUser(null);
      setIsLogged(false);
      router.replace("/sign-in");
    } catch(error){
      console.log(error);
    }
   
  };

  return (
    <SafeAreaView className="bg-gray-400 h-full">
      <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
        <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
          <Image
            source={{ uri: user?.avatar }}
            className="w-[90%] h-[90%] rounded-lg"
            resizeMode="cover"
          />
        </View>

        <InfoBox
          title={user?.username}
          containerStyles="mt-5"
          titleStyles="text-lg"
        />
        <Pressable onPress={logout} className="w-30 p-5 rounded-2xl bg-black mb-10">
          <Text className="text-xl text-white">LOG OUT</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
};

export default Profile;
