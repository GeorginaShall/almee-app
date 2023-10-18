import EditScreenInfo from '../../components/EditScreenInfo';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sample React Native Page</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Label 1:</Text>
        <TextInput style={styles.input} placeholder="Input 1" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Label 2:</Text>
        <TextInput style={styles.input} placeholder="Input 2" />
      </View>


      <View >
        <TouchableOpacity   style={styles.btn}>
          <Text style={styles.btnTitle}>Go to Specific Coordinates</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fc5555',    
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    marginBottom: 40,
    width:'70%',
  },
  label: {
    fontSize: 18,
    color: '#5bc7cb',
    marginBottom: 5,
  },
  input: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#fe8a71",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100,
    elevation: 5,
    paddingLeft: 10,
    shadowColor: "black",
    shadowOffset: { width: 0.3 * 4, height: 0.5 * 4 },
    shadowOpacity: 0.2,
    shadowRadius: 0.7 * 4,
    width: "100%",
  },

  btn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fe8a71",
    paddingHorizontal: 10,
    borderRadius: 100,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0.3 * 4, height: 0.5 * 4 },
    shadowOpacity: 0.2,
    shadowRadius: 0.7 * 4,
    width: "100%",
  },
  btnTitle: {
    color: "white",
    fontWeight: "bold",
  },
});
