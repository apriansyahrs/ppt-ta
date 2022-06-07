import * as React from 'react';

const AnalisaData = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Analisa Data</h1>
              <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width={1024} height={450} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGyUFp7jRPBv4uNXCTiEYIg%2FAnalisa-Data---Akses-Digital-%255BDS%255D" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalisaData;
