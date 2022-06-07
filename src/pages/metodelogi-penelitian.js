import Image from 'next/image';
import * as React from 'react';

const MetodelogiPenelitian = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col">
            <div className="space-y-16">
              <div className="space-y-8">
                <h1 className="text-2xl font-bold">Metodelogi Penelitian</h1>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Tahapan Pengumpulan Data</h2>
                  <ol className="ml-6 list-decimal">
                    <li>Studi Literatur</li>
                    <li>Pengujian Pra-penelitian</li>
                    <li>In Depth Interview</li>
                  </ol>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Tahapan Penelitian</h2>
                  <br></br>
                  <Image src="/images/tahapan_penelitian.png" width={424} height={232}></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetodelogiPenelitian;
