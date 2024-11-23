import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface IPost {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  isReported: boolean;
  reportCount: number;
  category: string;
  user: string;
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}