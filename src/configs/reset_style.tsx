import React from 'react';

const ResetStyleTemplate = ({ children }: any) => {
  return (
    <>
      <style>{` * { font-family: 'Roboto', sans-serif;}`}</style>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ResetStyleTemplate;
