import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from './Styles';
import RenderItem from './RenderItem';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('mytodo-tasks', JSON.stringify(value));
    } catch (e) {
      // saving
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mytodo-tasks');
      if (value !== null) {
        const tasksLocal = JSON.parse(value);
        setTasks(tasksLocal);
      }
    } catch (e) {
      // error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addTask = () => {
    const tmp = [...tasks];
    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    storeData(tmp);
    setText('');
  };
  const markDone = (task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex((el) => el.title === task.title);
    const todo = tasks[index];
    todo.done = !todo.done;
    setTasks(tmp);
    storeData(tmp);
  };

  const deleteFunction = (task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex((el) => el.title === task.title);
    tmp.splice(index, 1);
    setTasks(tmp);
    storeData(tmp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar una nueva tarea"
          onChangeText={(t) => setText(t)}
          value={text}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              markDone={markDone}
              deleteFunction={deleteFunction}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
  );
}
