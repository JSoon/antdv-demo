<template>
  <div class="table-wrapper">
    <h2>AntTable</h2>
    <a-tabs
      default-active-key="1"
      :animated="false"
      tab-position="top"
      @change="callback"
    >
      <a-tab-pane key="1" tab="固定列+不换行">
        <a-table
        :columns="columns"
        :data-source="data"
        :table-layout="tableLayout"
        :scroll="scroll"
        :pagination="false"
        size="small">
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="template风格(colums数据在模板上进行绑定)" force-render>
        <a-table
        :data-source="data"
        :table-layout="tableLayout"
        :scroll="scroll"
        :pagination="false"
        size="small">
          <a-table-column key="name" title="Name" data-index="name">
            <template slot-scope="text">
              <a>{{ text }}</a>
            </template>
          </a-table-column>
          <a-table-column key="age" title="Age" data-index="age" />
          <a-table-column key="address" title="Address" data-index="address" />
          <a-table-column key="tags" title="Tags" data-index="tags">
            <template slot-scope="tags">
              <span>
                <a-tag v-for="tag in tags" :key="tag" color="blue">{{ tag }}</a-tag>
              </span>
            </template>
          </a-table-column>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
    fixed: 'left',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    // 超过宽度将自动省略，暂不支持和排序筛选一起使用。设置为 true 时，表格布局将变成 tableLayout="fixed"
    ellipsis: false,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: false,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: false,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: false,
    fixed: 'right',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
      // 固定表头/列或使用了 column.ellipsis 时，默认值为 fixed
      tableLayout: 'auto',
      // 设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 x 设置一个数字，如果要设置为 true，需要配合样式 .ant-table td { white-space: nowrap; }
      scroll: { x: true },
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>

<style scoped>
.table-wrapper {
  width: 60%;
  margin: 50px auto;
}

.table-wrapper::v-deep .ant-table td {
  white-space: nowrap;
}
</style>
