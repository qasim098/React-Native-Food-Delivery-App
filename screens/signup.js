import { useContext,useState } from "react";
import { View,Text,StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Authcontext } from "../contextstore";
import { Createuser } from "../firebaseauth";
function Signup({navigation}){
    const authctx = useContext(Authcontext);
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const[password,setpassword]=useState();
    const[confirmpassword,setconfirmpassword]=useState();
    function namehandel(name){
    setname(name)
    }
    function emailhandel(email){
        setemail(email)
    }
    function handelpassword(password){
        setpassword(password)
    }
    function handelconfirmpassword(confirmpassword){
        setconfirmpassword(confirmpassword)
    }
    function signupdata(){
        if(!password===confirmpassword){
            Alert.alert("Password and Confirm Password must match")
        }
        const signupdata={
            name:name,
            email:email,
            password:password
        };
        if (!email || !password || !name ||!confirmpassword) {
            Alert.alert("All input fields must be filled.");
            return; 
        }
    
        if (!email.includes('@')) {
            Alert.alert("Email must contain the '@' sign.");
            return;
        }
        if(!password===confirmpassword){
            Alert.alert("Password and Confirm Password must be same")
        }
    
        if (password.length < 6) {
            Alert.alert("Password must be at least 6 characters long");
            return; 
        }
    
        console.log(signupdata);
        Createuser(email, confirmpassword);
        Alert.alert("Register successfully");
        setemail("");
        setname("");
        setpassword("");
        setconfirmpassword("");
    }
   return(<View style={styles.maincontainer}>
        <View style={styles.iconstyle}>
            <Pressable onPress={()=>navigation.navigate('welcome')}>
                <Ionicons name="arrow-back" size={24} color="green"/>
            </Pressable>
        </View>
        <View>
            <Text style={styles.headingtext}>Sign Up</Text>
            <Text style={styles.headingchild}>
            Sign up and choose favorite menu!
            </Text>
        </View>
        <View>
            <View>
            <Text style={styles.inputheading}>Name:</Text>
            <View style={styles.inputbox}>
                <TextInput value={name} onChangeText={namehandel} placeholder="Your Name"/>
            </View>
            </View>
            <View>
            <Text style={styles.inputheading}>Email:</Text>
            <View style={styles.inputbox}>
                <TextInput value={email} onChangeText={emailhandel} placeholder="Your Email"/>
            </View>
            </View>
            <View>
            <Text style={styles.inputheading}>Password:</Text>
            <View style={styles.inputbox}>
                <TextInput value={password} onChangeText={handelpassword} placeholder="Your Password"/>
            </View>
            </View>
            <View>
            <Text style={styles.inputheading}>Confirm Password:</Text>
            <View style={styles.inputbox}>
                <TextInput value={confirmpassword} onChangeText={handelconfirmpassword} placeholder="Confirm Password"/>
            </View>
            </View>

        </View>
        <View style={styles.loginbox}>
            <Pressable style={styles.loginbutton} onPress={signupdata}>
                <Text style={styles.logintext}>Register</Text>
            </Pressable>
        </View>
        <View style={styles.signupview}>
            <Pressable onPress={()=>navigation.navigate('login')}>
            <Text style={styles.signuptextmain}>Have an account?<Text style={styles.signuptext}>Login</Text></Text>
            </Pressable>
        </View>
        <View style={styles.termconditionmain}>
            <Text style={styles.maintext}>By signing up, you agree to our </Text>
            <Pressable onPress={()=>navigation.navigate('term')}>
            <Text style={styles.linktext}> Terms and Conditions</Text>
            </Pressable>
        </View>
    </View>);
}
export default Signup;
const styles=StyleSheet.create({
    maincontainer:{
        margin:36
    },
    headingtext:{
        marginTop:30,
        fontSize:24,
        fontWeight:"600",
    },
    headingchild:{
        fontSize:18,
        color:"#868e96",
        marginBottom:12,
        marginTop:4
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
      padding:4
      },
      loginbox:{
        marginTop:32
    },
    loginbutton:{
        backgroundColor:"#2b8a3e",
        color:"white",
        borderRadius:9,
        padding:8
    },
    logintext:{
        fontSize:24,
        color:"white",
        fontWeight:"600",
        marginLeft:105
    },
    signupview:{
        marginTop:20,
        marginLeft:72,
    },
    signuptextmain:{
        fontSize:16
    },
    signuptext:{
        fontSize:16,
        fontWeight:"600",
        color:"#2b8a3e"
    },
    iconstyle:{
        marginTop:16,
    },
    termconditionmain:{
    marginTop:125,
    marginLeft:42
    },
    maintext:{
        fontSize:16,
        color:"#868e96"
    },
    linktext:{
        color:"#2b8a3e",
        fontSize:16,
        marginLeft:24,
        fontWeight:"500"
    }
})