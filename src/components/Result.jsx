import React, { useContext } from 'react';
import { FormContext } from './FormContext';
import '../App.css';

function Result() {
  const { formData } = useContext(FormContext);

  return (
    <div  className="result-container">
      <h2>Terima Kasih Telah Memasukkan Datamu!</h2>
      <h3>Detail data yang diisi: </h3>
      <p>Nama: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Nomor: {formData.phone}</p>
      <p>Bootcamp: {formData.bootcamp}</p>
      <p>Tanggal Lahir: {formData.birthDate}</p>
      <p>Tempat Lahir: {formData.birthPlace}</p>
      <p>Alamat: {formData.address}</p>
    </div>
  );
}

export default Result;
