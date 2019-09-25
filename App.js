import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Record from './Record';
import Sounds from './Sounds';
import Calibrate from './Calibrate';

const calibrationNavigator = createStackNavigator(
  { 
    Record: {     
    screen: Record,
    },  
    Calibrate: {
      screen: Calibrate,
    },
  },
);

const bottomNavigator = createMaterialBottomTabNavigator(
  { 
    Record: {     
    screen: calibrationNavigator,
    },  
    Sounds: {
      screen: Sounds,
    },
  }, {   
    tabBarOptions: {          
      labelStyle: {       
        fontSize: 16,       
        color: 'white'     
      },     
      style: {       
        backgroundColor: '#6666ff'     
      },   
    }
  }
);

const AppContainer = createAppContainer(bottomNavigator); 
     
export default class App extends React.Component {   
  render() {     
    return (
      <AppContainer/>                     
    );   
  } 
}