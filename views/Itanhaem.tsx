import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Tempo from '../components/Tempo';
import Api from '../components/Api';

export default function Itanhaem(){
    const [dados, setDados] = useState<any[]>([]);

    async function buscaTempo(){
        const response = await Api.get('weather?array_limit=6&fields=only_results,temp,city_name,forecast,condition,max,min,moon_phase,description,date&key=6c77a5ae&city_name=Itanhaem,SP');
        setDados(response.data.forecast);
    }
    useEffect(
        ()=>{buscaTempo()
        },[]);

    return(
        <View style={styles.bloco}>
            <Text style={styles.Texto}>Previsão do Tempo para Itanhaém</Text>

            <FlatList 
                data={dados}
                keyExtractor={(item)=>item.date}
                renderItem={({item})=> <Tempo date={item.date} 
                max={item.max} min={item.min} description={item.description} 
                condition={item.condition} moon_phase={item.moon_phase} />}
                style={styles.lista}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:40
    },
    Texto:{
        fontSize:20,
    },
    lista:{
        height:'70%',
        width:'100%'
    }
    
});
