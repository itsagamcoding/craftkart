import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#6a51ae",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 4,
          height: 60,
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 6,
          fontWeight: "800",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              className="mb-5"
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="artist"
        options={{
          title: "Artist",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              className="mb-5"
              name={focused ? "color-palette-sharp" : "color-palette-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              className="mb-5"
              name={focused ? "cart" : "cart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
