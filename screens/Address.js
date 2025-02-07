import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Address({ navigation }) {
  const [homeAddress, setHomeAddress] = useState({
    houseNo: "",
    streetNo: "",
    area: "",
    province: "",
  });

  const [officeAddress, setOfficeAddress] = useState({
    officeNo: "",
    streetNo: "",
    area: "",
    province: "",
  });

  const [savedHomeAddress, setSavedHomeAddress] = useState();
  const [savedOfficeAddress, setSavedOfficeAddress] = useState();

  const handleSave = () => {
    setSavedHomeAddress(homeAddress);
    setSavedOfficeAddress(officeAddress);
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headingbox}>
        <Pressable style={styles.iconstyle1} onPress={() => navigation.navigate("tabscreen", { screen: 'account' })}>
          <Ionicons name="arrow-back" size={30} color={"#1DB954"} />
        </Pressable>
        <Text style={styles.headingtext}>Address</Text>
        <Pressable style={styles.iconstyle}>
        <Ionicons name="add" size={30} color={"#1DB954"} />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {savedHomeAddress && (
          <View style={styles.savedAddressBox}>
            <Text style={styles.sectionTitle}>Home Address</Text>
            <Text>House No: {savedHomeAddress.houseNo}</Text>
            <Text>Street No: {savedHomeAddress.streetNo}</Text>
            <Text>Area: {savedHomeAddress.area}</Text>
            <Text>Province: {savedHomeAddress.province}</Text>
          </View>
        )}
        {savedOfficeAddress && (
          <View style={styles.savedAddressBox}>
            <Text style={styles.sectionTitle}>Office Address</Text>
            <Text>Office No: {savedOfficeAddress.officeNo}</Text>
            <Text>Street No: {savedOfficeAddress.streetNo}</Text>
            <Text>Area: {savedOfficeAddress.area}</Text>
            <Text>Province: {savedOfficeAddress.province}</Text>
          </View>
        )}
        <View style={styles.inputContainer}>
          <Text style={styles.sectionTitle}>Add Home Address</Text>
          <View style={styles.textrow}>
            <TextInput
              style={styles.input}
              placeholder="House No"
              value={homeAddress.houseNo}
              onChangeText={(text) => setHomeAddress({ ...homeAddress, houseNo: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Street No"
              value={homeAddress.streetNo}
              onChangeText={(text) => setHomeAddress({ ...homeAddress, streetNo: text })}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Area"
            value={homeAddress.area}
            onChangeText={(text) => setHomeAddress({ ...homeAddress, area: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="City Name"
            value={homeAddress.province}
            onChangeText={(text) => setHomeAddress({ ...homeAddress, province: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.sectionTitle}>Add Office Address</Text>
          <View style={styles.textrow}>
            <TextInput
              style={styles.input}
              placeholder="Office No"
              value={officeAddress.officeNo}
              onChangeText={(text) => setOfficeAddress({ ...officeAddress, officeNo: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Street No"
              value={officeAddress.streetNo}
              onChangeText={(text) => setOfficeAddress({ ...officeAddress, streetNo: text })}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Area"
            value={officeAddress.area}
            onChangeText={(text) => setOfficeAddress({ ...officeAddress, area: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="City Name"
            value={officeAddress.province}
            onChangeText={(text) => setOfficeAddress({ ...officeAddress, province: text })}
          />
        </View>
      </ScrollView>
      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
}
export default Address;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headingbox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    
    
  },
  headingtext: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1DB954",
    marginLeft: 20,
    marginTop:32,
    marginLeft:98
  },
  iconstyle1:{
    marginTop:36
  },
  iconstyle:{
    marginLeft:78,
    marginTop:28
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  savedAddressBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  textrow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  saveButton: {
    backgroundColor: "#1DB954",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

