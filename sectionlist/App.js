
import React, {Component} from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        sectionData: [
          {title:'A', data:[
            {key:'1', nome:'Alberto', idade:80},
            {key:'2', nome:'Alan', idade:18},
            {key:'3', nome:'Ana laura', idade:30},
          ]},
          {title:'R', data:[
            {key:'4', nome:'Rafael', idade:80},
            {key:'5', nome:'Ronald', idade:18},
            {key:'6', nome:'Roberto', idade:30},
          ]},
          {title:'T', data:[
            {key:'7', nome:'Tesla', idade:80},
            {key:'8', nome:'Tais', idade:18},
            {key:'9', nome:'Touro', idade:30},
          ]}
        ]
    };
  }

  renderSection(section){
    return(
      <Text style={styles.section}>Letra {section.title}</Text>
    );
  };

  renderItem(item){
    return(
      <Text style={styles.item}>{item.nome} - {item.idade} anos</Text>
    );
  }

  render(){
    return(
      <View style={styles.body}>
          <SectionList 
              sections={this.state.sectionData} 
              renderItem={({item})=>this.renderItem(item)} 
              renderSectionHeader={({section})=>this.renderSection(section)} >
          </SectionList>
      </View>   
    );
  }
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		flex:1
	},
	item:{
		fontSize:18,
		height:40,
		padding:10
	},
	section:{
		fontSize:14,
		backgroundColor:'#CCCCCC',
		padding:10
	}
});