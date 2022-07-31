import Mock from "mockjs";

Mock.mock("/userInfo", "get", {
  code: 0,
  message: "success",
  data: {
    name: "yzh",
    age: 24,
    sex: 1,
    job: "前端工程师",
  },
});

Mock.mock("/getList", "post", {
  code: 0,
  message: "success",
  data: {
    total: 50,
    rows: [
      {
        name: "杨振宏",
        age: 24,
        job: "前端工程师",
      },
      {
        name: "张三",
        age: 25,
        job: "测试工程师",
      },
      {
        name: "李四",
        age: 25,
        job: "java工程师",
      },
    ],
  },
});
