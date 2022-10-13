import React from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

class Form extends React.Component {
    state = { isLoading: false };

    render() {  
        return (
        <View>
            <TextInput placeholder="Enter user username" />
            <Button
            title="DONE"
            onPress={() => {
                this.setState({ isLoading: true });
                // Fetch Data
                setInterval(() => {
                this.setState({ isLoading: false });
                }, 2000);
            }}
            />
            {this.state.isLoading ? <ActivityIndicator /> : null}
        </View>
        );
    }
}

export default Form;