const initialState = {
  contacts: [],
  filter: '',
};

export const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contactForm/setContacts': {
      return { ...state, contacts: action.payload };
    }
    case 'contactForm/setFilter': {
      return { ...state, filter: action.payload };
    }
    case 'contactForm/setContacts': {
      return { ...state, contacts: action.payload };
    }
    default:
      return state;
  }
};
