import { useContext,useState } from "react";
import { View,Text,StyleSheet, Pressable, TextInput,Image, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Checkuser } from "../firebaseauth";
import { Authcontext } from "../contextstore";
function Login({navigation}){
    const authctx = useContext(Authcontext);
    const [email,setemail]=useState();
    const[password,setpassword]=useState();
function handelemail(email){
setemail(email)
}
function handelpassword(password){
setpassword(password)
}
async function loginbuttonhandel() {
    const userlogin = {
        email: email,
        password: password
    };

    if (!email || !password) {
        Alert.alert("Please enter email and password");
        return; 
    }

    if (!email.includes('@')) {
        Alert.alert("Email must contain @ sign");
        return;
    }

    if (password.length < 6) {
        Alert.alert("Password must be 6 characters long");
        return; 
    }
    try {
        const token = await Checkuser(email, password);
        if (token) {
          authctx.authenicate(token);
          setemail("");
          setpassword("");
          Alert.alert("Authentication successful");
        }
      } catch (error) {
        Alert.alert("Student not found!", "Enter correct email password");
      }
    console.log(userlogin);
}

    return(<View style={styles.maincontainer}>
        <View style={styles.iconstyle}>
            <Pressable onPress={()=>navigation.navigate('welcome')}>
                <Ionicons name="arrow-back" size={28} color="green"/>
            </Pressable>
        </View>
        <View>
            <Text style={styles.headingtext}>Welcome Back 👋</Text>
            <View>
                <Text style={styles.headingchild}>Login to your account</Text>
                </View>
        </View>
        <View>
            <View>
                <Text style={styles.inputheading}>Email:</Text>
                <View style={styles.inputbox}>
                    <TextInput value={email} onChangeText={handelemail} placeholder="Your Email"/>
                </View>
            </View>
            <View>
                <Text style={styles.inputheading}>Password:</Text>
                <View style={styles.inputbox}>
                    <TextInput value={password} onChangeText={handelpassword} placeholder="Your Passwords" />
                </View>
            </View>
        </View>
        <View>
            <Pressable onPress={()=>navigation.navigate("forget")}>
            <Text style={styles.forgetext}>Forget Password?</Text>
            </Pressable>
           
        </View>
        <View style={styles.loginbox}>
            <Pressable style={styles.loginbutton} onPress={loginbuttonhandel}>
                <Text style={styles.logintext}>Login</Text>
            </Pressable>
        </View>
        <View style={styles.signupview}>
            <Pressable onPress={()=>navigation.navigate('signup')}>
                <Text style={styles.signuptextmain}>Don't have an account?<Text style={styles.signuptext}>Sign up</Text></Text>
            </Pressable>
        </View>
        <View >
            <Text style={styles.withtext}>____________Or with____________</Text>
        </View>
        <View style={styles.socialicon}>
            <View style={styles.logo}>
             <Image  style={styles.googleLogo} source={require("../assets/download-removebg-preview.png")}/>
            </View>
            <View>
              <Pressable>
                <Text style={styles.icongoogletext}>Login with Google</Text>
            </Pressable>
            </View>
           
        </View>
        <View style={styles.socialicon}>
            <View style={styles.logo}>
            <Ionicons name="logo-apple" size={24}/>
            </View>
            <View>
                 <Pressable>
                <Text style={styles.icontext}>Login with Apple</Text>
            </Pressable>
            </View>
           
        </View>
    </View>);
}
export default Login;
const styles=StyleSheet.create({
    maincontainer:{
        margin:36
    },
    headingtext:{
        marginTop:38,
        fontSize:24,
        fontWeight:"600",
    },
    headingchild:{
        fontSize:18,
        color:"#868e96",
        marginBottom:12
    },
    inputheading:{
        fontSize:20,
        fontWeight:"500",
        marginTop:12,
        marginBottom:10,
        marginLeft:8
    },
    inputbox:{
      borderWidth:0.07,
    borderRadius:9,
    backgroundColor:"#e9ecef",
    padding:9
    },
    forgetext:{
        fontSize:17,
        fontWeight:"500",
        marginTop:12,
        color:"#2b8a3e"
    },
    loginbox:{
        marginTop:32
    },
    loginbutton:{
        backgroundColor:"#2b8a3e",
        color:"white",
        borderRadius:9,
        padding:4
    },
    logintext:{
        fontSize:24,
        color:"white",
        fontWeight:"600",
        marginLeft:120
    },
    socialicon:{
        display:"flex",
        flexDirection:"row",
        gap:12,
        marginTop:32,
        borderWidth:0.6,
        borderRadius:9,
        padding:6,
        width:"80%",
        marginLeft:26,
        color:"#868e96",
    },
    iconstyle:{
        marginTop:18,
    },
    logo:{
        marginLeft:6
    },
    googleLogo: {
        width: 32,  
        height: 32,
        resizeMode: 'contain', 
    },
    icontext:{
        fontSize:17,
        marginLeft:16
    },
    icongoogletext:{
        fontSize:17,
        marginLeft:8,
        marginTop:4
    },
    signupview:{
        marginTop:20,
        marginLeft:42,
    },
    signuptextmain:{
        fontSize:16
    },
    signuptext:{
        fontSize:16,
        fontWeight:"600",
        color:"#2b8a3e"
    },
    withtext:{
        fontSize:18,
        marginTop:32,
        color:"#868e96",
        marginBottom:10
    }
})