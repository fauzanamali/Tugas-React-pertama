import { useState } from "react";

export default function InputSiswa() {
  const [nama, setNama] = useState("");
  const [listSiswa, setListSiswa] = useState([]);

  const tambahSiswa = () => {
    if (nama.trim() === "") return;

    setListSiswa([...listSiswa, nama]);
    setNama(""); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Input Nama Siswa</h2>

      <input
        type="text"
        placeholder="Masukkan nama siswa"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <button onClick={tambahSiswa} style={{ marginLeft: "10px" }}>
        Tambah nama
      </button>

      <ul>
        {listSiswa.map((siswa, index) => (
          <li key={index}>{siswa}</li>
        ))}
      </ul>
    </div>
  );
}
