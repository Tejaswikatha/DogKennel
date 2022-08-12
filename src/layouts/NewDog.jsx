import React from 'react';
import {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../components/button';
import {TextInputBase} from '../components/textInput';
import {addDog, updateDog} from '../store/slices/dogSlice';
import {styles} from '../Style';

const NewDog = props => {
  const {navigation, route} = props;
  const {dogData, index} = route.params || {};
  const initialState = dogData ?? {
    name: '',
    age: '',
    breed: '',
    gender: '',
    color: '',
  };

  navigation.setOptions({
    title: dogData ? 'Edit Dog Detail' : 'Add New Dog',
  });

  const dispatch = useDispatch();

  const [dogState, setDogState] = useState(initialState);

  const onChange = label => value => {
    setDogState({
      ...dogState,
      [label]: value,
    });
  };

  const goBack = () => navigation.goBack();

  const addNew = () => {
    const haveEmptyValues = Object.keys(dogState).filter(
      item => !dogState[item],
    );
    if (haveEmptyValues.length) {
      Alert.alert('Missing Values', 'Please enter all details');
    } else {
      dogData
        ? dispatch(updateDog({dogData: dogState, index}))
        : dispatch(addDog({...dogState}));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.rootStyle}>
      <TextInputBase
        value={dogState.name}
        placeholder="Name"
        onChangeText={onChange('name')}
      />
      <TextInputBase
        value={dogState.age}
        placeholder="Age"
        onChangeText={onChange('age')}
        keyboardType="numeric"
      />
      <TextInputBase
        value={dogState.breed}
        placeholder="Breed"
        onChangeText={onChange('breed')}
      />
      <TextInputBase
        value={dogState.color}
        placeholder="Color"
        onChangeText={onChange('color')}
      />
      <TextInputBase
        value={dogState.gender}
        placeholder="Gender"
        onChangeText={onChange('gender')}
      />
      <View style={styles.flexRow}>
        <Button
          label="Cancel"
          onButtonClick={goBack}
          mode="outlined"
          style={styles.flexGrow}
        />
        <Button
          label={!!dogData ? 'Update' : 'Add'}
          onButtonClick={addNew}
          style={styles.flexGrow}
        />
      </View>
    </View>
  );
};

export default NewDog;
