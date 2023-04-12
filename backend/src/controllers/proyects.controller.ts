import { Request, Response } from 'express';
import { handleHttp } from '../utilities/handle-http';
import { createProject, getProjects } from '../services/projects.services';
import { matchedData } from 'express-validator';
import { Project } from '../interfaces/project.interface';

const getItems = async (req: Request, res: Response) => {
  try {
    const data = await getProjects();
    return res.status(200).json({ success: true, projects: data });
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e);
  }
};
const postItem = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);
    const cleanData: Project = { imageUrl: body.imageUrl, alt: body.alt };
    const data = await createProject(cleanData);
    return res.status(201).json({ success: true, project: data });
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM', e);
  }
};

export { postItem, getItems };
