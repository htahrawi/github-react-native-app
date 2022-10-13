import { useNavigation } from "@react-navigation/native";
import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Repo =(props)=>{
    const {item} = props;
    const navigate = useNavigation();
    return (
      <TouchableOpacity 
        style={styles.wrapper} 
        onPress={()=>{
            navigate.navigate('Repo', {repo: item});
        }}>
        <Text style={styles.repoNameText}>{item.name}</Text>
        <Text style={styles.languageText}>
        {item.language || "No Language"}
        </Text>
        <Text>Forks: {item.forks_count}</Text>
        <Text>Open issues: {item.open_issues_count}</Text>
        <View style={styles.horizontalLine}></View>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    wrapper:{
        marginVertical: 10,

    },  
    repoNameText: {
        fontWeight: 'bold',
    },
    languageText:{
        color: 'blue',
        fontWeight: '700'
    },
    horizontalLine:{
        height: 1,
        marginTop: 10,
        backgroundColor: 'gray',
    }
})
export default Repo;