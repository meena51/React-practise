import React from 'react';

const userContext = React.createContext();
const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

const CreateContext = () => {
  // Your component logic here
  return <div>Context Component</div>;
};

export { UserProvider, UserConsumer }; // Named exports including the component
