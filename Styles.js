import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },

  title: {
    fontSize: 20,
    color: '#6f6f6f',
  },

  text: {
    fontSize: 16,
    color: '#6f6f6f',
  },

  textDone: {
    fontSize: 16,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },

  whiteText: {
    fontSize: 20,
    color: '#fff',
  },

  textInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 10,
  },

  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addButton: {
    width: Dimensions.get('screen').width * 0.25,
    backgroundColor: '#5897fb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  scrollContainer: {
    marginTop: 20,
  },

  itemContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  removeButton: {
    backgroundColor: '#f33d3d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
