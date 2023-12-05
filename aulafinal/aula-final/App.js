import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBiRsc4BVGhX4DvRvZ5t1l0w0lVi7tiVzc",
  authDomain: "meuprimeirofirestore-785f3.firebaseapp.com",
  projectId: "meuprimeirofirestore-785f3",
  storageBucket: "meuprimeirofirestore-785f3.appspot.com",
  messagingSenderId: "52596819370",
  appId: "1:52596819370:web:0ea6bcefa91b9b1e1317d3"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pessoasCollection = firebase.firestore().collection('Pessoas');
      const snapshot = await pessoasCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome} {item.sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
