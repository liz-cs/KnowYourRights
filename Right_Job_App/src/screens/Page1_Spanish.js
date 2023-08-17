import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useBookmark } from "../../BookmarkContext";

const policy = {
    title : "Horas de trabajo",
    subtitle1: "Horas de trabajo estandar: ",
    paragraph1:"Las horas de trabajo estándar son ocho horas en un día y 40 horas a la semana. Una semana es de domingo a sábado.\nLas horas de trabajo estándar pueden ser diferentes si un empleado está trabajando bajo un acuerdo de promedio o una variación.",
    
    subtitle2:"Horas de trabajo extra",
    paragraph2:"Los empleados pueden ser obligados a trabajar horas extras. A los empleados que trabajan más de ocho horas en un día o 40 horas en una semana se les debe pagar tiempo y medio o tiempo doble por las horas extras trabajadas.\nDescubra cómo calcular el pago de horas extras.\nObtenga información sobre las horas extra de los empleados con un acuerdo de promedio.",

    subtitle3:"Horas mínimas de trabajo diarias",
    paragraph3:"Los empleados deben estar programados para al menos dos horas de trabajo. También se les debe pagar si se presentan a trabajar según lo programado y no hay trabajo para ellos.\nDescubra cómo calcular el salario mínimo diario",

    subtitle4:"Programación de horas libres de trabajo",
    paragraph4:"Un empleado debe tener al menos 32 horas seguidas libres de trabajo cada semana. Si un empleado trabaja durante este período (por ejemplo, debido a una emergencia), se le debe pagar un pago extra.\nUn empleado también debe tener al menos ocho horas libres entre turnos. Si un empleado trabaja durante este período, las horas se suman a otras horas trabajadas en el día. Esto generalmente significa que al empleado se le debe pagar a tarifas de horas extras.\nEjemplo: A una persona que trabaja un turno de seis horas (6 am a 12 pm) cinco días a la semana se le pide que trabaje cuatro horas adicionales (2 pm a 6 pm). Con eso acumula 10 horas en ese día. Lo que significa que se le debe pagar dos horas a tarifa de horas extra.",

    subtitle5:"Programación de comidas y pausas de descanso",
    paragraph5:"Employers are not required to provide coffee breaks.\n\nA 30-minute unpaid meal break must be provided when an employee works more than five hours in a row. The employee must be paid for the meal break if they're required to work (or be available to work) during their meal break. Working through a meal break does not always result in overtime pay.",

    subtitle6:"Scheduling split shifts",
    paragraph6:"Los empleadores no están obligados a proporcionar horas de descanso durante la jornada laboral.\nSe debe proporcionar un descanso para comer no remunerado de 30 minutos cuando un empleado trabaja más de cinco horas seguidas. Al empleado se le debe pagar por el descanso para comer si debe trabajar (o estar disponible para trabajar) durante su descanso para comer. Trabajar durante un descanso para comer no siempre da como resultado el pago de horas extras.",
    subtitle7:"\n\n\n\n\n",
    paragraph7:"\n\n\n\n\n\n",
  }
export default class Page1_Spanish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <SafeAreaView>
        
        <View style={{height:'90%'}}>
        
        <ScrollView style={{width:'90%',height:1000, marginLeft:'5%', marginTop:10, flex:1}}>
            <View style={styles.conatiner}>
            <Image
                source={require("../../pictures/page1.png")}
                style={styles.avatar}
            />
            </View>
            <Text style={styles.title}>{policy["title"]}</Text>
            <Text style={styles.subtitle}>{policy["subtitle1"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph1"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle2"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph2"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle3"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph3"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle4"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph4"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle5"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph5"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle6"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph6"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle7"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph7"]} </Text>
        </ScrollView>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const { bookmarkSpanish, setBookmarkSpanish } = this.props.route.params;
              let found = false;
              for (let i = 0; i < bookmarkSpanish.length; i++) {
                if (bookmarkSpanish[i].number == 1) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                const item = { name: "card1", title: 'Horas de trabajo', number: 1 };
                setBookmarkSpanish([...bookmarkSpanish, item]);
              }
            }
          }
          >
        <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:28}}>Guardar</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    conatiner:{
        marginTop:5,
        height:'15%',
        alignItems:'center',
        // backgroundColor:'red',
    },
    avatar:{
        width:'90%',
        height:'100%',
    },
    title:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:32,
        color:'#3F3D56',
    },
    subtitle:{
        color:'#3F3D56',
        fontWeight:'500',
        fontSize:18,
        marginTop:15,
    },
    paragraph:{
        color:'#888888',
        marginTop:8,
    },
    button:{
        backgroundColor:'#22C7A9', 
        height:50, 
        width:250, 
        alignItems:'center',
        borderRadius:20,
        justifyContent:'center',
        shadowColor: 'rgba(0,0,0, 0.4)',
        shadowOffset: { height: 3, width: 3 }, 
        shadowOpacity: 1, 
        shadowRadius: 2, 
    },
  
});
