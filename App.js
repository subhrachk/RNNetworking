import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';



export default function App() {

  const [postList,setpostList] = useState([]);
  
  const fetchData = async(_limit=10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${_limit}`);
    const data = await response.json();
    setpostList(data);
    console.log(data);
    }

  useEffect(()=>{fetchData()},[]);

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        {postList.map(p => <Text>{p.id}</Text>)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currebtHeight,
  },
  listContainer : {

  }
});
