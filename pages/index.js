import Link from "next/link";
import Layout from "../components/Layout";
import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { Button, Box, TextField} from "@material-ui/core";
import React, { Component } from 'react';
import "../components/index.scss"
import "../components/Table.scss"
import MaterialTable from 'material-table';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {AlertDialog} from './alertDialog'
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
const stylebutton = {
  background: 'linear-gradient(45deg, rgb(254, 107, 139) 30%, rgb(255, 142, 83) 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  width : '100%',
  height: 38,
  padding: '0 10px',
  boxShadow: '0 2px 5px 2px rgba(255, 105, 135, .3)',
 // marginLeft: 20,
 // marginTop: 5,
 // marginRight: 20
};

class Index extends Component {
  static getInitialProps({store, isServer, pathname, query}) {
    store.dispatch({type: 'ADD_REG_PONTO', payload:null
    }); // component will be able to read from store's state when rendered
    return {custom: 'custom'}; // you can pass some custom props to component from here
}
    constructor(props){
    
      super(props)

       this.state = { 
         columns:[{title:"Nome Empleado", field:"name"},
             {title:"Numero Documento", field:"ndoc"},
             {title:"Hora ingreso", field:"horaingreso"},
             {title:"Hora saida", field:"horasalida"}

        ],
        
      data: this.props.data, 
      ndocUser: null,
      useradd : null
  }
  this._handleNdocUserChange = this._handleNdocUserChange.bind(this);
    }
    
   
    _handleNdocUserChange(event){
      console.log("Ndoc a batir ponto : " + event.target.value)
    this.setState({ndocUser : event.target.value})
    }
    _handleSaveUser(){
      const {dispatch} = this.props;
      if(this.state.ndocUser != null){
        let numerodocumento = this.state.ndocUser
        console.log("------> " +numerodocumento);

        let usuario_a_batir = this.state.data.filter(function(user){
          return user.ndoc == numerodocumento
        })
        console.log("El ultimo en batir ponto" +usuario_a_batir[usuario_a_batir.length-2])
      if(usuario_a_batir.length > 0){
      // window.alert("Usuario encontrado");
        /*this.setState(
          {useradd:[{"name":usuario_a_batir[0].name, "ndoc":usuario_a_batir[0].ndoc ,"horaingreso": "00:00:00", "horasalida":"00:01:00"}]}
        )*/
        var date = new Date().toLocaleString();
        if( usuario_a_batir[usuario_a_batir.length-1].ndoc == this.state.ndocUser && (usuario_a_batir[usuario_a_batir.length-1].horasalida =="--------" )||usuario_a_batir[usuario_a_batir.length-1].horasalida =="" ){
          let usertmp =  usuario_a_batir[usuario_a_batir.length-1]
          let aupdate =[{"name": usertmp.name, "ndoc": usertmp.ndoc,"horaingreso":usertmp.horaingreso, "horasalida":date}] 
          
          console.log("Es una acualizacion a la columna " + usertmp)
          const action = { type: "UPD_REG_PONTO", payload: aupdate[0]}
          this.props.dispatch(action)
          this.setState(prevState => {
            const data = [...prevState.data];
            data[data.indexOf(usertmp)] = aupdate[0];
            return { ...prevState, data };
          });
        }
        else{
          var date = new Date().toLocaleString();
     //     console.log(date + "------------------<<")
          let a_inserer = [{"name": usuario_a_batir[0].name, "ndoc": usuario_a_batir[0].ndoc,"horaingreso":date, "horasalida":"--------"}]
          const action = { type: "ADD_REG_PONTO", payload: a_inserer[0]}
          this.props.dispatch(action)
          console.log(usuario_a_batir[0].name + "---" + usuario_a_batir[0].ndoc)
        console.log("Ya execute")
          this.setState(prevState => {
            const data = [...prevState.data];
            data.push(a_inserer[0]);
            return { ...prevState, data };
          });
        }
 
      }
      else{
        window.alert("Usuario no encontrado,porfavor digite um Numero de Documento valido ");

      }
      }
      else{
       window.alert("Usuario no encontrado,porfavor digite um Numero de Documento valido ");
      }
 
    }
    
  render() {
    //console.log(this.props)
    //console.log("render element with props " + JSON.stringify(this.props.data));
    return (
      <Layout>
    
    <div>
    
      <h3 className="firstlbl"> Bienvenido a MF.RegistroPonto </h3>
     

     <Box className='containerDataBox' >
          
         <TextField  label="Numero de Documento" onChange={this._handleNdocUserChange} />
         <br/>
         <Button  variant="contained" style={stylebutton}  onClick={this._handleSaveUser.bind(this)} >Batir Ponto </Button>
        
       </Box>
     
       <MaterialTable
       icons={tableIcons}
      title="Pontos batidos hoje"
      columns={this.state.columns}
      data={this.state.data}
      actions={[
        {
          icon: AccountCircleIcon,
          tooltip: 'User Profile',
          onClick: (event, rowData) => //alert("You saved " + rowData.name)window.location.href
          window.location.href = `/user/${rowData.ndoc}`
           
        }
       ]}
      editable={{
       /* onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),*/
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />  
      
    
   
    <a href="http://eco2.com.co">
    {/*<img className="imgstyle"  src={require('../components/image/flower-2.png')}/>*/}
    </a>
    </div>
  </Layout>
    );
  }
}






export default connect(
  (state) => state,
 
)(Index);