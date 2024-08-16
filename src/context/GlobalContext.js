import { useReducer, createContext, useContext, useEffect} from "react";

// Function to load state from localStorage
const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem('globalState');
  return savedState ? JSON.parse(savedState) : { name: null, Basket: [],Container : [] };
};

// Function to save state to localStorage
const saveStateToLocalStorage = (state) => {
  localStorage.setItem('globalState', JSON.stringify(state));
};

const initialState = loadStateFromLocalStorage();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME_USER':
      return {
        ...state,
        name: action.payload,
      };
    case "SET_ALL_USER":
      return {
        ...state,
        Basket: [...state.Basket, action.data],
       
      };
    case "REMOVE_ITEM_FROM_BASKET":
      const result = state.Basket.filter(item => item.numero !== action.payload);
      
      return {
        ...state,
        Basket: result,
        
      };
      case "UPDATE_USER":
        const res = state.Basket.map((item) =>
            item.numero ===action.payload 
                ? { ...item, name: action.changeName } 
                : item
        );
    
        return {
            ...state,
            Basket: res  // No need to spread state.Basket again; res already is the updated array
        };
  
    case "PUSH_IMG_WITH_ID":{
          return{
            ...state,
            Container : [...state.Container,action.payload]
          }
    }
  
    case "PUSH_IMG_WITH_ID2":{
      return{
        ...state,
        Container : [...state.Container,action.payload]
      }
}
 
          case "COLSE__PER__ID":
          const result__of_filter__array =   state.Container.filter( (item)=>  item.id !==action.payload) 
        
          return { 
            ...state,
            Container  :    result__of_filter__array  
          }

        case "CLOSE__ALL":
          return {
            ...state,
            Container : []
          }
         
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Save state to localStorage whenever it changes
    saveStateToLocalStorage(state);
 
    
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        name: state.name,
        Basket: state.Basket,
        Container : state.Container,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
