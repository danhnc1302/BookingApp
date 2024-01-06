import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import SearchScreen from "../screens/SearchScreen";
import PlacesScreen from "../screens/PlacesScreen";
import MapScreen from "../screens/MapScreen";
import InforScreen from "../screens/InforScreen";
const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false}} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Places" component={PlacesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Info" component={InforScreen} options={{ headerShown: false }} />


        </Stack.Navigator>
    )
}