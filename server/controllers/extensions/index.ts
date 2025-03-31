import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Extension from "../../models/Extension";
import { log } from "console";
import { NotFoundError } from "../../errors";

const createExtension = async (req: Request, res: Response) => {
  const extension = await Extension.create(req.body);
  res.status(StatusCodes.CREATED).json({ extension });
};

const getExtensions = async (req: Request, res: Response) => {
  const protocol = req.protocol;
  const host = req.headers.host;

  const { isActive } = req.query;
  let queryObject: { [x: string]: any } = {};
  if (isActive) {
    queryObject.isActive = isActive == "true";
  }

  let result = Extension.find(queryObject);

  const extensions = await result;

  extensions.forEach((extension) => {
    const logo = extension.logo.split("./")[1];
    const updatedLogoUrl = `${protocol}://${host}/${logo}`;
    extension.logo = updatedLogoUrl;
  });

  res.status(StatusCodes.OK).json({ extensions, nbhits: extensions.length });
};

const updateExtension = async (req: Request, res: Response) => {
  const { id } = req.params;

  const extension = await Extension.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!extension) {
    throw new NotFoundError(`No extension with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ extension });
};

const deleteExtension = async (req: Request, res: Response) => {
  const extension = await Extension.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ status: "deleted", extension });
};

export { createExtension, getExtensions, updateExtension, deleteExtension };
