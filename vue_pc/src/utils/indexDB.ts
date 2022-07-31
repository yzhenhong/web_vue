import { ElMessage } from "element-plus";

const dbName = "helloIndexDB"; // 数据库名称
const version = 1; // 版本号
const storeName = "helloStore"; // 表名

let db: any = null; // 数据库对象实例

// 创建并打开数据库
export function createindexDB() {
  return new Promise((resolve, reject) => {
    // 判断浏览器是否支持IndexDB
    if ("indexedDB" in window) {
      // 支持
      const indexedDB = window.indexedDB;
      // 打开/创建数据库，如果存在就打开，不存在就创建一个indexDB数据库
      const request = indexedDB.open(dbName, version); // 数据库名称，版本号
      // 监听数据库创建成功事件
      request.onsuccess = function (event: any) {
        db = event.target.result;
        console.log("数据库打开成功...");
        resolve(db);
      };
      request.onerror = function () {
        console.log("数据库打开失败...");
        reject(null);
      };
      request.onupgradeneeded = function (event: any) {
        // 数据库创建或升级的时候会触发
        console.log("onupgradeneeded");
        db = event.target.result;
        let objectStore;
        // 判断表是否存在
        if (!db.objectStoreNames.contains(storeName)) {
          objectStore = db.createObjectStore(storeName, { keyPath: "id" }); // 创建表
        }
        resolve(objectStore);
      };
    } else {
      // 不支持
      console.log("不支持indexedDB...");
      reject(null);
    }
  });
}

// 增加数据
export function addData(data: any) {
  // db: any, storeName: any, data: any
  return new Promise((resolve) => {
    const request = db
      .transaction([storeName], "readwrite") // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
      .objectStore(storeName) // 仓库对象
      .add(data);

    request.onsuccess = function (event: any) {
      ElMessage({
        showClose: true,
        message: "数据写入成功",
        type: "success",
      });
      resolve(event);
    };

    request.onerror = function (event: any) {
      ElMessage({
        showClose: true,
        message: "数据写入失败",
        type: "error",
      });
      throw new Error(event.target.error);
    };
  });
}

// 查找数据
export function getData(key: any) {
  // db: any, storeName: any, key: any
  return new Promise((resolve) => {
    const transaction = db.transaction([storeName]); // 事务
    const objectStore = transaction.objectStore(storeName); // 仓库对象
    const request = objectStore.get(key);

    request.onsuccess = function (event: any) {
      // console.log("主键查询结果: ", request.result);
      if (event.target.result) {
        resolve(event.target.result);
      } else {
        ElMessage({
          showClose: true,
          message: "没有查询到该数据",
          type: "success",
        });
      }
    };

    request.onerror = function (event: any) {
      ElMessage({
        showClose: true,
        message: "事务失败",
        type: "error",
      });
      throw new Error(event.target.error);
    };
  });
}

// 更新数据
export function updateData(data: any) {
  // db: any, storeName: any, data: any
  return new Promise((resolve) => {
    const request = db
      .transaction([storeName], "readwrite") // 事务对象
      .objectStore(storeName) // 仓库对象
      .put(data);

    request.onsuccess = function (event: any) {
      ElMessage({
        showClose: true,
        message: "数据更新成功",
        type: "success",
      });
      resolve(event);
    };

    request.onerror = function (event: any) {
      ElMessage({
        showClose: true,
        message: "数据更新失败",
        type: "error",
      });
      throw new Error(event.target.error);
    };
  });
}

// 删除数据
export function deleteData(id: any) {
  // db: any, storeName: any, id: any
  return new Promise((resolve) => {
    const request = db
      .transaction([storeName], "readwrite")
      .objectStore(storeName)
      .delete(id);

    request.onsuccess = function (event: any) {
      ElMessage({
        message: "数据删除成功",
        type: "success",
      });
      resolve(event);
    };

    request.onerror = function (event: any) {
      ElMessage({
        showClose: true,
        message: "数据删除失败",
        type: "error",
      });
      throw new Error(event.target.error);
    };
  });
}
