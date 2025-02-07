import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const slidedata = [
  {
    id: 1,
    heading: "All your favorite foods",
    description: "Enjoy fresh, delicious meals delivered quickly to your door!",
    image: require("../assets/4367811.webp"),
  },
  {
    id: 2,
    heading: "Get delivery at your doorstep",
    description: "Get your favorite meals delivered to your doorstep, fast and hassle-free",
    image: require("../assets/6381369.webp"),
  },
  {
    id: 3,
    heading: "Fast and Secure Payment Method",
    description: "Enjoy fast, secure, and hassle-free payments for a smooth checkout experience.",
    image: require("../assets/8547543-removebg-preview.png"),
  },
];

function Welcome({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setCurrentIndex(slideIndex);
  };

  return (
    <View style={styles.maincontainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slidedata.map((item, index) => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {slidedata.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonview}>
        <Pressable
          style={styles.loginbutton}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.logintext}>Get Started</Text>
        </Pressable>
        <Pressable
          style={styles.signupbutton}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.signuptext}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 32,
  },
  sliderContainer: {
    marginBottom: 12,
  },
  slide: {
    width: width, 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 16,
  },
  heading: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#2b8a3e",
    textAlign: "center",
  },
  description: {
    fontSize: 17,
    color: "#666",
    textAlign: "center",
    marginVertical: 8,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    marginTop:-32
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
    marginTop:-130
  },
  activeDot: {
    backgroundColor: "#2b8a3e",
    width: 10,
    height: 10,
  },
  buttonview: {
    alignItems: "center",
    marginBottom:42
  },
  loginbutton: {
    backgroundColor: "#2b8a3e",
    borderRadius: 9,
    padding: 12,
    width: "80%",
    alignItems: "center",
    marginBottom: 16,
  },
  signupbutton: {
    backgroundColor: "#dee2e6",
    borderRadius: 9,
    padding: 12,
    width: "80%",
    alignItems: "center",
  },
  logintext: {
    fontSize: 19,
    color: "#fff",
    fontWeight: "bold",
    padding:4
  },
  signuptext: {
    fontSize: 19,
    color: "#2b8a3e",
    fontWeight: "bold",
    padding:4
  },
});