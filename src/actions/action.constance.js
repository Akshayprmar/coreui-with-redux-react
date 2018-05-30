import {configurationFile} from "../utils/config";

export const API_URL_ROOT =
  configurationFile[process.env["REACT_APP_ENV"]].API_DOMAIN_NAME;

export const SUCCESS ="Success";
export const FAIL= "fail";
export const REQUESTING ="requesting";
export const ERROR= "error";