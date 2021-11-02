import React from "react";
import {
  Text,
  Image,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../Practices/unicorn1.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>ICTU Elearning</Text>
        <Text style={styles.text}>
          Ôn luyện thi tiếng Anh uy tín, chất lượng!
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <LinearGradient colors={["#d1a0a7", "#d1a0a7"]} style={styles.signIn}>
            <Text style={styles.textSign}>Bắt đầu ngay</Text>
            <MaterialIcons
              style={{ paddingRight: 30 }}
              name="navigate-next"
              color="#fff"
              size={24}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#009387",
    fontSize: 26,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  signIn: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    
  },
});

