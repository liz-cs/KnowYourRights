import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useBookmark } from "../../BookmarkContext";

const ListScreen_Spanish = (props) =>{
    const { bookmarkSpanish } = useBookmark();

    return(
    <View style={{ flex:1, marginTop:'2%'}}>
    <View style={{alignItems:"center"}}>
    <Text style={styles.title}>See your Bookmarks here</Text>
    </View>
        <FlatList 
            keyExtractor={(item) => item.number}
            data={bookmarkSpanish} 
            renderItem={({item}) => {
                return (
                <TouchableOpacity
                    onPress={()=>{props.navigation.navigate(`${item.title}`)}} 
                >
                    <View style={styles.container}>
                        <Text style={styles.textStyle}>
                            {item.title}
                        </Text>
                    </View>
                </TouchableOpacity>
                );
            }}

        />
    </View>
    );
};

const styles = StyleSheet.create({
    title:{
        color:'#3F3D56',
        fontWeight:'bold',
        fontSize:20,
    },
    container:{
        marginTop:5,
        width:"90%",
        alignItems:'center',
        backgroundColor:'#22C7A9',
        marginLeft:"4%",
        borderRadius:20,
        shadowColor: 'rgba(0,0,0, 0.4)',
        shadowOffset: { height: 3, width: 3 }, 
        shadowOpacity: 1, 
        shadowRadius: 2, 
    },
    textStyle:{
        marginVertical : 20,
    }
});

export default ListScreen_Spanish;