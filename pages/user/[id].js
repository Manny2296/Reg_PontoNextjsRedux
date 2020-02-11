
import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch';
import "../../components/Table.scss"
import MaterialTable from 'material-table';
import {imgupload} from '../../components/image/outbox.png'
import React, { Component } from 'react';
import Router from 'next/router'
import { Button, Container,Box } from '@material-ui/core';
import { _updateUser } from "../../actions/userAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { _updateImageUser } from "../../actions/userAction";
import { faBackward, faUserEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import "../../components/Table.scss"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper'

const stylebutton = {
  background: 'linear-gradient(45deg, #409946 30%, #66BB6A 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  width : '100%',
  height: 48,
  padding: '0 10px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
 // marginLeft: 20,
  marginTop: 5,
 // marginRight: 20
};
const stylebackbutton = {
 background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  width : '100%',
  height: 48,
  padding: '0 20px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
 // marginRight: 20,
  marginTop: 5,
  marginBottom: 10,
  //marginLeft: 20,
};
const textinput = {
  background: 'linear-gradient(45deg, #fafafa 30%, #f5f5f5 90%)',
  borderRadius: 3,
  fontSize: 18,
  fontFamily: 'Garamond',
  color: 'black',
  height: 35,
  padding: '0 10px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  
}
const imgstyle ={
  
  width: 100,
  height:100,
 // padding: '0 5px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  marginLeft: 30,
 // resizeMode: 'stretch',
  
}
const imguplod = {
    display: 'none'
  
}
const textinputdisabled = {
  background: '#e0e0e0',
  borderRadius: 3,
  fontSize: 18,
  fontFamily: 'Garamond',
  color: 'black',
  height: 35,
  
  padding: '0 20px',
 
 
}
const columns =  [{title:"Nome Empleado", field:"name"},
{title:"Numero Documento", field:"ndoc"},
{title:"Hora ingreso", field:"horaingreso"},
{title:"Hora saida", field:"horasalida"}

]
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  
};
class userprofile extends Component {
  constructor(props){
    super(props)

    let datauser= this.props.data.filter(function(user){
      return user.ndoc == props.queryval
    })
    this.state = {
      disable : true,
      user : datauser[0],
      idusuario:1,
      name : datauser[0].name,
      surname : datauser[0].name,
      id_Document :datauser[0].ndoc,
      mail : datauser[0].name.trim() + "@gmail.com",
      telephone : "(35) 984490896 ",
      password : datauser[0].name,
      image_user: null,
      selectedFile: null,
      imagePreviewUrl : null,
      historicdata: datauser
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlesurnameChange = this.handlesurnameChange.bind(this);
    this.handleNoDocumentChange = this.handleNoDocumentChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this)
    this.URL_IMAGE_COMMON = 'http://localhost:8080/users/';
    
  }
  handleNameChange(event) { 
    this.setState({name: event.target.value});
  }
  handlesurnameChange(event) {  
    this.setState({surname: event.target.value});
  }
  handleNoDocumentChange(event) {  
    this.setState({id_Document: event.target.value});
  }
  handleEmailChange(event) {  
    this.setState({mail: event.target.value});
  }
  handleTelephoneChange(event) {  
    this.setState({telephone: event.target.value});
  }
  handlepasswordChange(event) {  
    this.setState({password: event.target.value});
  }


  handleUpdateUser() {
    if(this.state.disable){
      this.setState( {disable: !this.state.disable} )
    }  
  } 
  
  handleSaveUser(){
    //var _userupdt = [{idusuario:this.state.idusuario,name:this.state.name,surname:this.state.surname,id_Document:this.state.id_Document,mail:this.state.mail,password:this.state.password,telephone:parseInt(this.state.telephone)}]
   //  console.log("toupdate" + _userupdt)
   // _updateUser(_userupdt)
    //_updateImageUser(this.state.selectedFile,this.state.idusuario)
    this.setState({disable: true})

  }
  handleUploadImage(event){
    this.setState({
      selectedFile: event.target.files[0]
    })
  
    let reader = new FileReader();
     
    reader.onloadend = () => {
     
      this.setState({
        imagePreviewUrl: reader.result
      });
   
    }
    
    try {
      reader.readAsDataURL(event.target.files[0])
    } catch (error) {
    
    }
   
 
  }

