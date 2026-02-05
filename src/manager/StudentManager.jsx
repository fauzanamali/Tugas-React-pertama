import { useState } from "react";
import { useImmerReducer } from "use-immer";
import "./StudentManager.css";

let id = 1;

const initialStudents = [];

function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_DATA":
      draft.push({
        id: id++,
        nama: action.nama,
        umur: action.umur,
        kelas: action.kelas,
      });
      break;

    case "DELETE_DATA":
      return draft.filter((s) => s.id !== action.id);

    case "EDIT_DATA": {
      const student = draft.find((s) => s.id === action.id);
      if (student) {
        student.nama = action.nama;
        student.umur = action.umur;
        student.kelas = action.kelas;
      }
      break;
    }

    default:
      break;
  }
}

export default function StudentManager() {
  const [students, dispatch] = useImmerReducer(
    studentReducer,
    initialStudents
  );

  const [form, setForm] = useState({
    nama: "",
    umur: "",
    kelas: "",
  });

  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.nama || !form.umur || !form.kelas) return;

    if (editId === null) {
      dispatch({
        type: "ADD_DATA",
        nama: form.nama,
        umur: form.umur,
        kelas: form.kelas,
      });
    } else {
      dispatch({
        type: "EDIT_DATA",
        id: editId,
        nama: form.nama,
        umur: form.umur,
        kelas: form.kelas,
      });
      setEditId(null);
    }

    setForm({ nama: "", umur: "", kelas: "" });
  }

  function handleEdit(student) {
    setEditId(student.id);
    setForm({
      nama: student.nama,
      umur: student.umur,
      kelas: student.kelas,
    });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE_DATA", id });
  }

  return (
    <div className="container">
      <h2>Manajemen Data Siswa</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
        />

        <input
          name="umur"
          type="number"
          placeholder="Umur"
          value={form.umur}
          onChange={handleChange}
        />

        <input
          name="kelas"
          placeholder="Kelas"
          value={form.kelas}
          onChange={handleChange}
        />

        <button type="submit">
          {editId === null ? "Tambah" : "Update"}
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kelas</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.nama}</td>
              <td>{s.umur}</td>
              <td>{s.kelas}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(s)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(s.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
