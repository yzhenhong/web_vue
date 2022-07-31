import request from "@/utils/request";

export function getUserInfo() {
  return request.get("/userInfo");
}

type roleListParams = {
  pageNumber?: number;
  pageSize?: number;
};
export function getRoleList(params: roleListParams) {
  return request.get("/roleList", {
    params,
  });
}
