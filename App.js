import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect} from 'react';

export default function App() {
  return (
    <><View style={styles.container}>
      <Text>API Details</Text>
      <StatusBar style="auto" />
      const[data,setData ]= useState(underfined);
      const getAPIData = async()=>{ }
      const url = "https://stagingsite.livelaw.in/dev/h-api/news"
      let result= await fetch(url)
      result = await result.json();
      console.warn(result)
      }

      useEffect(()=>{useEffect(() => {
        getAPIData();
      }, [])})
      return (</View><Text style={{ fontSize: 30 }}> API CALL </Text></>
    {
      data?<View>
      <Text style = {{fontSize:30 }}>{data.errorMessage}</Text>
      <Text style = {{fontSize:30 }}>{data.errorCode}
      </Text>
      </View>:null
    })
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
