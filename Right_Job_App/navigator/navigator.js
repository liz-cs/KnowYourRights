import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LanguageScreen from "../src/screens/LanguageScreen"
import StatusScreen_Spanish from "../src/screens/StatusScreen_Spanish";
import StatusScreen_English from "../src/screens/StatusScreen_English";
import ListScreen_English from "../src/screens/ListScreen_English";
import ListScreen_Spanish from "../src/screens/ListScreen_Spanish";
import HomeScreen_English from "../src/screens/HomeScreen_English";
import HomeScreen_Spanish from "../src/screens/HomeScreen_Spanish";
import Page1_Spanish from "../src/screens/Page1_Spanish";
import Page1_English from "../src/screens/Page1_English";
import Page2_Spanish from "../src/screens/Page2_Spanish";
import Page2_English from "../src/screens/Page2_English";
import Page3_English from "../src/screens/Page3_English";
import Page3_Spanish from "../src/screens/Page3_Spanish";
import Page4_English from "../src/screens/Page4_English";
import Page4_Spanish from "../src/screens/Page4_Spanish";
import Page5_Spanish from "../src/screens/Page5_Spanish";
import Page5_English from "../src/screens/Page5_English";
import Page6_English from "../src/screens/Page6_English";
import Page6_Spanish from "../src/screens/Page6_Spanish";

const Stack = createNativeStackNavigator();
function myNavigators() {
    return(
        <Stack.Navigator initialRouteName="Language">
            <Stack.Screen 
            name="Language" 
            component={LanguageScreen}
            />
            <Stack.Screen 
            name="Status" 
            component={StatusScreen_English}
            />
            <Stack.Screen 
            name="Estado" 
            component={StatusScreen_Spanish}
            />
            <Stack.Screen 
            name="Homes_English" 
            options={({ navigation }) => ({
                // tabBarButton: () => null,
                // tabBarVisible: false,
                // tabBarStyle: { display: "none" },
                headerShown: false,
                })
            }
                component={DrawerNavigator_English}
            />
            <Stack.Screen 
            name="Homes_Spanish" 
            options={({ navigation }) => ({
                // tabBarButton: () => null,
                // tabBarVisible: false,
                // tabBarStyle: { display: "none" },
                headerShown: false,
                })
            }
            component={DrawerNavigator_Spanish}
            />
            <Stack.Screen
            name="Hours of Works" 
            component={Page1_English}
            />
            <Stack.Screen 
            name="Horas de trabajo" 
            component={Page1_Spanish}
            />
            <Stack.Screen 
            name="Statutory Holiday" 
            component={Page2_English}
            />
            <Stack.Screen 
            name="Días festivos" 
            component={Page2_Spanish}
            />
            <Stack.Screen 
            name="Taking Time Off" 
            component={Page3_English}
            />
            <Stack.Screen 
            name="Tomar tiempo libre" 
            component={Page3_Spanish}
            />
            <Stack.Screen 
            name="Quit, Fired or Laid off" 
            component={Page4_English}
            />
            <Stack.Screen 
            name="Renunciar" 
            component={Page4_Spanish}
            />
            <Stack.Screen 
            name="Getting Paid for Work" 
            component={Page5_English}
            />
            <Stack.Screen 
            name="Cobrar por trabajar" 
            component={Page5_Spanish}
            />
            <Stack.Screen 
            name="Make a Complaint" 
            component={Page6_English}
            />
            <Stack.Screen 
            name="Hacer un reclamo" 
            component={Page6_Spanish}
            />
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator_English(){
    return(
        <Drawer.Navigator initialRouteName="Home_English">
        <Drawer.Screen
                name="Home"
                component={HomeScreen_English}
        />
        <Drawer.Screen
            name = "Bookmark"
            component = {ListScreen_English}
        />
        </Drawer.Navigator>
    )
}

function DrawerNavigator_Spanish(){
    return(
        <Drawer.Navigator initialRouteName="Home_Spanish">
        <Drawer.Screen
            name = "Casa"
            component = {HomeScreen_Spanish}
        />
        <Drawer.Screen
            name = "Marcador"
            component = {ListScreen_Spanish}
        />
        </Drawer.Navigator>
    )
}

export default myNavigators;
