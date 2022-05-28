import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {LinearChart, BarGraph} from "./Charts";
import colors from "../Colors";

const Tab = createMaterialTopTabNavigator();

function Daily () {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white}}>
            <BarGraph />
        </View>
    )
}

function Monthly() {
    return (
        <View style={{flex: 1, backgroundColor: colors.white}}>
            <LinearChart />
        </View>
    )
}

export default function NavbarTab() {
    return (
        <View style={{height: 280}}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Monthly" screenOptions={{
                    tabBarActiveTintColor: colors.secondaryColor,
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.secondaryColor,
                        height: 4
                    },
                    tabBarLabelStyle: {
                        textTransform: 'capitalize'
                    }

                }}>
                    <Tab.Screen name="Monthly" component={Monthly} />
                    <Tab.Screen name="Daily" component={Daily} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}