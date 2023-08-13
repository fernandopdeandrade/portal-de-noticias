import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const ImageHeader = (props) => {
  const { userName } = props;

  const [image, setImage] = useState(null);
  const [imageStorage, setImageStorage] = useState(null);

  useEffect(() => {
    getImage();
  }, [image]);

  const getImage = async () => {
    try {
      const image = await AsyncStorage.getItem("@image");
      if (image !== null) {
        setImageStorage(image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        aspect: [4, 3],
        allowsEditing: true,
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {       
        setImage(result.assets[0].uri);
        await AsyncStorage.setItem("@image", result.assets[0].uri);
      } else {
        setImage(null);
        setImageStorage(null);
        await AsyncStorage.removeItem("@image");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Image
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          marginTop: 20,
        }}        
        source={imageStorage === null
          ? require("../images/avatar.png")
          : { uri: imageStorage }}
      />
      <TouchableOpacity onPress={handleImagePicker}>
        <Text style={{ color: 'white', fontSize: 12 }}>
        {imageStorage === null ? 'Adicionar' : `${userName}`}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ImageHeader;