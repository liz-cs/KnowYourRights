import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import IonIcon from "react-native-vector-icons/Ionicons";
import HomeCard_English from "../../component/HomeCard_English";
import { useBookmark } from "../../BookmarkContext";

const cards = [
    {name : "card1", title:'Hours of Works', number:1},
    {name : "card2", title:'Statutory Holiday',number:2},
    {name : "card3", title:'Taking Time Off',number:3},
    {name : "card4", title:'Quit, Fired or Laid off', number:4},
    {name : "card5", title:'Getting Paid for Work', number:5},
    {name : "card6", title:'Make a Complaint',number:6},
    
]

const HomeScreen_English = (props) =>{
    const [items, setItems] = useState(cards);
    const { bookMark, setBookMark } = useBookmark();

    function choose(id){
        const item = items.find((item)=>id===item.number);
        setBookMark([...bookMark, item]);
        const restItem = items.filter((item)=>item.number!==id);
        setItems(restItem);
    }

    function unselected(id){
        const item = bookMark.find((item)=>id===item.number);
        setItems([...items, item]);
        const restItem = bookMark.filter((item)=>item.number!==id);
        setBookMark(restItem);
    }

    return(
        <View style={{backgroundColor:'#F3F3F3', flex:1}}>
            <View style={{flexDirection:'row', marginTop:10,marginLeft:10}}>
                <IonIcon name="location" style={{fontSize:25,color:"#494949"}} />
                <Text style={{fontSize:25, fontWeight:'bold', color:'#494949'}}>Work in B.C.</Text>
            </View>
            <Text style={{color:'grey',fontWeight:'bold', marginLeft:10, marginTop:3}}>Choose the right you want to know</Text> 
            <View>
                <FlatList 
                    numColumns={2}
                    keyExtractor={(cards)=> cards.name}
                    key={2}
                    data={cards} 
                    renderItem={({item}) => {
                        return (
                        <HomeCard_English 
                            number = {item.number}
                            displayText={item.title}
                            navigation={props.navigation}
                            choose={choose}
                            unselected={unselected}
                        />
                        );
                    }}
                />
            </View>
            <TouchableOpacity style={{ alignItems:'center'}}>
                <View style = {styles.trapezoid}>
                    <Text style={{color:'#ffff',marginTop:15, fontWeight:'bold',marginLeft:5}}>Copyright © 2022 Know Your Rights.{'/n'}All rights reserved.</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical : 50,
    },
    trapezoid: {
        height:'40%',
        width:'90%',
        color:'#22C7A9',
        backgroundColor:'#22C7A9',
        marginTop:10,
        borderRadius:20
      },
});

export default HomeScreen_English;