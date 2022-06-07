import * as React from 'react';

const LatarBelakang = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col">
            <div className="space-y-8">
              <h1 className="text-2xl font-bold">Latar Belakang</h1>
              <div className="space-y-4">
                <p>
                  CV. Akses Digital adalah perusahaan yang bergerak di jasa konsultan dan pengembang
                  perangkat lunak yang berlokasi di Cirebon, Jawa barat. Perangkat lunak yang
                  digunakan oleh mitra CV. Akses Digital dibangun oleh tim software developer.
                  Setiap perangkat lunak yang sudah ada memiliki karakteristik dan behavior yang
                  beragam.
                </p>
                <p>
                  Pada saat mengembangkan perangkat lunak untuk mitra tidak ada aturan untuk membuat
                  interface, dalam pembuatan interface designer membuatnya berdasarkan eksplorasi.
                  Yang menyebabkan inkonsistensi gaya desain antar sistem atau perangkat lunak.
                  Selain itu disisi software engineer melakukan upaya yang berlebihan karena ketidak
                  konsistenan dalam interface. Desain harus memiliki konsep atau jenis informasi
                  yang sama, tetapi menggunakan pendekatan yang berbeda.
                </p>
                <p>
                  Masalah-masalah yang telah dipaparkan sebelumnya terjadi karena tidak adanya
                  dokumentasi dan design language. Design language merupakan suatu fundamental
                  sebuah tim untuk berkolaborasi dalam sebuah development. Tanpa design language,
                  setiap orang akan memiliki mental model yang berbeda-beda dalam mencapai
                  tujuannya.
                </p>
                <p>
                  Dalam membangun Design language terdapat sebuah kerangka kerja yang bernama design
                  system. Design System adalah seperangkat pola yang saling berhubungan serta
                  langkah sistematis dan kolaboratif yang diatur secara koheren untuk mempercepat
                  dan mempermudah proses desain dan development dalam mencapai tujuan produk
                  digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatarBelakang;
