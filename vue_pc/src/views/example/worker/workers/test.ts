onmessage = function (event) {
  console.log("接收到主线程发来的消息", event);
  const para = JSON.parse(event.data);
  countDown(para);
};

function countDown(para: any) {
  console.log("countDown", para);
  for (let i = 0; i < 10; i++) {
    postMessage({
      value: i,
    });
  }
}
