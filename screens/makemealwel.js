import { View,Text ,Image, ScrollView,StyleSheet} from "react-native";
export const Mealitem=[
  {
  id:1,
  tital:"Pizza",
  image:require("../assets/pizza.webp")
},
{
  id:2,
  tital:"Burger",
  image:require("../assets/burger.webp")
},
{
  id:3,
  tital:"Shawarma",
  image:require("../assets/shawarma.webp")
}
,
{
  id:4,
  tital:"Wings",
 image:require("../assets/wings.webp")

}
,
{
  id:5,
  tital:"Fries",
  image:require("../assets/fries.webp")
}
,
{
  id:6,
  tital:"Cofee",
  image:require("../assets/cofee.webp")
}
]
function Makemealwelcome({}){
    return(<View>
        <Text>
          Make meal welcome screen
        </Text>
        <ScrollView>
        {Mealitem.map((item)=><View key={item.id}>
          <Image  style={styles.imagestyle}source={item.image}/>
          <Text>{item.tital}</Text>
        </View>)}
        </ScrollView>
       
    </View>);
}
export default Makemealwelcome;
const styles=StyleSheet.create({
  imagestyle:{
    width:70,
    height:70
  }
})