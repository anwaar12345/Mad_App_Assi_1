import React, { Component } from 'react';
import { AppRegistry, ScrollView,StyleSheet, Image, Text } from 'react-native';
import Hello from './Hello';
import Pic from './Pic';
import Greeting from './Greeting';
import State from './State';
import StyleCss from './StyleCss';
import HeightStyle from './HeightStyle';
import Widths from './Widths';
import Flexbox from './Flexbox';
import Flex1 from './Flex1';
import FlexDir from './FlexDir';
import TextInput from './TextInput';
import HandlingTouch from './HandlingTouch';
import Handling_Touch2 from './Handlingtouch2';
import Flatelist from './Flatelist';
import Sectionlist from './Sectionlist';
import Networking from './Networking';


export default class MainApp extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={styles.textIntro}>Syed Anwar Ahmed shah</Text>
          <Text style={styles.textIntro}>FA15-BE-0011</Text>

          <Text style={styles.textIntro}>Mobile App Development Sec : (EW)</Text>
          <Text style={styles.textIntro}>Sub To: Sir Waqas Azam</Text>
           <Text style={styles.textIntro}>Assignment # 1</Text>
          <Text style={styles.textBlock}> Hello </Text>
          <Hello/>
          <Text style={styles.textBlock}> Bananas </Text>
          <Pic/>
          <Text style={styles.textBlock}> Greetings </Text>
          <Greeting/>
          <Text style={styles.textBlock}> State_Blink partition</Text>
          <State/>
          <Text style={styles.textBlock}> Css Styling </Text>
          <StyleCss/>
          <Text style={styles.textBlock}> Height Style </Text>
          <HeightStyle/>        
          <Text style={styles.textBlock}> Widths </Text>
          <Widths/>
          <Text style={styles.textBlock}> Flexbox </Text>
          <Flexbox/>
          <Text style={styles.textBlock}> Flexbox 1 removed and height is set 300 </Text>
          <Flex1/>
        
          <Text style={styles.textBlock}> Flexbox Direction Allignments of item</Text>
          <FlexDir/>
          <Text style={styles.textBlock}> Handling the Text input pizza translator</Text>
          <TextInput/>
          <Text style={styles.textBlock}> Handling Touch 1</Text>
          <HandlingTouch/>
          <Text style={styles.textBlock}> Handling Touch 2 </Text>  
          <Handling_Touch2/>
          <Text style={styles.textBlock}> Flate list demo </Text>  
          <Flatelist/>
          <Text style={styles.textBlock}> Section list demo </Text>  
          <Sectionlist/>
          <Text style={styles.textBlock}> Networking_Fetch Example </Text>  
          <Networking/>


        </ScrollView>
    );
    
} 
}
  


const styles = StyleSheet.create({
        textBlock: {
        display:"flex",fontSize:20, height:40, textAlignVertical:"center",textAlign:"center", fontWeight:"bold",borderTopColor:'skyblue', borderBottomColor: 'skyblue'
        ,borderBottomWidth: 3 } ,
    
       textIntro: {
        fontSize:20, height:60,textAlignVertical:"center",textAlign:"left", fontWeight:"bold",borderTopColor:'skyblue', backgroundColor: 'skyblue',padding:3,margin:10
        
      } ,
    }

)