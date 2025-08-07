import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

 interface propsTempo{
        date:string,
        max:number,
        min:number,
        description:string,
        condition:string,
        moon_phase:string
    }

export default function Tempo({date, max, min, description, condition, moon_phase} : propsTempo){

    const icones: Record<string, any> = {
        clear_day: require('../assets/png/clear_day.png'),
        clear_night: require('../assets/png/clear_night.png'),
        cloud: require('../assets/png/cloud.png'),
        cloudly_day: require('../assets/png/cloudly_day.png'),
        cloudly_night: require('../assets/png/cloudly_night.png'),
        fog: require('../assets/png/fog.png'),
        hail: require('../assets/png/hail.png'),
        none_day: require('../assets/png/none_day.png'),
        none_night: require('../assets/png/none_night.png'),
        rain: require('../assets/png/rain.png'),
        snow: require('../assets/png/snow.png'),
        storm: require('../assets/png/storm.png'),
        
        

    }

    const luas: Record<string, any> = {
        first_quarter: require('../assets/png2/first_quarter.png'),
        full: require('../assets/png2/full.png'),
        last_quarter: require('../assets/png2/last_quarter.png'),
        new: require('../assets/png2/new.png'),
        waning_crescent: require('../assets/png2/waning_crescent.png'),
        waning_gibbous: require('../assets/png2/waning_gibbous.png'),
        waxing_crescent: require('../assets/png2/waxing_crescent.png'),
        waxing_gibbous: require('../assets/png2/waxing_gibbous.png'),
        
    }

    return(
        <View style={styles.principal}>
                <Text style={styles.texto}>Previsão para o dia: {date}</Text>
                <Text style={styles.texto}>Máx: {max}</Text>
                <Text style={styles.texto}>Mín: {min}</Text>
                <Text style={styles.texto}>Descrição: {description}</Text>
                <View style={styles.colection}>
                <Image 
                style={styles.imagem}
                source={icones[condition]}
   
                /> 
                <Image 
                style={styles.imagem2}
                source={luas[moon_phase]}

                />
                </View>

        </View>
    );
}
const styles = StyleSheet.create({
    principal:{
        width:'80%',
        borderWidth:2,
        borderRadius:30,
        padding:20,
        margin:20,

    },
    texto:{
        fontSize:20
    },
    colection:{
        
        flexDirection: 'row'
    },
    imagem:{
        marginLeft:50
    },
    imagem2:{

    }

});
