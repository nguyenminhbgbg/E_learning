<script src="http://localhost:8097"></script>;
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "./Screens/MainTabScreen";
import { DrawerContent } from "./Screens/DrawerContent";
import SupportScreen from "./Screens/SupportScreen";
import LearningList from "./Screens/LearningList";
import LearningDetail from "./Screens/LearningDetail";
import PracticeScreen from "./Screens/PracticeScreen";

import NopBaiTinhDiem from "./Screens/Practices/NopBaiTinhDiem";
import LamDeChiTiet from "./Screens/Practices/LamDeChiTiet";
import PracticeTopics from "./Screens/Practices/PracticeTopics";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="LearningList" component={LearningList} />
        <Drawer.Screen name="LearningDetail" component={LearningDetail} />
        <Drawer.Screen name="PracticeTopics" component={PracticeTopics} />
        <Drawer.Screen name="PracticeScreen" component={PracticeScreen} />
        <Drawer.Screen name="NopBaiTinhDiem" component={NopBaiTinhDiem} />
        <Drawer.Screen name="LamDeChiTiet" component={LamDeChiTiet} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
