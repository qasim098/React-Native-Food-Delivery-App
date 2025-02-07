import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
function Cart({ navigation }) {
  const route = useRoute();
  const { cartData = [], updateCart } = route.params || {};
  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };
  const handleRemoveItem = (itemId) => {
    const updatedCart = cartData.filter(item => item.id !== itemId);
    updateCart(updatedCart);
  };
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartData.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateCart(updatedCart);
  };
  const handleIncrement = (itemId) => {
    const item = cartData.find(item => item.id === itemId);
    if (item) {
      handleQuantityChange(itemId, item.quantity + 1);
    }
  };
  const handleDecrement = (itemId) => {
    const item = cartData.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      handleQuantityChange(itemId, item.quantity - 1);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>My Cart</Text>
      </View>

      {cartData.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/3753464.webp")}
          />
          <Text style={styles.emptyCartText}>Your box is empty!</Text>
          <Text style={styles.emptyCartSubtext}>
            Make your box heavy by adding delicious food items.
          </Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("menu")}
          >
            <Text style={styles.addButtonText}>Add Food</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cartContainer}>
          <View style={styles.itemsContainer}>
            {cartData.map((item) => (
              <View key={item.id} style={styles.itemCard}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemPrice}>Rs{item.price}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity 
                      style={styles.quantityButton} 
                      onPress={() => handleDecrement(item.id)}
                    >
                      <AntDesign name="minus" size={16} color="#1DB954" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity 
                      style={styles.quantityButton} 
                      onPress={() => handleIncrement(item.id)}
                    >
                      <AntDesign name="plus" size={16} color="#1DB954" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity 
                  style={styles.removeButton} 
                  onPress={() => handleRemoveItem(item.id)}
                >
                  <Feather name="trash-2" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>Rs:{calculateTotal()}</Text>
          </View>
          <Pressable onPress={() => navigation.navigate("buyconfirm")}>
          <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("buyconfirm")}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
          </Pressable>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headingContainer: {
    marginBottom: 20,
    paddingTop: 50,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#121212",
    textAlign: "center",
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#121212",
    marginBottom: 10,
  },
  emptyCartSubtext: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  addButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  cartContainer: {
    flex: 1,
    marginTop: 20,
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#121212",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1DB954",
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#F0F0F0",
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  removeButton: {
    padding: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#121212",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1DB954",
  },
  checkoutButton: {
    backgroundColor: "#1DB954",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
export default Cart;