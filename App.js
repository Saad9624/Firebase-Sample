import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import faker from 'faker'
import {Card } from 'native-base' ;
import CALL from './assets/images/callIcon.png' ;
import EMAIL from './assets/images/commentIcon.png' ;
import { TextInput } from 'react-native-gesture-handler';
import { FloatingAction } from "react-native-floating-action";
import { Container, Header, Button, Icon, Fab } from 'native-base';
import firebase from 'firebase' ;
import Toolbar from './route/components/toolbar' ;


export default class App extends Component {



  static navigationOptions={
    header:null
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      isLoading: true,
      active: false

    }
     
    this.arrayholder = [];

  }
  componentDidMount() {
    this.setState({isLoading: true}, this.fetchMillions)
    

  }

  fetchMillions = async() =>{
    let MockPersonList =  new _.times(20,(i)=>{
      return {
        id:i,
        index:i,
        name:faker.name.findName(),
        url:faker.internet.avatar(),
        group:_.sample(["Family","Friend","Acquaintance","Other"]),
        email:faker.internet.email(),
        number:faker.phone.phoneNumber(),
      }
    })
    setTimeout(()=>{
      this.setState({
         isLoading:false,
        data: this.state.data.concat(MockPersonList)
       },() => {
        this.arrayholder = this.state.data.concat(MockPersonList);
      });
     

    },2000) 
  }

  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
 
    this.setState({
      data: newData,
      text: text
      })
    }

  renderRow = ({item}) => {
    return (
      <Card style={styles.itemRow}>
        <Image source={{uri: item.url}} style={styles.itemImage} />

        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.row}>
            <Image style={styles.image} source={EMAIL}></Image>
            <Text style={styles.itemText}>{item.email}</Text>
        </View>

        <View style={styles.row}>
            <Image style={styles.image} source={CALL}></Image>
            <Text style={styles.itemText}>{item.number}</Text>      
        </View>
        
        

      </Card>
    )
  }

  renderFooter = () => {  
    return (
     
      <View style={{flexDirection:'row',alignContent:'center',alignSelf:'center',marginVertical:50,marginBottom:60}}>
        
          
           <TouchableOpacity
           style={{backgroundColor:'#5067FF',alignItems:'center',justifyContent:'center',width:100,height:40,borderRadius:5}}
             onPress={this.handleLoadMore}
           >
           <Text style={{color:'white',fontSize:15,fontWeight:'500'}}> LOAD MORE</Text>

           </TouchableOpacity>
            { this.state.isLoading ? 
          <View style={styles.loader}>
            
            <ActivityIndicator color="blue" size="large"/>
          </View> : null}
        
      </View>
    )
  }

  handleLoadMore = () => {
  
    this.setState({ page: this.state.page + 1, isLoading: true })
     this.fetchMillions()
  }

  render() {
    return (
      <View style={{flex:1}}>
            <Toolbar title="Million Records"/>
            <Card style={styles.search}>
              <TextInput 
              onChangeText={(text) => this.searchData(text)}
              placeholder="Search by Name"></TextInput>
            </Card>
      
            <FlatList
              style={styles.container}
              data={this.state.data}
              renderItem={this.renderRow}
              keyExtractor={(item, index) => index.toString()}
            // onEndReached={this.handleLoadMore}
            // onEndReachedThreshold={0}
              ListFooterComponent={this.renderFooter}
            />
           
            <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {
              console.log("clicked")
            //  this.props.navigation.navigate('AddData')
              this.setState({ active: !this.state.active })
            }}>

                <Text>+</Text>
                  <Button
                  onPress={() => {
                  this.props.navigation.navigate('AddData')
                  }}
                  
                  style={{ backgroundColor: 'red' }}>
                    <Text style={{color:'white'}}>+</Text>
                  </Button>
                  <Button
                  onPress={() => {
                    console.log("clicked")
                  this.props.navigation.navigate('Details')
                  }}
                  
                  style={{ backgroundColor: 'green' }}>
                    <Text style={{color:'white'}}>-></Text>
                  </Button>
             
          </Fab>
        </View>

                    


        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f5fcff'
  },
  itemRow: {
    marginBottom: 10,
    margin:10,
    marginHorizontal:10,
    width:'90%',
    alignSelf:'center',
    borderRadius:15
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  itemText: {
    fontSize: 16,
    padding: 5
  },
  loader: {
    alignItems: 'center'
  },
  name:{
    fontSize:18,
    alignSelf:'center',
    marginVertical:5
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  image:{
    width:15,
    height:15,
    resizeMode:'contain',
    marginHorizontal:10
  },
  search:{
    height:40,
    width:'95%',
    alignSelf:'center'
  }
})