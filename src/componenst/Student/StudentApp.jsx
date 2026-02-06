import { useImmerReducer } from "use-immer";
import { StudentContext } from "./StudentContext";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import "./StudentApp.css";

let id = 1;

const initialStudents = [];

function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      draft.push({
        id: id++,
        nama: action.nama,
        umur: action.umur,
        kelas: action.kelas,
      });
      break;

    case "DELETE_STUDENT":
      return draft.filter(student => student.id !== action.id);

    case "UPDATE_STUDENT":
      const index = draft.findIndex(s => s.id === action.student.id);
      if (index !== -1) {
        draft[index] = action.student;
      }
      break;

    default:
      break;
  }
}

export default function StudentApp() {
  const [students, dispatch] = useImmerReducer(
    studentReducer,
    initialStudents
  );

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      <h1>Manajemen Data Siswa</h1>
      <StudentForm />
      <StudentTable />
    </StudentContext.Provider>
  );
}