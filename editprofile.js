import { View,Text,StyleSheet, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons';
function Editprofile({navigation}){
 return(<View style={styles.maincontainer}>
   <View style={styles.headingbox}>
      <View>
         <Pressable onPress={()=>navigation.navigate("tabscreen", { screen: 'account' })}>
<Ionicons name="arrow-back" size={28} color={"green"}/>
         </Pressable>
      </View>
   <View style={styles.heading}>
        <Text style={styles.headingtext}>
        Edit profile
        </Text>
    </View>
   </View>
    
 </View>)
}
export default Editprofile;
const styles=StyleSheet.create({
    maincontainer: {
        flex: 1,
        padding: 18,
        backgroundColor: "#fff", 
    },
    headingtext:{
        fontSize:22,
        fontWeight:"600",
        marginLeft:78
    },
    headingbox:{
      display:"flex",
      flexDirection:"row",
      margin:12,
      marginTop:38
    }
})