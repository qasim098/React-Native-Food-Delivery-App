import { View,Text ,StyleSheet,Pressable, TextInput} from "react-native"
import { Ionicons } from '@expo/vector-icons';
function Forgetscreen({navigation}){
    return(<View style={styles.maincontainer}>
        <View style={styles.iconstyle}>
            <Pressable onPress={()=>navigation.navigate('login')}>
                <Ionicons name="arrow-back" size={28} color="green"/>
            </Pressable>
        </View>
        <View>
        <Text style={styles.textheading}>Forget Password: </Text>
        <Text style={styles.headingchild}>
         Please enter the email linked to your account,and we'll send you instructions to reset your password
        </Text>
        </View>
      <View style={styles.inputbox}>
        <TextInput placeholder="Enter Your Email"/>
      </View>
      <View style={styles.buttonbox}>
        <Pressable style={styles.codebutton}>
          <Text style={styles.buttontext}>Send code</Text>
        </Pressable>
      </View>
    </View>)
}
export default Forgetscreen;
const styles=StyleSheet.create({
    maincontainer:{
        margin:32,
        marginTop:43
    },
    iconstyle:{
        marginTop:16,
    },
    buttonbox:{
        marginTop:32
    },
    codebutton:{
        backgroundColor:"#2b8a3e",
        color:"white",
        borderRadius:9,
        padding:4
    },
    buttontext:{
        fontSize:24,
        color:"white",
        fontWeight:"600",
        marginLeft:100
    },
    textheading:{
        marginTop:24,
        fontSize:24,
        fontWeight:"600"
    },
    headingchild:{
        fontSize:18,
        color:"#868e96",
        marginBottom:16,
        marginTop:18
    },
    inputbox:{
        borderWidth:0.07,
      borderRadius:9,
      backgroundColor:"#e9ecef",
      padding:9
      },
})