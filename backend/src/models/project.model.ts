import { model, Schema } from 'mongoose';
import { Project } from '../interfaces/project.interface';

const ProjectSchema = new Schema<Project>(
  {
    imageUrl: { type: String, required: true },
    alt: { type: String, required: true },
  },
  { versionKey: false }
);

const ProyectModel = model('Project', ProjectSchema);

export default ProyectModel;
