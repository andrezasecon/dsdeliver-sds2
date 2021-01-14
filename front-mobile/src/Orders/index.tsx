import { useIsFocused, useNavigation } from '@react-navigation/native';
import { isLoading } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Touchable, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {       
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () =>{
    setIsLoading(true);
    fetchOrders()
    .then(response => setOrders(response.data))
    .catch(() => Alert.alert("Houve um erro ao buscar os pedidos!"))
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

   const handleOnpress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
      <>
      
        <Header />
          <ScrollView style={styles.container}>
            {isLoading ? (
              <Text style = {styles.textLoading}>Buscando pedidos ... </Text>
            ) : (
            orders.map(order => (              
                <TouchableWithoutFeedback 
                key={order.id} 
                onPress={() => handleOnpress(order)}
                
                >
                   <OrderCard order={order}/>
                </TouchableWithoutFeedback>  
            )) 
          )}         
            
          </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingRight: '5%',
    paddingLeft: '5%'
  },

  textLoading:{
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: -0.24,
    color: '#DA5C5C',
    fontFamily: 'OpenSans_700Bold',
    marginTop: 100,
    textAlign: 'center',
  }
});
export default Orders;
