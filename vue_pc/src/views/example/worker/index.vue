<template>
  <div class="worker">worker</div>
</template>

<script lang="ts" setup name="example-worker">
import TestWorker from "worker-loader!@/views/example/worker/workers/test";

import Worker from "worker-loader!@/views/example/worker/workers/worker";

const name = "yzh";

const initWorker = () => {
  let worker = new TestWorker();
  worker.name = "worker" + name;
  worker.postMessage(JSON.stringify({ statu: "start" }));
  setTimeout(() => {
    console.log("initWorker1");
  }, 0);
  worker.onmessage = function (event: any) {
    console.log("onmessage", event.data.value);
  };
  //打印结果：先输出定时器里面的数据,再输出for循环里面的数据
};
const noWorker = () => {
  setTimeout(() => {
    console.log("initWorker2");
  }, 0);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  //打印结果：先输出for循环里面的数据，再输出定时器里面的数据
};

initWorker();
noWorker();

const openWorker = () => {
  const worker = new Worker();
  worker.postMessage("开启线程");
  worker.onmessage = (e: { data: string }) => {
    console.log(e.data);
    setTimeout(() => {
      worker.postMessage("线程关闭");
      worker.terminate();
    }, 1000);
  };
};
openWorker();
</script>

<style lang="less" scoped></style>
