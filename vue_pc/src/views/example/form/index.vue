<template>
  <div class="form">
    <dynamic-form />
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="名字" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender" placeholder="选择性别">
          <el-option label="男" :value="1" />
          <el-option label="女" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-select-v2
          v-model="ruleForm.age"
          placeholder="选择年龄"
          :options="options"
        />
      </el-form-item>
      <el-form-item label="时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              v-model="ruleForm.date1"
              type="date"
              label="日期"
              placeholder="日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col class="text-center" :span="2">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              v-model="ruleForm.date2"
              label="时间"
              placeholder="时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="分期">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="类型一" name="type" />
          <el-checkbox label="类型二" name="type" />
          <el-checkbox label="类型三" name="type" />
          <el-checkbox label="类型四" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="支付方式" prop="payment">
        <el-radio-group v-model="ruleForm.payment">
          <el-radio label="支付宝" />
          <el-radio label="微信" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="ruleForm.remark" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >提交</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { getCurrentInstance } from "vue";
import type { FormInstance, FormRules } from "element-plus";
defineOptions({
  name: "example-form",
});
const { proxy }: any = getCurrentInstance();
const ajax = proxy.$ajax;
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "yzh",
  gender: 1,
  age: 18,
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  payment: "",
  remark: "",
});
const rules = reactive<FormRules>({
  name: [
    { required: true, message: "请输入名字", trigger: "blur" },
    { min: 2, max: 20, message: "长度为2 ~ 20", trigger: "blur" },
  ],
  gender: [
    {
      required: true,
      message: "请选择性别",
      trigger: "change",
    },
  ],
  age: [
    {
      required: true,
      message: "请选择年龄",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "请选择时间",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "请选择日期",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "请选择类型",
      trigger: "change",
    },
  ],
  payment: [
    {
      required: true,
      message: "请选择支付方式",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!", ruleForm);
      ajax.post("/add", ruleForm).then((res: unknown) => {
        console.log(res);
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 200 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
</script>

<style lang="less" scoped>
.demo-ruleForm {
  margin: 20px 0px;
}
</style>
