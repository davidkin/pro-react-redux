const initState = {
    projects: [
        { id: '1', title: 'One', content: 'blah blah blah' },
        { id: '2', title: 'Two', content: 'blah blah blah' },
        { id: '3', title: 'Three', content: 'blah blah blah' },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': {
            
            return {
                ...state,
                projects: [...state.projects, action.payload ]
            }
        }

        default: {
            return state;
        }
    }
}

export default projectReducer;