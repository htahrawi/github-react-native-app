import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Repo from "./Repo";

const ReposList = (props) => {
    // console.log(props.repos.length);
    return (
        <View>
            {props.repos.length? <Text style={styles.repostriesText}>Repostries</Text> : null}
            <FlatList
            data={props.repos}
            renderItem={({ item, index }) => {
                return <Repo item={item} />
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    repostriesText:{
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 20
    } 
});


export default ReposList;
