import * as React from 'react';

const TujuanPenelitian = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col">
            <div className="space-y-16">
              <div className="space-y-8">
                <h1 className="text-2xl font-bold">Tujuan Penelitian</h1>
                <ol className="ml-6 list-decimal">
                  <li>
                    Menghasilkan model framework desain yang tepat bagi designer dalam merancang dan
                    membangun suatu perangkat lunak.
                  </li>
                  <li>
                    Mempercepat designer dalam membuat rancangan perangkat lunak dengan menyediakan
                    dokumentasi Design System
                  </li>
                </ol>
              </div>
              <div className="space-y-8">
                <h1 className="text-2xl font-bold">Manfaat Penelitian</h1>
                <ol className="ml-6 list-decimal">
                  <li>
                    Mempercepat perancangan sebuah perangkat lunak yang nantinya akan
                    dibangun/kembangkan oleh designer dan juga software engineer
                  </li>
                  <li>Perangkat lunak yang dihasilkan akan konsisten dan mengurangi redudansi.</li>
                  <li>
                    Menjadikan pondasi yang kuat untuk mengurangi biaya desain dan development
                    perangkat lunak.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TujuanPenelitian;