  imgbasedonstate(){
    if(this.state.image_user != "" || this.state.imagePreviewUrl !== null )
    {
      
      //console.log('ppar if' + this.state.image_user )
      return (
        <img style={imgstyle}  src={(this.state.imagePreviewUrl !== null)? this.state.imagePreviewUrl : require('../../components/image/images.png')}/>


      )
    }
    else 
   // console.log('ppar else - -' + this.state.image_user + '.')
    return(
      
      <img style={imgstyle}  src={require('../../components/image/images.png')}/>

    )
  }
  render() {
  
    return (
      <Layout>  
        <div>  
           <Box className="containerDataUser" > 
            <Button title="Volver al menu de usuarios" style={stylebackbutton} size='large' variant='contained' onClick={() => Router.back()}><FontAwesomeIcon icon={faBackward}/>&nbsp;Volver</Button>
            <table>
           
            <tbody>
              <tr>
                <th>
                Nombre
                </th>
                <th>
            <input type="text" style={(this.state.disable)? textinputdisabled : textinput}  disabled={(this.state.disable)? "disabled" : ""} value={this.state.name} onChange={this.handleNameChange} />
                
                </th>
              </tr>
              <tr>
                <th>
                Apellido 
                </th>
                <th>
            <input type="text" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.surname} onChange={this.handlesurnameChange} />
                </th>
              </tr>
              <tr>
                <th>
                No Documento 
                </th>
                <th>
                <input type="number" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.id_Document} onChange={this.handleNoDocumentChange} />

                </th>
              </tr>
             
              <tr>
                <th>
                 E-mail
                </th>
                <th>
                <input type="email" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.mail} onChange={this.handleEmailChange} />
                </th>
              </tr>
              <tr>
                <th>
                 Telefono
                </th>
                <th>
                <input type="text" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.telephone} onChange={this.handleTelephoneChange} />
                </th>
              </tr>
              <tr>
                <th>
                 Contraseña 
                </th>
                <th>
                <input type="password" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.password} onChange={this.handlepasswordChange} />
                </th>
              </tr>
            </tbody>
          </table>
          
        
          
        <div>
        <div >
         {this.imgbasedonstate()}
        <label >  
       <img title="Cargar imagen para usuario" src={require('../../components/image/outbox.png')}/>
       <input style={imguplod} id="file-input" type="file" onChange={this.handleUploadImage}/>
        </label>
          </div>
        <img   />
        <br/>
           <Button title="Modificar Usuario" onClick={this.handleUpdateUser.bind(this)} variant="contained" style={stylebutton}>&nbsp;Modificar usuario</Button>
        <br/>
           <Button title="Guardar cambios Usuario" onClick={this.handleSaveUser.bind(this)} variant="contained" style={stylebutton}><FontAwesomeIcon icon={faSave}/>&nbsp; Guardar</Button>
     
           </div>
           </Box>

           <Paper className='container'>
    <MaterialTable
       
       icons={tableIcons}
      
       title="Lista de Usuarios"
       columns={columns}
       data={this.state.historicdata}
       actions={[
        {
          icon: AccountCircleIcon,
          tooltip: 'User Profile',
          onClick: (event, rowData) => //alert("You saved " + rowData.name)window.location.href
          window.location.href = `/user/${rowData.id_Document}`
           
        }
       ]}
    
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              _createUser(newData)
             
              this.setState(
                { 
                  users: [...this.state.users,newData]
                }
              )              
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {                            
                let toPut = Object.values(newData);
                var arraytoPut = [{idusuario:toPut[0],name:toPut[1],surname:toPut[2],id_Document:toPut[3],email:toPut[4],telephone:parseInt(toPut[6])}]
               //   console.log("toPut> " + JSON.stringify(toPut))
                  _updateUser(arraytoPut);              
                  this.setState(prevState => {
                    const users = [...prevState.users];
                    users[users.indexOf(oldData)] = newData;
                    return { ...prevState, users };
                  });
                         
                                                         
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              console.log(JSON.stringify(oldData))
              _deleteUser(oldData)
              this.setState(() => {
      
                return { users:this.state.users.filter(item => item.idusuario !== oldData.idusuario) };
              });
            }, 600);
          }),
     
      }}
    />
    </Paper>
    </div>
    </Layout>
    );
  }
}

userprofile.getInitialProps = async({ query,store}) => {
  
  //const res = await fetch('http://localhost:8080/users/'+ query.id);
  //const data = await res.json();
 // console.log('https://winged-pen-261210.appspot.com/users/'+ query.id)
    console.log(query.id);
    store.dispatch({type: 'ADD_REG_PONTO', payload:null})
    //let usuario_a_load = state.data.filter(function(user){
     // return user.ndoc == numerodocumento
   // })
    return{
      queryval:query.id
    }
}

export default connect(
  (state) => state) (userprofile)