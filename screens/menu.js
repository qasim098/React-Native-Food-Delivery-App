import { View, Text, StyleSheet, ScrollView, Pressable, Image, TextInput } from "react-native";
import { Mealdata } from "./productdisplay";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function Menu({ navigation }) {
    const [categoryactive, setcategoryavtive] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <View style={styles.maincontainer}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Our Menu</Text>
                <Pressable onPress={() => navigation.navigate("cart")} style={styles.iconstyle}>
                    <Ionicons name="cart" size={28} color="green" />
                </Pressable>
            </View>
            <View  style={styles.headingbox}>
                <View style={styles.titleContainer}>
                <Text style={styles.maintext}>Our Food</Text>
                <Text style={styles.mainsubtext}>Special For You</Text>
                </View>
                <View>
                    <Pressable onPress={()=>navigation.navigate("makemealwelcome")}>
                    <Image style={styles.imagestyle} source={require("../assets/4800746.webp")} />
                    </Pressable>
                 
                </View>
            </View>
            <View style={styles.searchbox}>
                <View style={styles.inputstyle}>
                    <Ionicons name="search" size={22} color="gray" style={styles.iconstylesearch} />
                    <TextInput
                        style={styles.inputtext}
                        placeholder="Search your favourite dish"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <Pressable style={styles.filterButton}>
                    <Ionicons name="list" size={34} color="green" />
                </Pressable>
            </View>
            <Text style={styles.toptext}>Category:</Text>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
                {Mealdata.map((item) => (
                    <Pressable
                        key={item.id}
                        style={[
                            styles.buttonstyle,
                            { backgroundColor: categoryactive === item.id ? '#2b8a3e' : '#f1f3f5' }
                        ]}
                        onPress={() => setcategoryavtive(item.id)}
                    >
                        <Text style={[styles.itemtext, { color: categoryactive === item.id ? "white" : "black" }]}>
                            {item.tital}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
            </View>
            <ScrollView style={styles.productScroll}>
                <View style={styles.productcontainer}>
                    {categoryactive === null ? (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.productContainermenu}>
                                {Mealdata.map((item) => (
                                    <View key={item.id}>
                                        {item.itemlist.map((items) => (
                                            <View style={styles.itemstylemenu} key={items.id}>
                                                <Image style={styles.productimagemenu} source={items.image} />
                                                <Text style={styles.productnamemenu}>{items.name}</Text>
                                                <Text style={styles.productpricemenu}>{'Rs:'}{items.price}</Text>
                                                <Pressable style={styles.producticonmenu}>
                                                    <Ionicons style={styles.iconcartstylemenu} name="add" size={26} />
                                                </Pressable>
                                            </View>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    ) : (
                        Mealdata.find((item) => item.id === categoryactive)?.itemlist.map((items) => (
                            <Pressable
                                key={items.id}
                                style={styles.productbox}
                                onPress={() => navigation.navigate('productdetail', {
                                    id: items.id,
                                    image: items.image,
                                    name: items.name,
                                    price: items.price,
                                    description: items.description,
                                })}
                            >
                                <Image style={styles.productimage} source={items.image} />
                                <Text style={styles.producttext}>{items.name}</Text>
                                <Text style={styles.prouctprice}>Rs: {items.price}</Text>
                                <View style={styles.producticon}>
                                    <Ionicons name="add" size={26} color={"white"} />
                                </View>
                            </Pressable>
                        ))
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
export default Menu;
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    headingbox:{
        flexDirection:"row"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap:68,
        marginBottom: 20,
        marginTop: 22,
    },
    headertext: {
        fontSize: 22,
        color: "black",
        fontWeight: "600",
        marginLeft:130
    },
    imagestyle:{
        width:60,
        height:60,
        marginLeft:94
    },
    iconstyle: {
        padding: 8,
    },
    titleContainer: {
        marginBottom: 20,
    },
    maintext: {
        fontSize: 18,
        color: "#868e96",
        fontWeight: "600",
    },
    mainsubtext: {
        fontSize: 24,
        color: "green",
        fontWeight: "700",
    },
    searchbox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    inputstyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#f1f3f5",
    },
    iconstylesearch: {
        marginRight: 10,
    },
    inputtext: {
        flex: 1,
        fontSize: 16,
    },
    filterButton: {
        marginLeft: 10,
    },
    toptext: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
    },
    categoryRow: {
        marginBottom: 20,
        
    },
    buttonstyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        minWidth: 80,
        
    },
    itemtext: {
        fontSize: 16,
        fontWeight: "500",
    },
    productScroll: {
        flex: 1,
    },
    productcontainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    productbox: {
        width: "48%",
        backgroundColor: "#f8f9fa",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    productimage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    producttext: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 10,
    },
    prouctprice: {
        fontSize: 14,
        color: "green",
        marginTop: 5,
    },
    producticon: {
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "green",
        borderRadius: 20,
        padding: 5,
    },
    productContainermenu: {
        flexDirection: "column",
    },
    itemstylemenu: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    productimagemenu: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    productnamemenu: {
        fontSize: 16,
        fontWeight: "600",
    },
    productpricemenu: {
        fontSize: 14,
        color: "green",
    },
    producticonmenu: {
        marginLeft: "auto",
    },
    iconcartstylemenu: {
        color: "green",
    },
});