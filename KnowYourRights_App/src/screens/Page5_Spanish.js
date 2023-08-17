import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useBookmark } from "../../BookmarkContext";
 
const policy = {
    title : "Cobrar por trabajar",
    paragraph1:"Los empleados deben ser pagados por el trabajo que hacen. Deben recibir al menos el salario mínimo por las horas trabajadas en cada período de pago.",

    subtitle2:"Los empleados deben ser pagados dos veces al mes.",
    paragraph2:"Los períodos de pago no pueden ser mayores a 16 días. Todo el dinero ganado, incluido el pago de horas extras y días festivos reglamentarios, debe pagarse dentro de los ocho días posteriores al final del período de pago. El pago de vacaciones anuales y los salarios en el banco de tiempo de un empleado no necesitan pagarse dentro del período de pago.\nLos salarios deben pagarse en moneda canadiense. El pago puede ser en efectivo, cheque, giro bancario o giro postal. También puede hacerse por depósito directo en la cuenta bancaria de un empleado si así se acordó por escrito o si este arreglo es parte de un convenio colectivo. Los contratistas de mano de obra agrícola deben pagar los salarios directamente a la cuenta bancaria de un empleado.\nCuando finaliza el empleo, los empleadores deben pagar a los empleados sus salarios finales.",

    subtitle3:"Salario mínimo",
    paragraph3:"A todos los empleados se les debe pagar al menos el salario mínimo. El salario mínimo en la Columbia Británica es de $15.20 por hora.",

    subtitle4:"Pago mínimo diario",
    paragraph4:"A un empleado que se presenta a trabajar se le debe pagar por lo menos dos horas, incluso si trabaja menos de dos horas.",

    subtitle5:"Deducciones",
    paragraph5:"Los empleadores están legalmente obligados a hacer ciertas deducciones de los salarios. Los costos.\ncomerciales no se pueden deducir de los salarios.",

    subtitle6:"mantenimiento de registros",
    paragraph6:"Los empleadores deben mantener un registro de las horas trabajadas por cada empleado y proporcionar una declaración de pago cada día de pago.",

    subtitle7:"Propinas y gratificaciones",
    paragraph7:"Los empleadores pueden recolectar propinas y distribuirlas a todos los empleados que participaron en ganarlas.",

    subtitle8:"Uniformes y ropa especial",
    paragraph8:"Un código de vestimenta es diferente a un uniforme. Los empleadores deben proporcionar uniformes sin costo alguno para los empleados.",

    subtitle9:"Pago de dias festivos",
    paragraph9:"Los empleados obtienen el pago de dias festivos si califican. Si trabajan en un feriado oficial, obtienen tiempo y medio más el salario de un día promedio.",

    subtitle10:"Tiempo libre remunerado",
    paragraph10:"Los empleados pueden ganar días de vacaciones remunerados. La mayoría de las licencias con protección laboral no son remuneradas. Los empleadores están obligados a pagar por algunos tipos de licencia.",

    subtitle11:"\n\n\n",
    paragraph11:"\n\n\n\n\n\n\n\n",
  }
export default class Page5_Spanish extends Component {
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
                  source={require("../../pictures/page5.png")}
                  style={styles.avatar}
              />
            </View>
            
            <Text style={styles.title}>{policy["title"]}</Text>
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
            <Text style={styles.subtitle}>{policy["subtitle8"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph8"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle9"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph9"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle10"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph10"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle11"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph11"]} </Text>
        </ScrollView>
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const { bookmarkSpanish, setBookmarkSpanish } = this.props.route.params;
              let found = false;
              for (let i = 0; i < bookmarkSpanish.length; i++) {
                if (bookmarkSpanish[i].number == 5) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                const item = {name : "card5", title:'Cobrar por trabajar', number:5};
                setBookmarkSpanish([...bookmarkSpanish, item]);
              }
            }
          }
          >
        <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:28}}>Save</Text>
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
