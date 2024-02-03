import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ProductProps = PropsWithChildren<{
    product: Product
}>

const ProductItem = ({product}: ProductProps) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container,styles.card,styles.cardElevated]}>
      <Image
      source={{uri: product.imageUrl}}
      style={styles.image}
      />

      <View>
        <Text style={styles.name} numberOfLines={0} ellipsizeMode='tail'>{product.name}</Text>

        <View style={[styles.rowContainer,styles.ratingContainer]}>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{product.rating}⭐</Text>
            </View>
        </View>
        <View style={[styles.rowContainer,styles.priceContainer]}>
            <Text style={styles.ratingCount}>({product.ratingCount.toLocaleString()})</Text>
        </View>

        <View style={[styles.rowContainer, styles.priceContainer]}>
            <Text style={styles.originalPrice}>
                   ₹{product.originalPrice.toLocaleString()}
            </Text>
            <Text style={styles.discountPrice}>
                ₹{product.discountPrice.toLocaleString()}
            </Text>
            <Text style={styles.offerPercentage}>
                %{product.offerPercentage} off
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12,
      height: 180,
      alignItems: 'center',
      resizeMode: 'stretch'
      
    },
    rowContainer: {
      flexDirection: 'row',
    },
    image: {
      width: 90,
      height: 150,
      resizeMode: 'contain',
  
      marginRight: 12,
    },
    name: {
      marginTop: 12,
      marginBottom: 4,
      fontSize: 14,
      fontWeight: '600',
    },
    ratingContainer: {
      marginBottom: 8,
    },
    priceContainer: {
      marginBottom: 12,
    },
    rating: {
      borderRadius: 4,
      paddingHorizontal: 8,
      justifyContent: 'center',
      backgroundColor: '#008c00',
  
      marginRight: 4,
    },
    ratingText: {
      color: '#000000',
      fontSize: 12,
      fontWeight: '600',
    },
    ratingCount: {
      color: '#878787',
    },
    originalPrice: {
      fontSize: 18,
      marginRight: 4,
      fontWeight: '600',
  
      color: 'rgba(0, 0, 0, 0.5)',
      textDecorationLine: 'line-through',
    },
    discountPrice: {
      fontSize: 18,
      marginRight: 4,
      fontWeight: '600',
  
      color: '#000000',
    },
    offerPercentage: {
      fontSize: 17,
      fontWeight: '600',
      color: '#4bb550',
    },
    card :{
      // width :350,
      // height :360,
      // marginVertical :12,
      // marginHorizontal :16,
      borderRadius :8
    },
    cardElevated :{
      backgroundColor : '#FFFFFF',
      elevation : 4,
      shadowOffset :{
        width :1,
        height :1
      }
    }
  });

 export default ProductItem
