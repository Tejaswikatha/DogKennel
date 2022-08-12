import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from '../components/button';
import {dogListSelector} from '../store/selectors/dogSelector';
import {styles} from '../Style';
import {DogDetail} from './DogDetail';

const DogsListing = props => {
  const {navigation} = props;
  const dogs = useSelector(dogListSelector);
  const renderDogDetail = ({item, index}) => (
    <DogDetail item={item} index={index} navigation={navigation}/>
  );

  const goToAdd = () => navigation.navigate("NewDog")

  return (
    <View style={styles.rootStyle}>
      <Button mode="outlined" onButtonClick={goToAdd} label="Add New Dog" />
      <FlatList
        data={dogs}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        renderItem={renderDogDetail}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DogsListing;
