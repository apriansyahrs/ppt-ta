import * as React from 'react';

const RumusanMasalah = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col">
            <div className="space-y-16">
              <div className="space-y-8">
                <h1 className="text-2xl font-bold">Rumusan Masalah</h1>
                <p>
                  Apakah dengan menggunakan design system dapat mempercepat designer dalam merancang
                  interface perangkat lunak untuk software engineer?
                </p>
              </div>
              <div className="space-y-8">
                <h1 className="text-2xl font-bold">Batasan Masalah</h1>
                <ol className="ml-6 list-decimal">
                  <li>Design system yang dibangun hanya mencakup elemen product</li>
                  <li>
                    Keluaran dari penelitian ini berupa dokumentasi design system dari perangkat
                    lunak yang terdiri atas pattern library dan style guideline yang mencakup code
                    libary
                  </li>
                  <li>
                    Platform yang menjadi sasaran dari penelitian ini adalah design system untuk
                    platform website.
                  </li>
                  <li>
                    Pattern library disimpan dalam suatu tools desain dengan menggunakan Figma
                  </li>
                  <li>
                    Pembentukan perceptual pattern hanya mencangkup warna, typography, spacing &
                    layout.
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

export default RumusanMasalah;
