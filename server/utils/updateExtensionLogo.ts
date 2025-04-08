import { Request } from "express";
import Extension from "../models/Extension";

const updateExtensionLogo = (
  req: Request,
  extension: InstanceType<typeof Extension>
) => {
  const protocol = req.protocol;
  const host = req.headers.host;

  const logo = extension.logo.split("./")[1];
  const updatedLogoUrl = `${protocol}://${host}/${logo}`;
  extension.logo = updatedLogoUrl;
};

export default updateExtensionLogo;
