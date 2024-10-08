import React, { useEffect, useState } from "react";
import { View, Text, Image } from 'react-native';
import Firebase from './src/Config';

function App() {

  const [dados, setDados] = useState();

  useEffect(() => {

    const q = query(collection(db, "cities"), where("capital", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginTop: '50%' }}>Hello, world!</Text>
    </View>
  )
}

export default App;