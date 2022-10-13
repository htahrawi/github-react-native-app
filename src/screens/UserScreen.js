import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import User from "../components/User";

const UserScreen = (props) => {
  const {user} = props.route.params;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        {user ? (
          <User user={user}   />
        ) : null}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  innerWrapper: {
    padding: 20,
  },
});

export default UserScreen;
