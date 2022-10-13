import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Form from "../components/Form.Functional";
import User from "../components/User";
import ReposList from "../components/ReposList";

const Home = (props) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  return (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.innerWrapper}>
            <Form setUser={setUser} setRepos={setRepos} />
            {user ? (
                <User
                    user={user}
                />
            ) : null}
            <ReposList repos={repos} />
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  innerWrapper:{
    padding: 20
  }
});

export default Home;
