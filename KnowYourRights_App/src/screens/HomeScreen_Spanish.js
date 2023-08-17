import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import IonIcon from "react-native-vector-icons/Ionicons";
import HomeCard_Spanish from "../../component/HomeCard_Spanish";
import { useBookmark } from "../../BookmarkContext";

const cards = [
    {name : "card1", title:'Horas de trabajo', number:1},
    {name : "card2", title:'Días festivos',number:2},
    {name : "card3", title:'Tomar tiempo libre',number:3},
    {name : "card4", title:'Renunciar', number:4},
    {name : "card5", title:'Cobrar por trabajar', number:5},
    {name : "card6", title:'Hacer un reclamo',number:6},
]
const HomeScreen_Spanish = (props) =>{
    const [items, setItems] = useState(cards);
    const { bookmarkSpanish, setBookmarkSpanish } = useBookmark();

    function choose(id){
        const item = items.find((item)=>id===item.number);
        setBookmarkSpanish([...bookmarkSpanish, item]);
        const restItem = items.filter((item)=>item.number!==id);
        setItems(restItem);
    }

    function unselected(id){
        const item = bookmarkSpanish.find((item)=>id===item.number);
        setItems([...items, item]);
        const restItem = bookmarkSpanish.filter((item)=>item.number!==id);
        setBookmarkSpanish(restItem);
    }

    return(
        <View style={{backgroundColor:'#F3F3F3', flex:1}}>
            <View style={{flexDirection:'row', marginTop:10,marginLeft:10}}>
                <IonIcon name="location" style={{fontSize:25,color:"#494949"}} />
                <Text style={{fontSize:25, fontWeight:'bold', color:'#494949'}}>TRABAJO EN B.C</Text>
            </View>
            <Text style={{color:'grey',fontWeight:'bold', marginLeft:10, marginTop:3}}>Conozca sus derechos</Text> 
            <View>
            <FlatList 
                numColumns={2}
                keyExtractor={(cards)=> cards.name}
                key={2}
                data={cards} 
                renderItem={({item}) => {
                    return (
                        <HomeCard_Spanish 
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
                <Text style={{color:'#ffff',marginTop:15, fontWeight:'bold',marginLeft:5}}>Copyright © 2022 conoce tus derechos.{'/n'}Reservados todos los derechos.</Text>
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

export default HomeScreen_Spanish;