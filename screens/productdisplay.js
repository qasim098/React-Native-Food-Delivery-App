import { View,Text,StyleSheet, ScrollView, Pressable ,Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
export const Mealdata=[
    {
    id:1,
    tital:"Pizza",
    itemlist:[
        { id: 1, name: "Classic Pepperoni", price: "1600", image: require('../assets/11a90f6999d599cc1039e5f7f9301feb.jpg'), description: "A timeless pizza with a generous layer of pepperoni and melting mozzarella." },
        { id: 2, name: "Chicken Supreme", price: "1800", image: require('../assets/images.jpeg'), description: "Loaded with seasoned chicken chunks, bell peppers, and olives." },
        { id: 3, name: "Margherita Delight", price: "1500", image: require('../assets/Margherita Delight.jpg'), description: "Fresh basil, juicy tomatoes, and a rich blend of cheese." },
        { id: 4, name: "Barbecue Chicken", price: "1900", image: require('../assets/Barbecue Chicken.jpg'), description: "Tender chicken coated in smoky barbecue sauce on a crispy crust." },
        { id: 5, name: "Veggie Explosion", price: "1700", image: require('../assets/Veggie Explosion.jpg'), description: "A colorful mix of fresh vegetables topped with mozzarella." },
        { id: 6, name: "Spicy Peri Peri", price: "2000", image: require('../assets/Spicy Peri Peri.jpg'), description: "A fiery blend of peri-peri chicken, jalapenos, and cheese." }
]
},
{
    id:2,
    tital:"Burger",
    itemlist:[
        { id: 1, name: "Beef Classic",image: require('../assets/Beef Classic.jpg'), price: "1200", description: "A juicy beef patty topped with lettuce, tomato, and cheese." },
        { id: 2, name: "Crispy Chicken ",image: require('../assets/Crispy Chicken .jpg') ,price: "1500", description: "Crispy fried chicken breast with tangy sauce and fresh veggies." },
        { id: 3, name: "Cheesy Zinger ", image: require('../assets/Cheesy Zinger.jpg'),price: "1700", description: "Spicy fried chicken fillet with double layers of cheese." },
        { id: 4, name: "Double Patty Beef ",image: require('../assets/Double Patty Beef.jpg'), price: "2000", description: "Two succulent beef patties stacked with all the classic toppings." },
        { id: 5, name: "Grilled Chicken ", image: require('../assets/Grilled Chicken.jpg'),price: "1600", description: "Marinated grilled chicken breast with a smoky flavor." },
        { id: 6, name: "Veggie Delight ", image: require('../assets/Veggie Delight .jpg'),price: "1400", description: "A patty made from fresh vegetables with a creamy sauce." }    
    ]

},
{
    id:3,
    tital:"Shawarma",
    itemlist:[
        { id: 1, name: "Classic Chicken ",image: require('../assets/Classic Chicken.jpg'), price: "600", description: "Juicy chicken slices wrapped in a warm pita with tahini sauce." },
        { id: 2, name: "Beef  Wrap",image: require('../assets/Beef  Wrap.jpg'), price: "700", description: "Tender beef strips with pickles and garlic sauce." },
        { id: 3, name: "Spicy Chicken ", image: require('../assets/Spicy Chicken .jpg'),price: "650", description: "A zesty twist with extra hot sauce and juicy chicken." },
        { id: 4, name: "Falafel ", image: require('../assets/Falafel.jpg'),price: "600", description: "Crispy falafel balls with fresh vegetables and tahini sauce." },
        { id: 5, name: "Garlic Mayo Chicken ",image: require('../assets/Garlic Mayo Chicken.jpg') ,price: "680", description: "Chicken shawarma infused with creamy garlic mayo." },
        { id: 6, name: "Loaded Platter", image: require('../assets/Loaded Platter.jpg'),price: "1200", description: "A hearty platter with chicken, fries, salad, and pita bread." }    
    ]

}
,
{
    id:4,
    tital:"Wings",
    itemlist:[
        { id: 1, name: "Buffalo Wings", price: "800", description: "Tangy and spicy buffalo sauce-coated crispy wings." },
        { id: 2, name: "Barbecue Wings", price: "850", description: "Juicy wings glazed with rich barbecue sauce." },
        { id: 3, name: "Honey Garlic Wings", price: "900", description: "Sweet and savory wings coated in honey garlic sauce." },
        { id: 4, name: "Spicy Peri Peri Wings", price: "950", description: "Fiery wings tossed in zesty peri peri sauce." },
        { id: 5, name: "Lemon Pepper Wings", price: "850", description: "Zesty lemon and black pepper seasoning on crispy wings." },
        { id: 6, name: "Teriyaki Glazed Wings", price: "950", description: "Sweet and savory teriyaki-coated chicken wings." }
      ]

}
,
{
    id:5,
    tital:"Special",
    itemlist:[
        { id: 1, name: "Grilled Chicken Platter", price: "2200", description: "A wholesome grilled chicken meal with sides." },
        { id: 2, name: "Loaded Nachos", price: "1800", description: "Tortilla chips topped with cheese, jalapenos, and salsa." },
        { id: 3, name: "Mixed Grill Platter", price: "3000", description: "A variety of grilled meats served with sauces." },
        { id: 4, name: "Seafood Delight", price: "2500", description: "A medley of seafood served with savory dips." },
        { id: 5, name: "Stuffed Chicken Breast", price: "2400", description: "Chicken breast stuffed with spinach and cheese." },
        { id: 6, name: "Special Kebab Platter", price: "2600", description: "Assorted kebabs served with naan and sauces." }   
    ]

}
,
{
    id:6,
    tital:"Drinks",
    itemlist:[
        { id: 1, name: "Coca Cola", image: require('../assets/Coca Cola.jpg'),price: "200", description: "Classic cola soft drink." },
        { id: 2, name: "Pepsi", image: require('../assets/Pepsi.jpg'),price: "200", description: "Refreshing cola beverage." },
        { id: 3, name: "Mango Smoothie", image: require('../assets/Mango Smoothie.jpg'),price: "400", description: "A rich mango-flavored smoothie." },
        { id: 4, name: "Lemon Mint Cooler",image: require('../assets/Lemon Mint Cooler.jpg'), price: "450", description: "A refreshing blend of lemon and mint." },
        { id: 5, name: "Strawberry Shake", image: require('../assets/Strawberry Shake.jpg'),price: "500", description: "Creamy shake infused with fresh strawberries." },
        { id: 6, name: "Iced Coffee", image: require('../assets/Iced Coffee.jpg'),price: "550", description: "Chilled coffee for a refreshing kick." }   
    ]

}
]
function Productdisplay({navigation}){
const [categoryactive,setcategoryavtive]=useState(1);
 
     return (<View>
        <Text style={styles.toptext}>Category:</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
          
         {Mealdata.map((item)=><View key={item.id} >
                 <Pressable style={[styles.buttonstyle,{backgroundColor:categoryactive===item.id?'#2b8a3e':'#f1f3f5'}]} onPress={()=>setcategoryavtive(item.id)}>
                 <Text style={[styles.itemtext,{color:categoryactive===item.id?"white":"black"}]}>{item.tital}</Text>
                 </Pressable>
                 </View>)}
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.productcontainer}>
           
            {categoryactive===null?   <ScrollView Style={styles.iconstylemenu} showsVerticalScrollIndicator={false}>
                <View style={styles.productContainermenu}>
                    {Mealdata.map((item) => (
                        <View key={item.id}>
                            {item.itemlist.map((items) => (
                                <View style={styles.itemstylemenu} key={items.id}>
                                    <Image style={styles.productimagemenu} source={items.image} />
                                    <Text style={styles.productnamemenu}>{items.name}</Text>
                                    <Text style={styles.productpricemenu}>{'RS:'}{items.price}</Text>
                                    <View>
                                        <Pressable style={styles.producticonmenu}>
                                            <Ionicons style={styles.iconcartstylemenu} name="add" size={26}/>
                                        </Pressable>
                                    </View>
                                </View>
                                
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>: categoryactive && (
                 Mealdata.find((item) => item.id === categoryactive)?.itemlist.map((items) => (
                    <View key={items.id} style={styles.productbox}>
                        <Pressable  onPress={()=>navigation.navigate('productdetail',{
                        id:items.id,
                        image:items.image,
                        name:items.name,
                        price:items.price,
                        description:items.description,
                        navigation:navigation
                    })} >
                            <Image style={styles.productimage} source={items.image} />
                            <Text style={styles.producttext}>{items.name}</Text>
                            <Text style={styles.prouctprice}><Text>Rs:</Text>{items.price}</Text>
                            <View style={styles.producticon}>
                                <Pressable>
                                    <Ionicons name="add" size={26} color={"white"} />
                                </Pressable>
                            </View>
                        </Pressable>
                    </View>
                ))
            )}
              </View>
        </ScrollView>
          
       
     </View>
        
    );
}
export default Productdisplay;
const styles=StyleSheet.create({
toptext:{
    fontSize:21,
    marginLeft:16,
    fontWeight:"600",
    color:"#868e96"
},
categoryRow: {
    flexDirection: 'row', 
    marginLeft:-15,   
    marginVertical:16,
    marginTop:22,
  },
  itemtext:{
    fontSize:17,
    fontWeight:"500",
    color:"white"
  },
  buttonstyle:{
    backgroundColor:"#2f9e44",
     padding:6,
    borderRadius:14,
    color:"white",
    width:"80%",
    marginLeft:30,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:0.12
  },
  productcontainer:{
    marginTop:32,
     flexDirection:"row",
     marginLeft:6
  },
  productbox:{
   
   backgroundColor: 'white',
   borderRadius: 10,
   marginBottom: 15,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.3,
   shadowRadius: 3,
   elevation: 5, 
   marginBottom: 18,
   marginHorizontal: 8,
   
  },
  productstyle:{
    backgroundColor:"red"
  },
  productimage:{
    width: 165,
    height: 150,
    borderRadius:8
  },
  producttext:{
   fontSize:17,
   marginTop:8,
   marginLeft:6,
   fontWeight:"500",
   marginBottom:8
  },
  prouctprice:{
    marginLeft:12,
    fontSize:18,
    fontWeight:"500",
    marginBottom:6,
    color:"#888"
  },
  producticon:{
  marginLeft:115,
  marginBottom:12,
  backgroundColor:"#2f9e44",
  borderRadius:8,
  width:35,
  padding:4
  },
  productScrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
},
containermenu: {
    marginTop: 52,
    padding: 12,
},

productContainermenu: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent:"center",
    gap:32,
    marginLeft:-8,
    marginLeft:12
},
itemstylemenu: {
    width: "100%", 
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5
    
},
headertextmenu: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 135,
},
headerflexmenu: {
    flexDirection: "row",
},
iconstylemenu: {
    marginLeft: 95,
},
productimagemenu: {
    width: 155, 
    height: 150,
    borderRadius: 12,
},
productnamemenu: {
    marginTop: 12,
    marginLeft:6, 
    fontSize: 16,
    fontWeight: "500",
},
productpricemenu: {
    marginTop: 8, 
    fontSize: 18,
    color: "#888",
    marginLeft:10,
},
producticonmenu:{
 marginTop:8,
 marginLeft:100,
 marginBottom:10,
 backgroundColor:"#2f9e44",
 width:"24%",
 borderRadius:8,
 

},
iconcartstylemenu:{
    padding:4,
    color:"white",
    marginLeft:3
    
}
})