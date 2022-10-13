import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Repo from "../components/Repo";

const RepoScreen = (props) => {
  const { repo } = props.route.params;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <Repo item={repo} />
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

export default RepoScreen;
