import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Sample notification data
const data = [
 
  {
    id: 1,
    title: "New Update Available",
    description: "Version 2.0 is now available with exciting features.",
    datetime: "Jan 24, 2025 - 2:30 PM",
  },
  {
    id: 2,
    title: "Payment Successful",
    description: "Your payment of Rs. 1500 was processed successfully.",
    datetime: "Jan 22, 2025 - 8:15 PM",
  },
  {
    id: 3,
    title: "Welcome to App!",
    description: "Thank you for joining us! Explore our services today.",
    datetime: "Jan 20, 2025 - 9:00 AM",
  },
];

function Notification({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.notificationBox}>
      <View style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={30} color={"green"} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <Text style={styles.datetimeText}>{item.datetime}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headingBox}>
        <Pressable onPress={() => navigation.navigate("tabscreen")}>
          <Ionicons name="arrow-back" size={28} color={"green"} />
        </Pressable>
        <Text style={styles.headingText}>Notifications</Text>
      </View>

      {/* Notification List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginTop: 32,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 84,

  },
  listContainer: {
    paddingHorizontal: 18,
  },
  notificationBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#f1f3f5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
  },
  datetimeText: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
});
