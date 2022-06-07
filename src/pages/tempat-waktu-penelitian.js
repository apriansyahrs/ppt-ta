import * as React from 'react';

const TempatWaktuPenelitian = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="container relative">
          <div className="flex flex-col">
            <div className="space-y-16">
              <div className="space-y-8">
                <h1 className="text-2xl font-bold">Tempat dan Waktu Penelitian</h1>
                <table class="table-auto">
                  <tbody>
                    <tr>
                      <td>Nama Instansi</td>
                      <td> :</td>
                      <td>CV. Akses Digital</td>
                    </tr>
                    <tr>
                      <td>Alamat</td>
                      <td> :</td>
                      <td>
                        Jl. Kemboja Jl. Tuparev No.1, Kedungjaya, Kec. Kedawung, Kabupaten Cirebon,
                        Jawa Barat 45153
                      </td>
                    </tr>
                    <tr>
                      <td>Bagian</td>
                      <td> :</td>
                      <td>Software developer</td>
                    </tr>
                    <tr>
                      <td>Telepon</td>
                      <td> :</td>
                      <td>0812-2080-1118</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempatWaktuPenelitian;
