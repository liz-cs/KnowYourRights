import React, { useEffect, useState }  from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useBookmark } from "../BookmarkContext";

const heartInactive = '#C4C4C4';
const heartActive = '#F73859';

function HeartOnpress(color, props) {
    if (props.number === 6) {
        return (<Text></Text>);
    }
    if (color) {
        return(
            <IonIcon
                name="md-heart-sharp"
                style={{ fontSize: 25, color: heartActive, marginTop: 2, marginRight: '10%' }}
            />
        );
    } else {
        return(
            <IonIcon
                name="md-heart-sharp"
                style={{ fontSize: 25, color: heartInactive, marginTop: 2, marginRight: '10%' }}
            />
        );
    }
}

function HomeCard_Spanish(props) {
    const { bookmarkSpanish, setBookmarkSpanish } = useBookmark();
    const [color, setColor] = useState(false);

    useEffect(() => {
        if (bookmarkSpanish && !color) {
            for (let i = 0; i < bookmarkSpanish.length; i++) {
                if (bookmarkSpanish[i].number === props.number) {
                    setColor(true);
                    break;
                }
            }
        }
    }, [bookmarkSpanish]);

    function returnChoosen(color) {
        if (color === false) {
            setColor(true);
            props.choose(props.number);
        } else {
            setColor(false);
            props.unselected(props.number);
        }
    }

    return (
        <View style={styles.view}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{alignItems:'flex-start'}}>
                    <IonIcon
                        name="ios-cloud-circle"
                        style={{ fontSize: 25, color: "#22C7A9", marginTop: 2, marginLeft: '10%' }} />
            </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'flex-end' }}
                    onPress={() => { returnChoosen(color); }}
                >
                {HeartOnpress(color, props)}
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.container} onPress={()=>{
            props.number == 1 ? props.navigation.navigate("Horas de trabajo", { bookmarkSpanish: bookmarkSpanish, setBookmarkSpanish: setBookmarkSpanish }):
            props.number == 2 ? props.navigation.navigate("Días festivos", { bookmarkSpanish: bookmarkSpanish, setBookmarkSpanish: setBookmarkSpanish }):
            props.number == 3 ? props.navigation.navigate("Tomar tiempo libre", { bookmarkSpanish: bookmarkSpanish, setBookmarkSpanish: setBookmarkSpanish }):
            props.number == 4 ? props.navigation.navigate("Renunciar", { bookmarkSpanish: bookmarkSpanish, setBookmarkSpanish: setBookmarkSpanish }):
            props.number == 5 ? props.navigation.navigate("Cobrar por trabajar", { bookmarkSpanish: bookmarkSpanish, setBookmarkSpanish: setBookmarkSpanish }):
            props.navigation.navigate("Hacer un reclamo")
        }}>
            
            <Image
                // source={require("../pictures/avatar1.png")}
                source={props.number == 1 ? require("../pictures/avatar1.png") :
                props.number == 2 ? require("../pictures/avatar2.png") :
                props.number == 3 ? require("../pictures/avatar3.png") :
                props.number == 4 ? require("../pictures/avatar4.png") :
                props.number == 5 ? require("../pictures/avatar5.png") :
                require("../pictures/avatar1.png")
                }
                style={styles.avatar}
            />
            <Text style={styles.text}>{props.displayText}</Text>
        </TouchableOpacity>
        </View>
    );
}
const backgroundSize = 180;
const styles = StyleSheet.create({
    view:{
        backgroundColor:'#DADADA',
        width: backgroundSize,
        height:backgroundSize,
        borderRadius:20,
        marginLeft:10,
        marginTop:10,
    },
    Icon:{
        marginRight:'10%',
        fontSize:backgroundSize/8,
        color:'#C4C4C4',
        marginTop:2
    },
    container: {
        width: backgroundSize,
        height:backgroundSize,
        alignItems:'center',
    },
    avatar: {
        width: '70%',
        height: '70%',
        justifyContent:'center',
        // alignItems:'center',
        // borderRadius: imageSize / 2,
    },
    text: {
        // alignItems:'center',
        fontWeight:'bold',

    },
  
});

export default HomeCard_Spanish;
