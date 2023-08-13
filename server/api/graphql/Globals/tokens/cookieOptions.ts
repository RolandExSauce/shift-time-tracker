import { CookieOptions } from "express";

export const accessTokenCookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "none",
  secure: true,
  expires: new Date(Date.now() + 150 * 600 * 1000),
  maxAge: 150 * 600 * 1000,
};

export const refreshTokenCookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "none",
  secure: true,
  expires: new Date(Date.now() + 60 * 60 * 1000),
  maxAge: 600 * 600 * 1000,
};
