import  { Component } from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux'


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
import { _createUser } from "../actions/userAction";
import { _updateUser } from "../actions/userAction";
import { _deleteUser } from "../actions/userAction";
import "./Table.scss"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';




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

class TableUsers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: this.props.data,
      
      //isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche        
     }
     console.log("Prps table users" + this.props.data)
    // this._loadUsuarios() 
  }
  async _loadUsuarios(){
    const res = await fetch('http://localhost:8080/users/');
    const data = await res.json();
    
    //console.log(`Show data fetched. Count: ${data.length}`  );
    
 
    this.setState(
      { 
        users: [...this.state.users, ...data],  // une autre sintaxys  films: this.state.films.concat(data.results)
       // films: data.results,  // une autre sintaxys  films: this.state.films.concat(data.results)
     
       
      }
    )
  //  console.log("Rowsusu"+this.state.numRows)
  }
 
  render() {
  console.log(this.props)
   
    return (
 
   <Paper className='container'>
    <MaterialTable
       
       icons={tableIcons}
      
       title="Lista de Usuarios"
       columns={columns}
       data={this.state.users}
       actions={[
        {
          icon: AccountCircleIcon,
          tooltip: 'User Profile',
          onClick: (event, rowData) => //alert("You saved " + rowData.name)window.location.href
          window.location.href = `/user/${rowData.ndoc}`
           
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


    
    
    );
  }
}

const mapStateToProps = state => {
  console.log("Props " + JSON.stringify(state))
  return {data : state.data
  //FilmsVus : state.toogleVue.FilmsVus
  } 
}
export default  connect(
  (state) => state)(TableUsers);
