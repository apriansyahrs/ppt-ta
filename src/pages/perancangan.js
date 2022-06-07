import * as React from 'react';

const Perancangan = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Perancangan</h1>
              <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width={1024}
                height={450}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FB7z4FH44QQSZnj8mOhU9FF%2FAkses-Digital---Design-System%3Fnode-id%3D0%253A1"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perancangan;
