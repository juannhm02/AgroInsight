import { Schema, model, Document } from "mongoose";

export interface IGanado extends Document {
  crotal: string;
  tipo: string;
  fechaNacimiento: Date;
  peso?: number;
}

const GanadoSchema = new Schema<IGanado>(
  {
    crotal: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    tipo: {
      type: String,
      required: true,
      trim: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    peso: Number,
  },
  {
    timestamps: true,
  }
);

export const Ganado = model<IGanado>("Ganado", GanadoSchema);
