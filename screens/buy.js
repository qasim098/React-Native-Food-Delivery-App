import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function Buyscreen({ route, navigation }) {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const handlePlaceOrder = () => {
    if (!selectedPayment || !selectedAddress) {
      Alert.alert("Missing Information", "Please select both payment method and address.");
      return;
    }
    Alert.alert("Order Placed", "Your order has been placed successfully!");
    navigation.navigate("tabscreen")
  };
  return (
    <View style={styles.container}>
        <View>
             <View style={styles.headerContainer}>
                    <Pressable onPress={() => navigation.navigate("tabscreen")}>
                      <Ionicons name="arrow-back" size={30} color="green" />
                    </Pressable>
                    </View>
        </View>
      <Text style={styles.header}>Choose Payment Method</Text>

      <Pressable
        style={[styles.option, selectedPayment === "Card" && styles.selectedOption]}
        onPress={() => setSelectedPayment("Card")}
      >
        <Ionicons name="card-outline" size={24} color={selectedPayment === "Card" ? "green" : "#A0A0A0"} />
        <Text style={styles.optionText}>Pay with Card</Text>
      </Pressable>

      <Pressable
        style={[styles.option, selectedPayment === "Cash" && styles.selectedOption]}
        onPress={() => setSelectedPayment("Cash")}
      >
        <Ionicons name="cash-outline" size={24} color={selectedPayment === "Cash" ? "#1DB954" : "#A0A0A0"} />
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </Pressable>

      <Text style={styles.header}>Choose Delivery Address</Text>

      <Pressable
        style={[styles.option, selectedAddress === "Home" && styles.selectedOption]}
        onPress={() => setSelectedAddress("Home")}
      >
        <Ionicons name="home-outline" size={24} color={selectedAddress === "Home" ? "#1DB954" : "#A0A0A0"} />
        <Text style={styles.optionText}>Home Address: </Text>
      </Pressable>

      <Pressable
        style={[styles.option, selectedAddress === "Office" && styles.selectedOption]}
        onPress={() => setSelectedAddress("Office")}
      >
        <Ionicons name="business-outline" size={24} color={selectedAddress === "Office" ? "#1DB954" : "#A0A0A0"} />
        <Text style={styles.optionText}>Office Address: </Text>
      </Pressable>

      <Pressable style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
    </View>
  );
}

export default Buyscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headerContainer:{
    marginTop:32,
    marginBottom:23
  },
  header: {
    color: "#121212",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#1DB954",
  },
  optionText: {
    color: "#121212",
    marginLeft: 10,
    fontSize: 16,
  },
  placeOrderButton: {
    backgroundColor: "#1DB954",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
