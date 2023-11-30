import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';

import ProductCard from '../../components/Users/ProductCard';
import { useSelector } from 'react-redux';

const ProductView = ({ navigation }) => {
  const { products } = useSelector((store, action) => store);

  return (
    <>

      <ScrollView>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20, marginTop: 15, justifyContent: "center" }}>
          {
            products.map((item) => {
              return (
                <ProductCard key={item.id} item={item} navigation={navigation} />
              )
            })
          }
        </View>
      </ScrollView>

    </>
  )
}

export default ProductView;