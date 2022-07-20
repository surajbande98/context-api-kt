import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export const App = function () {
  const [userName, setUserName] = useState("Suraj");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div>
        {userName}
        <Child />
      </div>
    </AppContext.Provider>
  );
};

const Child = () => {
  return <Grandchild />;
};

const Grandchild = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          setUserName("Suraj Bande");
        }}
      >
        Change Username
      </button>
    </div>
  );
};
