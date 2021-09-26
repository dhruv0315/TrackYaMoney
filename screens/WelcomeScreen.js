import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "300" }}>
          trackyamoney
        </Text>
        <Image
          source={require("../assets/money.png")}
          style={{
            height: 30,
            width: 30,
            resizeMode: "contain",
            marginLeft: 10,
            bottom: 5,
            tintColor: "white",
          }}
        />
      </View>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 45, color: "white", fontWeight: "300" }}>
          Welcome
        </Text>
        <Text
          style={{ fontSize: 15, color: "black", fontWeight: "100", top: 5 }}
        >
          Save more by tracking your money.
        </Text>
      </View>
      <View style={styles.cta}>
        <Text
          style={{ textTransform: "uppercase", color: "white", fontSize: 17 }}
        >
          Click to start
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require("../assets/arrow_cta.png")}
            style={{
              height: 40,
              width: 40,
              resizeMode: "contain",
              marginTop: 20,
              tintColor: "white",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#3EB489",
  },
  logo: {
    marginTop: 70,
    marginLeft: 20,
    flexDirection: "row",
  },
  welcome: {
    top: "20%",
    alignItems: "center",
  },
  cta: {
    alignItems: "center",
    top: "50%",
  },
});
