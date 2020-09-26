import firebase from '../../../fb'  ;


export function getblog(){
    return(dispatch) =>{
        firebase.database().ref('/blogs').on('value' , snapshot =>{
            dispatch({
                type:'BLOGS_FETCH',
                payload:snapshot.val()
            })
        })
    }
}


export function postBlogs(title,content,number){
    return(dispatch) =>{
        firebase.database().ref('/blogs').push({title,content,number})
    }
}

export function deleteBlogs(key){
    return(dispatch) =>{
        firebase.database().ref(`/blogs/${key}`).remove()
    }
}

export function editDetails(title,content,key){
    return(dispatch) =>{
        firebase.database().ref(`/blogs`).child(key).update({title,content,number})
    }
}