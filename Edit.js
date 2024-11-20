import React, {useState} from 'react';
import {Alert, StyleSheet, Button, Text, View, TextInput} from 'react-native';
import {datasource} from './Data.js';

const styles = StyleSheet.create({
    bottonsbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
    },

    text: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 10,
    },

    textinput: {
        borderWidth: 1,
        borderheight: 40,
        margin: 10,
        padding: 5,
        height: 40,
    },

    box: {
        marginTop: 300,
    },

    container: {
        backgroundColor: 'beige',
        height: '100%',
    }
});

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.name);
    const [image, setImage] = useState(route.params.image);

    return (
        <View style={styles.container}>
            <View style={styles.box}>

            <Text style={styles.text}>Name:</Text>
            <TextInput
            value={name}
            style={styles.textinput}
            onChangeText={ (text) => setName(text)}>
            </TextInput>

            <Text style={styles.text}>Image:</Text>
            <TextInput
            value={image} 
            style={styles.textinput}
            onChangeText={ (image) => setImage(image)}>
            </TextInput>

            </View>
           
            <View style={styles.bottonsbox}>
                <View style={{flex: 1, marginRight: 20}}>
                    <Button title='Save'
                    color="blue"
                    onPress={ () => {
                        let indexnum = 1;
                        if (route.params.type === 'Fire') {
                            indexnum = 0;
                        }
                        if (route.params.type === 'Electric') {
                            indexnum = 1;
                        }
                        if (route.params.type === 'Water') {
                            indexnum = 2;
                        }

                        datasource[indexnum].data[route.params.index].name = name;
                        datasource[indexnum].data[route.params.index].image = image;
                        navigation.navigate("Home");
                    }}/>
                </View>
                
                <View style={{flex: 1}}>
                    <Button title='Delete'
                    color="red"
                    onPress={() => {
                        let indexnum = 1;
                        if (route.params.type === 'Fire') {
                            indexnum = 0;
                        }
                        if (route.params.type === 'Electric') {
                            indexnum = 1;
                        }
                        if (route.params.type === 'Water') {
                            indexnum = 2;
                        }

                        Alert.alert("Are you sure?", '',
                        [{text: 'Yes', onPress: () => {
                            datasource[indexnum].data.splice(route.params.index, 1);
                            navigation.navigate("Home");
                        }},
                        {text: 'No'}]);
                    }}/>
                </View>
            </View>
        </View>
    );
};

export default Edit;