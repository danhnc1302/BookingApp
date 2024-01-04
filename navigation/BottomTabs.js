import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";
import BookingScreen from "../screens/BookingScreen";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator()

export default function () {
    return (
        <Tab.Navigator screenOptions={{ 
          tabBarStyle: {height: 60},
          tabBarLabelStyle: {marginBottom: 10}
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? <Entypo name="home" size={24} color="#003580" /> : <AntDesign name="home" size={24} color="black" />
            }} />
            <Tab.Screen name="Saved" component={SavedScreen} options={{
                tabBarLabel: "Saved",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? <AntDesign name="heart" size={24} color="#003580" /> : <AntDesign name="hearto" size={24} color="black" />
            }} />
            <Tab.Screen name="Bookings" component={BookingScreen} options={{
                tabBarLabel: "Bookings",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? <Ionicons name="notifications" size={24} color="#003580" /> : <Ionicons name="notifications-outline" size={24} color="black" />
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? <Ionicons  name="person" size={24} color="#003580" /> : <Ionicons  name="person-outline" size={24} color="black" />
            }} />
        </Tab.Navigator>
    )
}