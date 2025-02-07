import { View, Text, StyleSheet, Pressable, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Authcontext } from "../contextstore";
const options = [
  { id: "1", title: "Edit Profile", icon: "person", navigateTo: "editprofile" },
  { id: "2", title: "Notifications", icon: "notifications", navigateTo: "notificaton" },
  { id: "3", title: "Payment", icon: "card", navigateTo: "payment" },
  { id: "4", title: "Address", icon: "location", navigateTo: "address" },
  { id: "5", title: "About Us", icon: "information-circle", navigateTo: "about" },
  { id: "6", title: "Terms and Conditions", icon: "document", navigateTo: "termconditionhome" },
  { id: "7", title: "Help Center", icon: "help-circle", navigateTo: "help" },
];

function Account({ navigation }) {
  const authctx = useContext(Authcontext);

  function logout() {
      authctx.logout("");
  }
  const renderOption = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        styles.optionContainer,
        pressed && { backgroundColor: "#f2f2f2" },
      ]}
      onPress={() => navigation.navigate(item.navigateTo)}
    >
      <View style={styles.optionContent}>
        <Ionicons name={item.icon} size={24} color="#1DB954" />
        <Text style={styles.optionText}>{item.title}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>My Account</Text>
      </View>

     
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/4159821.webp")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Muhammad Qasim</Text>
      </View>

     
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={renderOption}
        contentContainerStyle={styles.optionList}
        showsVerticalScrollIndicator={false} 
      />

     
      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
}

export default Account;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  heading: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#121212",
    textAlign: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#121212",
  },
  optionList: {
    paddingBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#121212",
    marginLeft: 15,
  },
  logoutButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: "#dee2e6",
    elevation: 5,
    shadowColor: "#dee2e6",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom:10
  },
  logoutText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "red",
  },
});

