import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import {datasource} from './Data.js';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
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
        marginTop: 270,
    },

    container: {
        backgroundColor: 'beige',
        height: '100%',
    }
    
});

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');

    return (
        <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>Name:</Text>
            <TextInput 
            style={styles.textinput}
            onChangeText={ (text) => setName(text)}>
            </TextInput>

            <Text style={styles.text}>Image:</Text>
            <TextInput 
            style={styles.textinput}
            onChangeText={ (image) => setImage(image)}>
            </TextInput>

            <RNPickerSelect
            onValueChange={(value) => setType(value)}
            items= {[
                {label: 'Fire', value: 'Fire'},
                {label: 'Electric', value: 'Electric'},
                {label: 'Water', value: 'Water'},
            ]}/>

            <Button title='Submit'
            color="blue"
            onPress={ () => {
                let item = {name: name, image: image};
                let indexnum = 1;
                if (type === 'Fire') {
                    indexnum = 0;
                }
                if (type === 'Electric') {
                    indexnum = 1;
                }
                if (type === 'Water') {
                    indexnum = 2;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home");
            }}/>
        </View>
        </View>
    );
};

export default Add;