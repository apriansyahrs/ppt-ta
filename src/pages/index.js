import * as React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col space-y-16">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold">SEMINAR PROPOSAL</h1>
              <p className="text-2xl font-semibold text-slate-700">
                <span className="italic ">DESIGN SYSTEM</span>
                  PADA PERANGKAT LUNAK DI CV. AKSES DIGITAL
              </p>
            </div>

            <div className="space-y-2 text-center">
              <h2 className="text-sm font-bold">Disusun Oleh:</h2>
              <p className="text-xl font-semibold text-slate-700">APRIANSYAH RIZQI SETIAWAN</p>
              <p className="text-xl font-semibold text-slate-700">2019111013</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
