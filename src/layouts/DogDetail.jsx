import React from 'react';
import {View, Text, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../components/button';
import {deleteDog} from '../store/slices/dogSlice';
import {styles} from '../Style';

export const ViewText = (props) => {
    const {label, value} = props;
    return (
        <View style={styles.flexRow}>
            <Text style={[styles.flexGrow, {fontSize: 16}]}>{label}:</Text>
            <Text style={styles.flexGrow}>{value}</Text>
        </View>
    )
}

export const DogDetail = props => {
  const {item, index, navigation} = props;
  const {age, breed, color, gender, name} = item;
  const dispatch = useDispatch();
  const onDelete = () => {
    Alert.alert('Delete', 'Are you sure want to delete this dog detail?', [
      {
        text: 'No',
        onPress: () => console.log('cancelled'),
      },
      {
        text: 'Yes',
        onPress: () => dispatch(deleteDog({index})),
      },
    ]);
  };

  const onEdit = () => {
    navigation.navigate('NewDog', {
      dogData: item,
      index,
    });
  };

  return (
    <View style={styles.dogDetailStyle}>
      <View style={{margin: 5}}>
        <ViewText label="Name" value={name}/>
        <ViewText label="Age" value={age}/>
        <ViewText label="Breed" value={breed}/>
        <ViewText label="Color" value={color}/>
        <ViewText label="Gender" value={gender}/>
        </View>
        <View style={styles.flexRow}>
        <Button
          label="Delete"
          mode="outlined"
          onButtonClick={onDelete}
          style={styles.flexGrow}
        />
        <Button label="Edit" onButtonClick={onEdit} style={styles.flexGrow} />
      </View>
    </View>
  );
};
