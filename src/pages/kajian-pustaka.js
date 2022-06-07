import * as React from 'react';

const KajianPustaka = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col">
            <div className="space-y-16">
              <div className="space-y-8">
                <h1 className="text-2xl font-bold">Kajian Pustaka</h1>
                <div className="space-y-4">
                  <h2 className="text-xl">Design System</h2>
                  <p>
                    <p>
                      Design System adalah seperangkat pola yang saling berhubungan serta langkah
                      sistematis dan kolaboratif yang diatur secara koheren untuk mempercepat dan
                      mempermudah proses desain dan development dalam mencapai tujuan produk
                      digital. Design System memiliki tujuan untuk membuat suatu standarisasi desain
                      serta menyediakan dokumentasi yang meliputi code library, pattern library dan
                      styleguide sehingga dapat digunakan oleh seluruh tim dalam mengembangkan
                      perangkat lunak dengan solusi yang sudah ada (Reusable solution). Design
                      System berisikan komponen UI yang dapat digunakan kembali untuk membantu tim
                      pengembang dalam membangun antarmuka yang kompleks, durable, dan dapat diakses
                      diseluruh projek karena developer dan designer berkolaborasi dalam menentukan
                      komponen UI (Alla Kholmatova, 2017).
                    </p>
                  </p>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-gradient-to-r from-blue-300 via-indigo-400 to-pink-200 px-4 py-2 text-center font-medium text-white">
                    Standards
                  </div>
                  <div className="bg-gradient-to-r from-blue-300 via-indigo-400 to-pink-200 px-4 py-2 text-center font-medium text-white">
                    Consistency
                  </div>
                  <div className="bg-gradient-to-r from-blue-300 via-indigo-400 to-pink-200 px-4 py-2 text-center font-medium text-white">
                    UI/UX
                  </div>
                  <div className="bg-gradient-to-r from-blue-300 via-indigo-400 to-pink-200 px-4 py-2 text-center font-medium text-white">
                    In Depth Interview
                  </div>
                  <div className="bg-gradient-to-r from-blue-300 via-indigo-400 to-pink-200 px-4 py-2 text-center font-medium text-white">
                    Team Mode
                  </div>
                  <div className="bg-gradient-to-r from-blue-300 via-indigo-400 to-pink-200 px-4 py-2 text-center font-medium text-white">
                    Atomic Design Methodology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KajianPustaka;
