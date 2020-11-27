 import Rect from 'react';

const StoreContext = React.createContext(null);

const Provider = (props) =>{
    return <StoreContext.Provider value ={store}>
        
    </StoreContext.Provider>
}
export default StoreContext;

