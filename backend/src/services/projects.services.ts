import { Project } from '../interfaces/project.interface';
import ProjectModel from '../models/project.model';

const getProjects = async () => {
  const data = await ProjectModel.find({});
  return data;
};

const createProject = async (body: Project) => {
  const data = await ProjectModel.create(body);
  return data;
};

export { getProjects, createProject };
