import React from 'react';
import { Actions } from 'react-native-router-flux';
import { FlatList } from 'react-native';
import Product from '../../../components/items/stake/Products';
import { SafeAreaView, View, ViewRow } from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Image } from '../../../components/styled/Image';
import { products } from '../../../utils/dummy';
import iconDownGray from '../../../assets/main/icon_down_gray.png';
import RenderListHeader from '../../../components/renderListHeader/RenderListHeader';

const FlexibleScreen = () => {


  const renderProducts = ({ item }) => {
    const onPressItem = () => {
      Actions.flexibleDetailScreen({ item });
    };
    return <Product {...item} onPress={onPressItem}/>;
  };

  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        justifyContent={'center'}
        alignSelf={'center'}
        width={'96%'}
      >
        <View height={50} marginTop={20} marginLeft={10}>
          
        </View>
        <View flex={6} marginBottom={10} marginTop={30}>
          <FlatList
            ListHeaderComponent={RenderListHeader("Product","Price", "APR") }
            data={products}
            ItemSeparatorComponent={() => <View height={5} />}
            renderItem={renderProducts}
            contentContainerStyle={
              products.length === 0 && {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }
            }
            keyExtractor={(item) => String(item.id)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FlexibleScreen;
