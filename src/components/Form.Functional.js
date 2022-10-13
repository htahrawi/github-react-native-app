import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
} from "react-native";

const Form = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');
    const fetchUserDate = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://api.github.com/users/'+input);
            const user = await response.json();
            const reposResponse = await fetch("https://api.github.com/users/"+input+'/repos');
            const repos = await reposResponse.json();
            setIsLoading(false);
            props.setUser(user);
            props.setRepos(repos);
        } catch (error) {
            console.log('err',error);
        }
    }
    useEffect(()=>{
        // console.log('mounting');
        return ()=>{
        };
    },[]);
    useEffect(()=>{
    },[isLoading])
    return (
        <View>
            <TextInput
                placeholder="Enter Username"
                onChangeText={(val) => {
                    setInput(val);
                }}
                style={styles.input}
            />
            <View style={styles.btn}>
                <Button
                    title="DONE"
                    onPress={() => {
                    input ? fetchUserDate() : null;
                    setInterval(() => {
                        setIsLoading(false);
                    }, 2000);
                    }}
                />
            </View>
            {isLoading ? <ActivityIndicator /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        padding: 20,
    },
    btn:{
        margin: 10,
        
    }
})

export default Form;
