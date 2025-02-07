import { ScrollView ,StyleSheet,View,Text,Pressable} from "react-native";
import { Ionicons } from '@expo/vector-icons';
function Termcondition({navigation}){
    return(<View style={styles.maincontainer}>
         <View style={styles.iconstyle}>
            <Pressable onPress={()=>navigation.navigate('signup')}>
                <Ionicons name="arrow-back" size={28} color="green"/>
            </Pressable>
        </View>
        <View>
            <Text style={styles.textheading}>Term & Conditions:</Text>
        </View>
       <ScrollView>
        <View>
            <Text style={styles.heading}>
            1. Add a Disclaimer for Allergies
            </Text>
            <Text style={styles.maintext}>
            Mention that customers should review ingredients and inform the restaurant of any allergies. Example:
            ⚠️ Allergy Disclaimer: Please inform us of any food allergies before placing your order. We are not liable for reactions if allergies are not disclosed.
            </Text>
            <Text style={styles.heading}>2. Delivery Responsibility</Text>
            <Text style={styles.maintext}>
            Clarify your commitment to delivery times and what happens in case of delays. Example:
            🚚 Delivery Timelines: While we strive to deliver on time, delays may occur due to factors beyond our control.
            </Text>
            <Text style={styles.heading}> 3. Refund Policy Details</Text>
            <Text style={styles.maintext}>
            Specify clear scenarios for refunds, such as food quality issues or failed deliveries. Example:
            💵 Refunds: Refunds are available for incorrect or poor-quality orders upon valid proof 
            </Text>
            <Text style={styles.heading}>4. Privacy Clause</Text>
            <Text style={styles.maintext}>
            Include how you handle customer data. Example:
            🔒 Privacy: Your personal information will only be used for processing your orders and will never be shared without your consent.
            </Text>
            <Text style={styles.heading}>5. Legal Compliance</Text>
            <Text style={styles.maintext}>
            Add a clause about complying with local laws and regulations. Example:
            ⚖️ Compliance: Our services comply with local food and safety regulations.
            </Text>
        </View>
       </ScrollView>
    </View>)
}
export default Termcondition;
const styles=StyleSheet.create({
    maincontainer:{
        margin:32,
        marginTop:43
    },
    iconstyle:{
        marginTop:16,
    },
    textheading:{
        marginTop:24,
        fontSize:24,
        fontWeight:"600"
    },
    heading:{
      marginTop:12,
      fontWeight:"500",
      fontSize:20
    },
    maintext:{
     marginTop:15,

    }
})