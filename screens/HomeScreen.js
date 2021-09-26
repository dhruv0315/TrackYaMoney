import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { ProgressChart, LineChart } from "react-native-chart-kit";

import ExpenseInput from "../components/ExpenseInput";
import ExpenseItem from "../components/ExpenseItem";
import NewBalance from "../components/NewBalance";
import { useSelector } from "react-redux";
import { selectBalance } from "../slices/dataSlice";

const HomeScreen = () => {
  const [expenseItems, setExpenseItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const balance = useSelector(selectBalance);

  const addExpense = (expense) => {
    setExpenseItems((currentExpense) => [
      ...currentExpense,
      { id: Math.random().toString(), value: expense },
    ]);
    setIsAddMode(false);
  };

  const removeExpenseHandler = (expenseId) => {
    setExpenseItems((currentExpenses) => {
      return currentExpenses.filter((expense) => expense.id !== expenseId);
    });
  };

  const cancelExpenseHandler = () => {
    setIsAddMode(false);
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const data = {
    data: [0.1, 0.3, 0.7],
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#27292E",
      }}
    >
      <SafeAreaView style={{ flex: 1, right: 50 }}>
        <Text
          style={{ color: "white", fontSize: 40, fontWeight: "200", top: 15 }}
        >
          Welcome Back
        </Text>
        <Text
          style={{ color: "white", fontSize: 40, fontWeight: "300", top: 8 }}
        >
          Dhruv
        </Text>
        <NewBalance />
      </SafeAreaView>

      <View style={styles.balanceContainer}>
        <View>
          <ProgressChart
            data={data}
            width={250}
            height={170}
            strokeWidth={16}
            radius={20}
            chartConfig={chartConfig}
            hideLegend={false}
            style={{ left: 33 }}
          />
          <View style={{ flexDirection: "row", left: 7 }}>
            <View style={{ left: 60, bottom: -10 }}>
              <Text style={{ fontWeight: "200", color: 'white' }}>Your Balance: </Text>
            </View>
            <View style={{ left: 65, bottom: 2 }}>
              <Text style={{ fontSize: 30, fontWeight: "600", color: "white" }}>
                ${balance.balance}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsAddMode(true)}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            top: 15,
            textTransform: "uppercase",
            fontWeight: "300",
          }}
        >
          Add an Expense
        </Text>
      </TouchableOpacity>
      <ExpenseInput
        visible={isAddMode}
        onAddExpense={addExpense}
        onCancel={cancelExpenseHandler}
      />
      <View
        style={{
          top: 400,
          height: 450,
          width: "100%",
          backgroundColor: "#383838",
          position: "absolute",
          borderRadius: 25,
        }}
      >
        <Text></Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={expenseItems}
        showsVerticalScrollIndicator={false}
        style={{ height: 75, bottom: 110 }}
        renderItem={(itemData) => (
          <ExpenseItem
            id={itemData.item.id}
            onDelete={removeExpenseHandler}
            expense={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#3EB489",
    borderRadius: 25,
    position: "absolute",
    zIndex: 100,
    top: 410,
  },
  balanceContainer: {
    height: 210,
    width: "90%",
    backgroundColor: "#3EB489",
    bottom: 140,
    borderRadius: 25,
  },
});

export default HomeScreen;
