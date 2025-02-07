import { View, Text, StyleSheet, Pressable, Image, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function Payment({ navigation }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  const [submittedCardData, setSubmittedCardData] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  function handleCardData() {
    if (!name || !cardNumber || !expireDate || !cvvNumber) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (!/^(\d{16})$/.test(cardNumber)) {
      Alert.alert("Invalid Card Number", "Card number must be 16 digits.");
      return;
    }

    const cardType = cardNumber.startsWith("4")
      ? "Visa"
      : cardNumber.startsWith("5")
      ? "MasterCard"
      : "Unknown";

    const cardData = {
      name,
      cardNumber,
      expireDate,
      cvvNumber,
      cardType,
    };

    setSubmittedCardData(cardData);
    setName("");
    setCardNumber("");
    setExpireDate("");
    setCvvNumber("");
  }

  return (
    <View style={styles.mainContainer}>
    
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.navigate("tabscreen", { screen: 'account' })}>
          <Ionicons name="arrow-back" size={30} color="green" />
        </Pressable>
        <Text style={styles.headingText}>Add Card</Text>
      </View>

    
      <View>
        <Image
          style={styles.cardImage}
          source={require("../assets/9723647.webp")}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={[
            styles.input,
            focusedInput === "name" && styles.inputFocused,
          ]}
          value={name}
          onChangeText={setName}
          onFocus={() => setFocusedInput("name")}
          onBlur={() => setFocusedInput(null)}
          placeholder="Enter your full name"
        />

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={[
            styles.input,
            focusedInput === "cardNumber" && styles.inputFocused,
          ]}
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="number-pad"
          onFocus={() => setFocusedInput("cardNumber")}
          onBlur={() => setFocusedInput(null)}
          placeholder="XXXX XXXX XXXX XXXX"
        />

        <View style={styles.rowContainer}>
          <View style={styles.rowItem}>
            <Text style={styles.label}>Expire Date</Text>
            <TextInput
              style={[
                styles.input,
                focusedInput === "expireDate" && styles.inputFocused,
              ]}
              value={expireDate}
              onChangeText={setExpireDate}
              placeholder="MM/YY"
              keyboardType="number-pad"
              onFocus={() => setFocusedInput("expireDate")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>

          <View style={styles.rowItem}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={[
                styles.input,
                focusedInput === "cvvNumber" && styles.inputFocused,
              ]}
              value={cvvNumber}
              onChangeText={setCvvNumber}
              keyboardType="number-pad"
              onFocus={() => setFocusedInput("cvvNumber")}
              onBlur={() => setFocusedInput(null)}
              placeholder="XXX"
            />
          </View>
        </View>
      </View>

   
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleCardData}>
          <Text style={styles.buttonText}>Add Card</Text>
        </Pressable>
      </View>

     
      {submittedCardData && (
        <View style={styles.cardDisplayBox}>
          <Image
            style={styles.cardLogo}
            source={
              submittedCardData.cardType === "Visa"
                ? require("../assets/download__1_-removebg-preview.png")
                : require("../assets/download__2_-removebg-preview.png")
            }
          />
          <Text style={styles.cardInfo}>Name: {submittedCardData.name}</Text>
          <Text style={styles.cardInfo}>
            Card Number: **** **** **** {submittedCardData.cardNumber.slice(-4)}
          </Text>
          <Text style={styles.cardInfo}>
            Expire Date: {submittedCardData.expireDate}
          </Text>
        </View>
      )}
    </View>
  );
}

export default Payment;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 18,
    backgroundColor: "#fff",
    marginTop:8
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    
  },
  headingText: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 12,
    marginLeft:92
  },
  cardImage: {
    alignSelf: "center",
    width: 180,
    height: 180,
    marginVertical: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#868e96",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
  },
  inputFocused: {
    borderColor: "#1DB954",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowItem: {
    width: "48%",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#1DB954",
    padding: 12,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  cardDisplayBox: {
    backgroundColor: "#f1f3f5",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    alignItems: "center",
  },
  cardLogo: {
    width: 80,
    height: 50,
    marginBottom: 16,
  },
  cardInfo: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
});
