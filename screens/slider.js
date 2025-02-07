import { View,Text,StyleSheet, FlatList, ScrollView, Pressable,Image} from "react-native"
const slidedata=[
    {
        id:1,
        tital:"Welcome",
        description:`Get 50% on your first \n order`,
        images:require('../assets/486ab05b6b0b5d91dd0e1ec617684a6e.png'),
    },
  
  
]
function Slider({detailhandel}){
    return<View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {slidedata.map((item)=><View key={item.id} style={styles.sliderbox}> 
                <View style={styles.boxstyle}>
                <Text style={styles.textheading}>{item.tital}</Text>
                <Text style={styles.textdes}>{item.description}</Text>
                <View style={styles.buttonstyle}>
                    <Pressable onPress={detailhandel}>
                        <Text style={styles.buttontext} >Order Now</Text>
                    </Pressable>
                </View>
                <View>
                    <Image style={styles.imagestyle} source={item.images}/>
                </View>
                </View>
                
                </View> )}
        </ScrollView>
    </View>
}
export default Slider;
const styles=StyleSheet.create({
sliderbox:{
    marginTop:20,
    padding:8,
     width:"105%",
     marginLeft:-8
     
},
boxstyle:{
    backgroundColor:"#2f9e44",
    padding:8,
    borderRadius:12,
   
},
textheading:{
fontSize:21,
fontWeight:"500",
color:"white",
marginTop:5,
marginLeft:4
},
textdes:{
color:"white",
fontSize:17,
marginTop:4,
marginLeft:4,
marginBottom:4
},
buttonstyle:{
   
 backgroundColor:"white",
 padding:4,
 width:100,
 borderRadius:8,
 marginLeft:3
},
buttontext:{
    color:"#2f9e44",
    marginLeft:5,
    fontSize:16,
    fontWeight:"600",
    
},
imagestyle:{
    marginLeft:180,
    width: 110,
    height: 110,
    marginTop:-105,
    borderRadius:25
}
})