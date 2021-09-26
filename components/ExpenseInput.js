import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { setPrice } from "../slices/dataSlice";

const ExpenseInput = (props) => {
  const dispatch = useDispatch();

  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredPrice, setenteredPrice] = useState("");

  const addExpenseHandler = () => {
    const expenseData = [
      "   " + enteredTitle,
      "  --  $" + enteredPrice,
    ];
    props.onAddExpense(expenseData);
    setenteredTitle("");
    setenteredPrice("");

    dispatch(setPrice({
        price: enteredPrice
      }))
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={{bottom: 70, fontSize: 30, color: 'white', fontWeight: '200'}}>Add an Expense</Text>
        <TextInput
          placeholder="Title"
          placeholderTextColor="gray"
          style={styles.input}
          onChangeText={(title) => setenteredTitle(title)}
          value={enteredTitle}
        />
        <TextInput
          placeholder="Price"
          placeholderTextColor="gray"
          style={styles.input}
          onChangeText={(price) => setenteredPrice(price)}
          value={enteredPrice}
        />
        <TouchableOpacity style={styles.close} onPress={props.onCancel}>
          <Image
            source={require("../assets/close.png")}
            style={{
              height: 30,
              width: 30,
              resizeMode: "contain",
              tintColor: "white",
            }}
          />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addExpenseHandler}>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Submit Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27292E",
  },
  input: {
    width: "70%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: "white",
    bottom: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3EB489",
    borderRadius: 20,
    bottom: 25
  },
  close: {
    bottom: 300,
  },
});

export default ExpenseInput;
