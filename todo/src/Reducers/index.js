import { ADD_TODO } from '../Actions';

const initialState = [{
    task: "play guitar",
    completed: false,
    id: Date.now()
}];

export default todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        default:
            return state;
    }
};

//set state to initial state.
//use switch conditional
//default returns state.
//add todo action.  takes todo payload and concatenates it with state. that object has to be on payload when passed to action creator.
//import todo from /actions file
//need to go to actions and build and export that ADD_TODO now or code will break. 

//dont have to object.assign this state bc it is immutable bc concat returns a new array.
//would have to object.assign an object literal but initial state is already array.  or if want to update the object or toggle todo flag.