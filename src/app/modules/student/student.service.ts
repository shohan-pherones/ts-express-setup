import { Student } from './student.interface';
import StudentModel from './student.model';

const createStudentIntoDb = async (student: Student) => {
  // const result = await StudentModel.create(student);
  const studentInstance = new StudentModel(student);
  const result = studentInstance.save();
  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
};
