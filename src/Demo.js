import React from 'react';

const Demo = (Component) => {
  const updateComponent = (props) => {
    return (
      <>
        <p>This is from Demo HOC</p>
        <Component {...props} />
      </>
    );
  };
  return updateComponent;
};

export default Demo;
