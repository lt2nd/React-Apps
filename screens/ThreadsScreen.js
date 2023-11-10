import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { UserType } from "../UserContext";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const ThreadsScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [user, setUser] = useState();
  const [content, setContent] = useState("");
  const navigation = useNavigation();
  
  

  const handlePostSubmit = () => {
    const postData = {
     
      userId,
    };

    if (content) {
      postData.content = content;
    }

    axios
      .post("http://192.168.0.105:3000/create-post", postData)
      .then((response) => {
        setContent("");
      })

      .catch((error) => {
        console.log("error creating post", error);
      });
    navigation.navigate('Home')

  };

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          padding: 10,
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
          }}
        />

        <Text>Sredi posle</Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <TextInput
          value={content}
          onChangeText={(text) => setContent(text)}
          placeholderTextColor={"black"}
          placeholder="Type your message..."
          multiline
        />
      </View>

      <View style={{ marginTop: 20 }} />

      <Button  onPress={handlePostSubmit} title="Share Post" />
    </SafeAreaView>
  );
};

export default ThreadsScreen;

const styles = StyleSheet.create({});