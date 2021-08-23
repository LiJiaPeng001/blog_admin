<template>
  <page-layout>
    <a-card :columns="columns" :data-source="list">
      <div class="middle-flex">
        <a-button style="margin: 0 15px 15px 0" type="primary" @click="open"
          >添加</a-button
        >
        <a-button style="margin-bottom: 15px" type="default" @click="onExport"
          >导出xlsx</a-button
        >
      </div>
      <a-table rowKey="id" :columns="columns" :data-source="list">
        <template #action="{ record }">
          <div class="action-box">
            <span class="primary" @click="open(record)">编辑</span>
            <span class="error" @click="remove(record)">删除</span>
          </div>
        </template>
      </a-table>
    </a-card>
    <a-modal title="详情" v-model:visible="visible" @ok="submit">
      <a-form
        ref="ruleForm"
        :model="record"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item name="date" label="日期">
          <a-date-picker style="width: 100%" v-model:value="record.date" />
        </a-form-item>
        <a-form-item name="weight" label="体重">
          <a-input
            style="width: 100%"
            addon-after="斤"
            placeholder="请输入体重"
            v-model:value="record.weight"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </page-layout>
</template>

<script>
import moment from "dayjs";
import * as Api from "@/api/keep";
import { JSONToExcel } from "kuan-utils/lib/xlsx";

export default {
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
      rules: {
        date: [{ type: "date", required: true, message: "请输入日期" }],
        weight: [{ required: true, message: "请输入体重" }],
      },
      columns: [
        {
          title: "ID",
          dataIndex: "id",
        },
        {
          title: "日期",
          dataIndex: "date",
        },
        {
          title: "体重",
          dataIndex: "weight",
        },
        {
          title: "创建时间",
          dataIndex: "createdAt",
        },
        {
          title: "操作",
          key: "action",
          slots: { customRender: "action" },
        },
      ],
      visible: false,
      list: [],
      totoalList: [],
      payload: {
        page: 1,
        per_page: 12,
        date: "",
      },
      record: {},
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    async onExport() {
      const { list } = await Api.list({ per_page: 999 });
      let header = this.columns
        .filter((it) => it.dataIndex)
        .reduce((all, item) => {
          all[item.dataIndex] = item.title;
          return all;
        }, {});
      await JSONToExcel({
        name: "体重变化表",
        header,
        data: list.map((it) => {
          return Object.keys(header).reduce((all, item) => {
            all[item] = it[item];
            return all;
          }, {});
        }),
      });
    },
    open(record = {}) {
      this.record = { ...record };
      this.visible = true;
    },
    remove({ id }) {
      this.$confirm({
        content: "您确定要删除嘛？",
        onOk: async () => {
          await Api.remove(id);
          this.fetchList();
        },
      });
    },
    async fetchList() {
      const { list, total } = await Api.list(this.payload);
      this.list = list;
      this.total = total;
    },
    async submit() {
      await this.$refs.ruleForm.validate();
      let d = { ...this.record };
      d.date = moment(d.date).format("YYYY-MM-DD HH:mm:ss");
      if (d.id) {
        await Api.update(d);
      } else {
        await Api.add(d);
      }
      this.$message.success(d.id ? "更新成功" : "添加成功");
      this.visible = false;
      this.fetchList();
    },
  },
};
</script>

<style>
</style>