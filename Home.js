import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, SectionList } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import { datasource } from './Data.js';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    borderWidth: 1,
  },

  buttonContainer: {
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    borderWidth: 1,
  },

  textStyle: {
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold',
  },

  box: {
    borderWidth: 1,
    height: 400,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'beige',
  },

  image: {
    objectFit: 'fill',
    width: 250,
    height: 350,
    marginTop: 120,
    marginBottom: 120,
  }
});

const Home = ({navigation}) => {

  const renderItem = ({item, index, section}) => {
    return (
      <TouchableOpacity
      onPress={ () => 
        {
          navigation.navigate("Edit", {index:index, type:section.title, name:item.name, image:item.image});
        }
      }>
        <View style={styles.box}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <StatusBar hidden={true} />
      <View style={styles.buttonContainer}>
        <Button 
        title="Add Pokemon"
        color="blue"
        onPress={() => {navigation.navigate("Add")}}></Button>
      </View>
      <SectionList contentContainerStyle={{padding: 10, margin: 10, height: 5000}} sections={datasource} renderItem={renderItem} 
      renderSectionHeader={({section:{icon, title, backgroundColor}}) => (
        <Icon name={icon} style={[styles.headerText, {backgroundColor:backgroundColor}]}>
          <Text>{title}</Text>
        </Icon>
      )}/>
    </View>
  );
}

export default Home;