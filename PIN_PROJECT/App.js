import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';

// import MainForm from '.app/components/MainForm';

export default class App extends React.Component {

  // onNumClicked(num) {
  //   // Alert.alert(num);
  //   header: num;    
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <MainForm /> */}
        <Text style={styles.header}>Enter PIN to unlock!</Text>
        <View style={styles.row}>
          <TextInput style={styles.textInput} underlineColorAndroid={'#000'} maxLength={1} keyboardType='numeric' />
          <TextInput style={styles.textInput} underlineColorAndroid={'#000'} maxLength={1} keyboardType='numeric' />
          <TextInput style={styles.textInput} underlineColorAndroid={'#000'} maxLength={1} keyboardType='numeric' />
          <TextInput style={styles.textInput} underlineColorAndroid={'#000'} maxLength={1} keyboardType='numeric' />
        </View>

        {/* <Button style={styles.row}>
          onPress={() => {
            Alert.alert('1');
          }}
          title="Press Me"
        /> */}

        {/* <View style={styles.numpad}> */}
        <View style={styles.row}>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("1");
            }}
          >1</Text>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("2");
            }}>2</Text>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("3");
            }}>3</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("4");
            }}>4</Text>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("5");
            }}>5</Text>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("6");
            }}>6</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("7");
            }}>7</Text>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("8");
            }}>8</Text>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("9");
            }}>9</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.number}> </Text>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("0");
            }}>0</Text>
          <Text style={styles.number}
            onPress={() => {
              this.onNumClicked("X");
            }}>X</Text>
        </View>
        {/* </View> */}
        <Text style={styles.footer}>Forgot PIN?</Text>
        <Text style={styles.footer}>Tap here to reset</Text>

      </View>
    );
  }

  onNumClicked(num) {
    Alert.alert(num);
    var key = "0";
    var pass = "7890";

    // let numLength = num.numLength

    key = key.concat(num);
    

    // while(key.length=4){
    //   if(key === pass){
    //     Alert.alert("CORRECT PIN");
    //   }else{
    //     key="0";
    //   }
    // }

    // if(key==pass){
    //   Alert.alert("CORRECT PIN");
    // }else{
    //   Alert.alert("INCORRECT PIN");
    // }

   


  };
}




const styles = StyleSheet.create({

  numpad: {
    alignSelf: 'center',
  },

  row: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: "row"
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 50,
  },

  header: {
    fontSize: 20,
    marginBottom: 30,
    alignSelf: 'center',

  },

  footer: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',

  },

  number: {
    flex: 2,
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 10,
    height: 40,
    width: 80,
    alignSelf: 'center',
  },

  textInput: {
    fontSize: 20,
    marginBottom: 10,
    height: 40,
    width: 60,
    alignSelf: 'center',

  }
});
