import store from "@/store";

console.log("store", store);

addEventListener("message", (e) => {
  const { data } = e;
  console.log(data);
  setTimeout(() => {
    return postMessage("线程完成");
  }, 1000);
});
// export default {};
