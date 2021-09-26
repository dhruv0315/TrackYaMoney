import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { setBalance } from "../slices/dataSlice";

const NewBalance = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredBalance, setEnteredBalance] = useState("");

  const submitHandler = () => {
    dispatch(
      setBalance({
        balance: enteredBalance,
      })
    );
    setModalVisible(!modalVisible);
    setEnteredBalance("");
    console.log(enteredBalance);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Image
          source={require("../assets/add.png")}
          style={{
            height: 35,
            width: 35,
            resizeMode: "contain",
            left: 297,
            bottom: 74,
            tintColor: "white",
          }}
        />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            backgroundColor: "#AFE1AF",
            height: "100%",
            width: "100%",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image
              source={require("../assets/close.png")}
              style={{ height: 30, width: 30, resizeMode: "contain", top: 100 }}
            />
          </TouchableOpacity>

          <View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ top: 200, fontSize: 25, fontWeight: "200" }}>
                Change Balance
              </Text>
            </View>
            <TextInput
              onChangeText={(balance) => setEnteredBalance(balance)}
              value={enteredBalance}
              placeholder="Add New Balance"
              style={styles.input}
            />
            <TouchableOpacity onPress={submitHandler}>
              <View
                style={{
                  top: 330,
                  alignItems: "center",
                  backgroundColor: "#3EB489",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    textTransform: "uppercase",
                    fontWeight: "300",
                    color: "white",
                  }}
                >
                  Change Balance
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewBalance;

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    top: 300,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
