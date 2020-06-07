import React , {useState} from 'react';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import Header from './components/header';
import TodoIteam from './components/todoiteams';
import AddTodo from './components/addTodo' 


export default function App() {
  const [todos, settodos] = useState(
    [ { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
    { text: 'play on the another switch', key: '4' }]
    );
const pressHandler= (key) => {
  settodos((prevTodos) =>{
    return prevTodos.filter(prevTodos => prevTodos.key !=key)
  });
}

const submitHandler = (text) =>{
  settodos((previousTodos)=>{ 
    return [
      {text:text , key: Math.random().toString()}, ...previousTodos
    ];
  
  })
}

  return (
    <View style={styles.container}>
      {/*header */}
      <Header/>
      <View  style ={styles.content} >
        <AddTodo submitHandler={submitHandler}/>
       
        {/*to form */} 
        <View  style ={styles.list} >
          <FlatList 
            data ={todos}
            renderItem ={({item})=>(
              <TodoIteam item={item} pressHandler={pressHandler}/>

            )
          
          }
          />

        </View> 
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
