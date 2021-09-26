import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ExpenseItem = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={{ top: 70 }}>
          <View style={styles.listItem}>
            <Text style={{ top: 7.5, color: "white", fontSize: 20 }}>
              {props.expense}
            </Text>
            <Text>{props.price}</Text>
            <Image
              source={require("../assets/close.png")}
              style={{
                height: 25,
                width: 25,
                resizeMode: "contain",
                marginLeft: 295,
                tintColor: "white",
                marginTop: 17,
                position: 'absolute'
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    width: 350,
    backgroundColor: "#27292E",
    flexDirection: "row",
    height: 60,
  },
});

export default ExpenseItem;
