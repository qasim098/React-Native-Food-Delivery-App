import { View, Text, StyleSheet, Pressable, TextInput} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useContext } from "react";
import { Authcontext } from "../contextstore";
import Productdisplay from "./productdisplay";
import Slider from "./slider";
function Home({navigation}) {
    const authctx = useContext(Authcontext);

    function logout() {
        authctx.logout("");
    }

    return (
        <View style={styles.maincontainer}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Home</Text>
                <Pressable onPress={() => navigation.navigate("notificaton")} style={styles.iconstyle}>
                    <Ionicons name="notifications" size={28} color="green" />
                </Pressable>
            </View>
            <View style={styles.searchbox}>
            <View style={styles.inputstyle}>
             <Ionicons name="search" size={22} color="gray"  style={styles.iconstylesearch}/>
              <TextInput style={styles.inputtext} placeholder="Search your favourite dish"/>
             </View>
             <View>
             <Ionicons name="list" size={34} color="green" style={styles.iconstylelist} />
             </View>
            </View>
    
            <View style={styles.content}>
                <Slider/>
            </View>
            <View style={styles.productbox}>
            <Productdisplay navigation={navigation}/>
            </View>
           
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        padding: 14,
        backgroundColor: "#fff", 
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 22,
    },
    headertext: {
        fontSize: 24,
        color: "black",
        fontWeight: "700",
        marginLeft:140
    },
    iconstyle: {
        padding: 8,
        marginTop:2
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    searchbox:{
        display:"flex",
        flexDirection:"row",
        gap:8
    },
    textstyle: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        paddingHorizontal: 20, 
    },
    inputstyle:{
        padding:8,
        width:"85%",
        borderRadius:10,
        marginLeft:8,
        backgroundColor:"#f1f3f5"
    },
    iconstylelist: {
        marginTop:4,
        marginLeft:4
      },
      inputtext:{
        marginLeft:32,
        marginTop:-21,
        fontSize:17
      },
     
});
