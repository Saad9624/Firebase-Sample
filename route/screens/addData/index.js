import React from 'react';
import {
    View,
    Text,
    TextInput, Button,
    StyleSheet
} from 'react-native' ;
import {postBlogs,editDetails} from '../../container/actions' ;
import {connect} from 'react-redux';
import Toolbar from './../../components/toolbar' ;

class AddData extends React.Component{

    state={
        title:'',
        content:'',
        description:'',
        number:'',

        key:'',
        showButton:false

    }

    componentDidMount() {
        //this.props.navigation.getParam('item')
        if(this.props.route.params){
            const data = this.props.route.params.item
            this.setState({
                title:data.title,
                content:data.content,
                key:data.key,
                showButton:true,
                number:data.number
            })
            console.log("data", this.props.route.params)

            console.log("title", data)

        }
      
    }

    
    onSave= () =>{
        this.props.editDetails(this.state.title,this.state.content,this.state.number,this.state.key)   
        // console.log("data", this.state);
            this.setState({
                title:'',content:'',number:''
            })

            this.props.navigation.navigate('Details')

    }


    onSubmit= () =>{
        this.props.postBlogs(this.state.title,this.state.content,this.state.number)   
        // console.log("data", this.state);
            this.setState({
                title:'',content:'',number:''
            })
                        this.props.navigation.navigate('Details')


    }
    render(){

        return(
            <View>
                <Toolbar title="Add Details"/>
                <TextInput 
                style={styles.input}
                placeholder="Name"
                value={this.state.title}
                onChangeText={title=>this.setState({title})}></TextInput>
           <TextInput 
                 style={styles.input}

                value={this.state.content}
                placeholder="Description"
                onChangeText={content=>this.setState({content})}></TextInput>

                <TextInput 
                 style={styles.input}
                keyboardType="number-pad"
                value={this.state.number}
                placeholder="Phone Number"
                maxLength={11}
                onChangeText={number=>this.setState({number})}></TextInput>

           {!this.state.showButton &&  <Button
            onPress={this.onSubmit}
            


            title="Submit"
           /> }

             {this.state.showButton &&   <Button
            onPress={this.onSave}
            color="green"
            title="Save"
            />}
           
            </View>
        )
    }
}

export default connect(null,{postBlogs,editDetails}) (AddData) ;
//export default connect(null,null)(AddData);


const styles= StyleSheet.create({

    input:{
        borderColor:'grey',
        borderWidth:1,
        padding:10,
        margin:10,
        borderRadius:5

    }
})