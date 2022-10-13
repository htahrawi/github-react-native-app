import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const User = (props) => {
    const {user} = props;
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigation.navigate("User",{user});
      }}
    >
      <Image source={{ uri: user.avatar_url }} style={styles.img} />
      <View>
        <Text style={styles.userNameText}>{user.username}</Text>
        <Text>{user.bio}</Text>
        <Text>Followers: {user.followers}</Text>
        <Text>Following: {user.following}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 20,
    padding: 10,
  },
  userNameText: {
    fontWeight: "bold",
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 100 / 2,
    borderColor: "gray",
    marginEnd: 10,
  },
});

export default User;
