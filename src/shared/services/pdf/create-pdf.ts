import { API_LIST } from "@/shared/constants/api.list";
import { post } from "@/shared/helpers";

export const createPdfRequest = async (text: string) => {
  const { data } = await post<any>(API_LIST.createPDF.root, { text });

  return data;
};
