import React from 'react'
import {
    View,
    Text,
    FlatList,
    Button,
    TouchableOpacity
} from 'react-native' ;
import {getblog,deleteBlogs} from '../../container/actions' ;
import {connect} from 'react-redux' ;
import _ from 'lodash' ;
import {Card} from 'native-base';
import Toolbar from './../../components/toolbar';

class Details extends React.Component{

    componentDidMount(){
            this.props.getblog()
            console.log("dataaa" , this.props.listofData)
    }

    _renderRow =({item}) =>{
        return(
            <Card style={{padding:10,borderRadius:10}}>
                <Text style={{fontSize:20,alignSelf:'center',fontWeight:'bold',marginVertical:10}}>{item.title}</Text>
                <Text style={{fontSize:15,alignSelf:'center'}}>{item.content}</Text>
                <Text style={{fontSize:15,alignSelf:'center'}}>{item.number}</Text>


                <View style={{flexDirection:'row',flex:1,justifyContent:'space-between' ,height:40}}>

                    <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('AddData', {
                           item : item
                           })
                       } 
                    style={{backgroundColor:'#5067FF',flex:1,alignItems:'center',justifyContent:'center',borderRadius:10,marginHorizontal:5}}>
                        <Text style={{color:'white'}}>EDIT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => this.props.deleteBlogs(item.key)}
                    style={{backgroundColor:'red',flex:1,alignItems:'center',justifyContent:'center',borderRadius:10,marginHorizontal:5}}>
                        <Text  style={{color:'white'}}>DELETE</Text>
                    </TouchableOpacity>
                
                {/* <Button  onPress={() =>
                 this.props.navigation.navigate('AddData', {
                    item : item
                    })
                } title=" Edit "></Button>
                <Button style={{flex:1}} onPress={() => this.props.deleteBlogs(item.key)} title="Delete"></Button> */}


                </View>

               
            </Card>
        )
    }
    render(){
        return(
            <View>
                <Toolbar title="List OF Users"/>
                <FlatList
                data={this.props.listofData}
                keyExtractor={(item) =>item.key}
                renderItem={this._renderRow}
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    const listofData = _.map(state.blogsList.blogsList,(val,key) =>{
        return{
            ...val,
            key:key
        }
    })
    return{
        listofData
    }
}

export default connect(mapStateToProps,
    {getblog,deleteBlogs})(Details) ;
