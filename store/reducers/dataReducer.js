const initialstate = {data: [{"name": "Manuel Felipe", "ndoc": 1018484513,"horaingreso":"07:00:00 AM", "horasalida":""},
{"name": "Daneil Felipe", "ndoc":79280440,"horaingreso":"07:12:02 AM", "horasalida":""}
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
   
        default: 
        console.log("entre default")
        return state
   }
    
 }

 export default AddRegPonto