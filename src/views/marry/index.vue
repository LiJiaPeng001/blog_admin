<template>
  <page-layout>
    <a-card :columns="columns" :data-source="list">
      <search @fetch="fetchList" v-model:payload="payload"></search>
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
        <a-form-item name="name" label="姓名">
          <a-input placeholder="请输入姓名" v-model:value="record.name" />
        </a-form-item>
        <a-form-item name="num" label="出席人数">
          <a-input placeholder="请输入出席人数" v-model:value="record.num" />
        </a-form-item>
        <a-form-item name="cateId" label="参与环节">
          <a-select placeholder="请选择分类" v-model:value="record.link">
            <a-select-option v-for="it in linkMaps" :key="it">{{
              it
            }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item name="cateId" label="送达方式">
          <a-select placeholder="请选择分类" v-model:value="record.mode">
            <a-select-option v-for="it in modeMaps" :key="it">{{
              it
            }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item name="express" label="快递信息">
          <a-textarea
            placeholder="请输入快递信息"
            v-model:value="record.express"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </page-layout>
</template>

<script>
import * as Api from "@/api/marry";
import search from "./search";
import { JSONToExcel } from "kuan-utils/lib/xlsx";

export default {
  components: {
    search,
  },
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
      linkMaps: ["全程出席", "仅出席晚宴", "无法出席，只能远远地祝福啦"],
      modeMaps: ["快递寄送", "当面送达", "父母转交"],
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        num: [{ required: true, message: "请选择出席人数" }],
      },
      columns: [
        {
          title: "ID",
          dataIndex: "id",
        },
        {
          title: "姓名",
          dataIndex: "name",
        },
        {
          title: "出席人数",
          dataIndex: "num",
        },
        {
          title: "参与环节",
          dataIndex: "link",
        },
        {
          title: "请柬送达方式",
          dataIndex: "mode",
        },
        {
          title: "快递信息",
          dataIndex: "express",
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
        name: "",
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
        name: "浪的婚礼宾客登记名单",
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
      if (this.record.id) {
        await Api.update(this.record);
      } else {
        await Api.add(this.record);
      }
      this.$message.success(this.record.id ? "更新成功" : "添加成功");
      this.visible = false;
      this.fetchList();
    },
  },
};
</script>

<style>
</style>