import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { EnviromentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string],
    frequency: {
        times: number,
        repeat_every: string
        }
}

export function PlantSelect() {

    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);

    useEffect(() => {
        async function fetchEnvironment(){
            const { data } = await api.get('plants_environments');
            setEnvironments([
                {
                    key: "all",
                    title: "Todos"
                },
                ...data
            ]);
        }

        fetchEnvironment();
    },[])

    useEffect(() => {
        async function fetchPlants(){
            const { data } = await api.get('plants');
            setPlants( data );
        }

        fetchPlants();
    },[])
    
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header />
                <Text style={style.title}>
                    Em qual ambiente
                </Text>

                <Text style={style.subtitle}>
                    você quer colocar sua planta?
                </Text>
                <View>
                    <FlatList
                        data={environments}
                        renderItem={({ item }) => (
                            <EnviromentButton 
                                title={ item.title }
                            />        
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={style.environmentList}
                    />
                </View>
                
                <View style={style.plants}>
                    <FlatList 
                        data={ plants }
                        renderItem={({ item }) => (
                            <PlantCardPrimary data={ item }/>
                        )}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                    />
                </View>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        padding: 30,
        
    },
    title: {
        justifyContent: 'center',
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15,
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center',
    }
});