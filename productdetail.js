import { View, Text, StyleSheet, Image, Pressable, TextInput, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
function Productdetail({ route, navigation }) {
    const [quantity, setQuantity] = useState("1");
    const [cartitem, setcartitem] = useState([]);
    const { id, name, price, description, image } = route.params;
    const detaildata = {
        name: name,
        price: price,
        image: image,
        description: description,
        id: id,
        quantity: quantity,
    };
    function addhandel() {
        setQuantity((prevQuantity) => (Number(prevQuantity) + 1).toString());
    }
    function subtracthandel() {
        setQuantity((prevQuantity) => {
            const newQuantity = Number(prevQuantity) - 1;
            return newQuantity >= 1 ? newQuantity.toString() : "1";
        });
    }
    function Addcart() {
        const newitem = {
            title: detaildata.name, 
            price: price , 
            quantity: quantity,
            id: id,
            image: detaildata.image,
        };
        setcartitem((previousItems) => {
            const updatedCart = [...previousItems, newitem];
            navigation.navigate("tabscreen", { 
                screen: 'cart', 
                params: { cartData: updatedCart }
            });
            
            return updatedCart;
        });
    }
    function BuyNow() {
        Alert.alert("Buy Now", "Proceed to checkout?");
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headericon}>
              <View>
              <Pressable onPress={() => navigation.navigate("tabscreen")} style={styles.backButton}>
                <Ionicons name="arrow-back" size={28} color="green" />
            </Pressable>
              </View>
              <View>
              <Pressable onPress={() => navigation.navigate("tabscreen")} style={styles.backButton}>
                <Ionicons name="heart-outline" size={28} color="green" />
            </Pressable>
              </View>
            </View>
            <Image style={styles.imagestyle} source={detaildata.image} />
            <View style={styles.detailcontainer}>
                <Text style={styles.titalstyle}>{detaildata.name}</Text>
                <Text style={styles.pricestyle}>{"RS: "}{detaildata.price}</Text>
            </View>
            <View style={styles.buttoncpntainer}>
                <Pressable style={styles.buttonstyle}>
                    <Ionicons name="information-circle" size={20} color="green" />
                    <Text style={styles.buttontext}>Details</Text>
                </Pressable>
                <Pressable style={styles.buttonstyle}>
                    <Ionicons name="star" size={20} color="green" />
                    <Text style={styles.buttontext}>Reviews</Text>
                </Pressable>
            </View>
            <Text style={styles.descriptionstyle}>{detaildata.description}</Text>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Quantity:</Text>
                <View style={styles.quantitySelector}>
                    <Pressable onPress={subtracthandel} style={styles.quantityButton}>
                        <Ionicons name="remove" size={20} color="white" />
                    </Pressable>
                    <TextInput
                        style={styles.inputtext}
                        value={quantity}
                        onChangeText={setQuantity}
                        keyboardType="decimal-pad"
                    />
                    <Pressable onPress={addhandel} style={styles.quantityButton}>
                        <Ionicons name="add" size={20} color="white" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.actionButtonsContainer}>
                <Pressable onPress={Addcart} style={[styles.actionButton, styles.addToCartButton]}>
                    <Ionicons name="cart" size={20} color="black" />
                    <Text style={[styles.actionButtonText,{color:"black"}]}>Add To Cart</Text>
                </Pressable>
                <Pressable onPress={BuyNow} style={[styles.actionButton, styles.buyNowButton]}>
                    <Ionicons name="flash" size={20} color="white" />
                    <Text style={styles.actionButtonText}>Order Now</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}
export default Productdetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    backButton: {
        marginTop: 40,
        marginLeft: 16,
    },
    imagestyle: {
        width: "100%",
        height: 260,
        borderRadius: 12,
        marginTop: 16,
    },
    detailcontainer: {
        marginTop: 24,
        alignItems: "center",
    },
    titalstyle: {
        fontSize: 28,
        fontWeight: "600",
        color: "#333",
    },
    pricestyle: {
        fontSize: 24,
        fontWeight: "500",
        color: "#2f9e44",
        marginTop: 8,
    },
    buttoncpntainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24,
        gap: 16,
    },
    buttonstyle: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#f1f3f5",
        gap: 8,
    },
    buttontext: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    descriptionstyle: {
        marginTop: 24,
        fontSize: 16,
        color: "#666",
        lineHeight: 24,
        paddingHorizontal: 16,
    },
    quantityContainer: {
        marginTop: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    quantityLabel: {
        fontSize: 18,
        fontWeight: "500",
        color: "#333",
    },
    quantitySelector: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    quantityButton: {
        backgroundColor: "#2f9e44",
        borderRadius: 8,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    inputtext: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 8,
        width: 60,
        textAlign: "center",
        fontSize: 16,
    },
    actionButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        paddingHorizontal: 16,
        gap: 16,
    },
    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 24,
        flex: 1,
        justifyContent: "center",
        gap: 8,
    },
    addToCartButton: {
        backgroundColor: "#ced4da",
        
    },
    buyNowButton: {
        backgroundColor: "#2f9e44",
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
    },
    headericon:{
      display:"flex",
      flexDirection:"row",
      gap:245
    }
});