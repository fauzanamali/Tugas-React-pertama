import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentTable() {
  const { students, dispatch } = useContext(StudentContext);

  function handleDelete(id) {
    dispatch({ type: "DELETE_STUDENT", id });
  }

  function handleEdit(student) {
    const nama = prompt("Nama:", student.nama);
    const umur = prompt("Umur:", student.umur);
    const kelas = prompt("Kelas:", student.kelas);

    if (nama && umur && kelas) {
      dispatch({
        type: "UPDATE_STUDENT",
        student: {
          ...student,
          nama,
          umur,
          kelas,
        },
      });
    }
  }

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.nama}</td>
            <td>{student.umur}</td>
            <td>{student.kelas}</td>
            <td>
              <button onClick={() => handleEdit(student)}>Edit</button>
              <button onClick={() => handleDelete(student.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}