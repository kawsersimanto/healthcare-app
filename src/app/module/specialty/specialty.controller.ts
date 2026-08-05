import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { SpecialtyService } from "./specialty.service";

const getAllSpecialty = catchAsync(async (req: Request, res: Response) => {
  const specialties = await SpecialtyService.getAllSpecialty();

  res.status(200).json({
    success: true,
    message: "Specialties retrieved successfully",
    data: specialties,
  });
});

const getSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialty = await SpecialtyService.getSpecialty(id as string);

  res.status(200).json({
    success: true,
    message: "Specialty retrieved successfully",
    data: specialty,
  });
});

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const specialty = await SpecialtyService.createSpecialty(payload);
  res.status(201).json({
    success: true,
    message: "Specialty added successfully",
    data: specialty,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialty = await SpecialtyService.deleteSpecialty(id as string);

  res.status(200).json({
    success: true,
    message: "Specialty deleted successfully",
    data: specialty,
  });
});

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialty,
  getSpecialty,
  deleteSpecialty,
};
