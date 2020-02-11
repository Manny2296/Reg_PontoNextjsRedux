const initialstate = {data: [{"name": "Manuel Felipe", "ndoc": 1018484513,"horaingreso":"10/02/2020 à 7:32:46", "horasalida":"10/02/2020 à 20:32:46"},
{"name": "Alan Limes", "ndoc":79280440,"horaingreso":"10/02/2020 à 7:11:46", "horasalida":"10/02/2020 à 19:32:00"},
{"name": "Mariana Borges", "ndoc":52077888,"horaingreso":"10/02/2020 à 7:02:46", "horasalida":"10/02/2020 à 18:32:00"}

]}
//{ }
function AddRegPonto(state = initialstate, action){
 let nextState
   switch (action.type) {
    case 'ADD_REG_PONTO':
      
      
      if(action.payload != null){
            
        nextState = { 
            ...state, 
            data : [...state.data, action.payload]
        }
        console.log("entrei aqui" + JSON.stringify(nextState.data))

      }
  
        return nextState || state
     case 'UPD_REG_PONTO':
       console.log("Es un update")
        if(action.payload != null){
          //console.log("Action updt"  + JSON.stringify(action.payload))
          let  usertmp = JSON.stringify(action.payload)
         console.log(action.payload.tableData + "-USER")
          var aupdate = [{"name": action.payload.name, "ndoc": action.payload.ndoc,"horaingreso":action.payload.horaingreso, "horasalida":action.payload.horasalida}]
          const dataold = [...state.data];
          console.log(aupdate[0])
         
          console.log(dataold)
          let usuario_a_updt = dataold.filter(function(user){
            return user.ndoc ==action.payload.ndoc &&  user.horasalida == "--------"
          }) 
          console.log(usuario_a_updt)
          dataold[dataold.indexOf(usuario_a_updt[0])] = aupdate[0];
          console.log(dataold[dataold.indexOf(usuario_a_updt[0])])
          nextState = {  
              data : [...dataold]
          }
      }
    
      return nextState || state

        default: 
        console.log("entre default")
        return state
   }
    
 }

 export default AddRegPonto