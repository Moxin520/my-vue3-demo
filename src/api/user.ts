import request from "@/utils/request";

export const getData = () => {
  return request({
    url: "/product/getCurrent.htm",
    method: "get",
  });
};

export const getData1 = () => {
  return request({
    url: "/product/getCurrent.htm",
    method: "get",
  });
};
