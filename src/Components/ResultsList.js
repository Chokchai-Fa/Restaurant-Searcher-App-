import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Touchable } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail';

const ResultList  = ({ title, results, navigation }) => {

    if(!results.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <FlatList
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {results}
                keyExtractor = { (result) => result.id}
                renderItem ={ ({ item }) =>{
                    return (
                    <TouchableOpacity onPress={ () => navigation.navigate('ResultsShow', { id: item.id} )}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom: 5
    },
    container:{
        marginBottom:10
    }
})

export default withNavigation(ResultList);
