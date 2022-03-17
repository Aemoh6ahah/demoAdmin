<template>
  <div class="container">
    <card-header :name="'个性化匹配列表'">
      <template #operate-btns>
        <el-button size="default" @click="openDialog">添加</el-button>
        <el-button size="default" @click="search" type="primary"
          >查询</el-button
        >
        <el-button size="default" @click="reset">重置</el-button>
        <el-button
          size="default"
          @click="handelFetchCarInfo"
          v-loading="carDataLoading"
          type="primary"
          >同步车型数据</el-button
        >
      </template>
      <template #filters>
        <div class="form_wapper">
          <el-form class="filter-form" size="default" label-position="left">
            <el-form-item label="适用车型">
              <el-cascader
                v-model="filterForm.carModelId"
                style="width: 240px"
                placeholder="请选择适用车型"
                filterable
                :show-all-levels="false"
                :options="carTypeOptions"
                :props="{
                  expandTrigger: 'hover',
                  label: 'modelName',
                  value: 'id',
                }"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="创建时间">
              <el-date-picker
                size="default"
                style="width: 360px"
                v-model="filterForm.times._Time"
                type="datetimerange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-form>
          <el-form
            size="default"
            class="filter-form"
            label-position="left"
            style="flex-grow: 1"
          >
            <el-form-item label="URL地址" label-width="90" style="flex-grow: 1">
              <el-input
                v-model="filterForm.url"
                placeholder="请输入URL地址"
                style="max-width: 1150px; flex-basis: 100%"
                size="default"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </card-header>
    <custom-table
      ref="table"
      :columns="tableColumns"
      :loadData="loadData"
      :queryParams="{}"
      @search="search"
      @reset="reset"
      :operations="operations"
      :footerLabel="'车型数据'"
    >
      <template #carInfo="scope">
        <div
          class="line-text"
          :title="scope.row.carModels.map((_) => _.modelName).join(',')"
        >
          <span v-for="(i, index) in scope.row.carModels" :key="index">
            {{ i.modelName }}
            <span v-if="index != scope.row.carModels.length - 1">，</span>
          </span>
        </div>
      </template>
    </custom-table>
    <!-- 添加 编辑弹窗 -->
    <el-dialog
      top="30vh"
      v-model="formDialogVisible"
      :title="dialogTitle"
      width="898px"
      @closed="afterClose"
    >
      <el-form
        size="default"
        class="dialog-form"
        label-position="left"
        :model="carForm"
        :rules="carFormRule"
        ref="carInfoForm"
      >
        <el-form-item label="URL地址" prop="url">
          <el-input
            placeholder="请输入URL地址"
            v-model="carForm.url"
            size="default"
          ></el-input>
        </el-form-item>
        <el-form-item label="适用车型" prop="modelCarIds" ref="modelCar">
          <el-cascader
            v-model="carForm.modelCarIds"
            style="width: 100%"
            placeholder="请选择适用车型"
            :show-all-levels="false"
            filterable
            :options="carTypeOptions"
            :props="{
              expandTrigger: 'hover',
              label: 'modelName',
              value: 'id',
              multiple: true,
            }"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <div style="margin-top: 41px">
        <el-button
          class="dialog-btn"
          size="default"
          @click="submitForm('carForm')"
          type="primary"
          >提交</el-button
        >
        <el-button size="default" @click="closeDialog">取消</el-button>
      </div>
    </el-dialog>
    <!-- 详情弹窗 -->
    <el-dialog
      v-model="detailDialogVisible"
      title="详情"
      width="620px"
      top="30vh"
    >
      <div class="detail-item">
        <span class="label">创建时间：</span>
        <span class="value">{{ urlInfoDetail.createTime }}</span>
      </div>
      <div class="detail-item">
        <span class="label">URL：</span>
        <span class="value">{{ urlInfoDetail.url }}</span>
      </div>
      <div class="detail-item">
        <span class="label">适用车型：</span>
        <span class="value">
          <span v-for="(i, index) in urlInfoDetail.carModels" :key="index">
            {{ i.modelName }}
            <span v-if="index != urlInfoDetail.carModels.length - 1">，</span>
          </span>
        </span>
      </div>
      <div style="margin-top: 41px">
        <el-button
          class="dialog-btn"
          size="default"
          @click="openEdit"
          type="primary"
          >编辑</el-button
        >
        <el-button size="default" @click="closeDetailDialog">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
// eslint-disable-file no-use-before-define
import {
  ref,
  Ref,
  watch,
  toRefs,
  reactive,
  defineComponent,
  getCurrentInstance,
  nextTick,
} from "vue";
import CustomTable from "@/components/commonTable/index.vue";
import { columns } from "./const";
import {
  mallPageList,
  getAllCars,
  getAvilableCars,
  addMallUrl,
  delMallUrl,
  modifyMallUrl,
  fetchCarInfo,
} from "@/services/mall";
interface FormData {
  account: string;
  psw: string;
}
export default defineComponent({
  name: "listPage",
  components: { CustomTable },
  setup(context) {
    const { proxy } = getCurrentInstance();
    let p: any = proxy;

    const tableColumns = reactive(columns);

    const filterForm = reactive({
      carModelId: "",
      endTime: "",
      id: "",
      startTime: "",
      url: "",
      times: { _Time: [] },
    });
    const queryForm = reactive({
      carModelId: "",
      id: "",
      endTime: "",
      startTime: "",
      url: "",
    });

    let carDataLoading = ref(false);
    let handelFetchCarInfo = async () => {
      carDataLoading.value = true;
      await fetchCarInfo();
      carDataLoading.value = false;
    };
    // 所有车型 可用车型
    let carTypeOptions = ref([]);
    let avilableCarOptions = ref([]);
    const getAllCarOptions = async () => {
      const { data } = await getAllCars();
      carTypeOptions.value = data.map((_) => {
        return {
          ..._,
          id: "",
        };
      });
    };

    const getAvilableCarOptions = async () => {
      const { data } = await getAvilableCars();
      avilableCarOptions.value = data;
    };
    getAvilableCarOptions();

    getAllCarOptions();

    // 添加编辑弹窗
    let _scope: any = null;

    let dialogTitle = ref("添加车型");
    let isModify = false;
    let urlId = "";
    let formDialogVisible = ref(false);
    const openDialog = () => {
      formDialogVisible.value = true;
      setTimeout(() => {
        const addCarUrlDialog: any = proxy.$refs.modelCar;
        addCarUrlDialog.clearValidate();
      }, 100);
    };
    let carForm = reactive({ url: "", modelCarIds: [] });
    const closeDialog = () => {
      formDialogVisible.value = false;
      isModify = false;
      carForm.url = "";
      carForm.modelCarIds = [];
    };
    let afterClose = () => {
      dialogTitle.value = "添加车型";
      isModify = false;
    };

    // 校验
    const carFormRule = {
      url: [
        {
          required: true,
          message: "URL不能为空",
          trigger: "blur",
        },
      ],
      modelCarIds: [
        {
          required: true,
          message: "未选择车型，不能提交",
        },
      ],
    };
    let submitForm = () => {
      // return;
      let r: any = proxy.$refs.carInfoForm;
      r.validate((valid) => {
        if (valid) {
          addCarUrl();
        } else {
          return false;
        }
      });
    };

    // 添加URL
    let addCarUrl = async () => {
      const { modelCarIds } = carForm;
      // 数据格式化
      const _modelCarIds = modelCarIds.map((_) => {
        return _[1];
      });
      try {
        if (isModify) {
          await modifyMallUrl({
            id: urlId,
            ...carForm,
            modelCarIds: _modelCarIds,
          });
        } else {
          await addMallUrl({ ...carForm, modelCarIds: _modelCarIds });
        }
        p.$ElMessage({
          type: "success",
          message: isModify ? "编辑成功" : "添加成功!",
        });
        p.$refs.table.refresh(true);
        closeDialog();
      } catch (error) {
        p.$ElMessage({
          type: "error",
          message: isModify ? "编辑失败" : "添加失败!",
        });
        console.info(error);
      }
    };

    // 详情相关
    let detailDialogVisible = ref(false);
    let urlInfoDetail = ref({ carModels: [], url: "", createTime: "" });
    const handleEdit = () => {
      isModify = true;
      urlId = _scope.row.id;
      dialogTitle.value = "编辑车型";
      openDialog();

      let ids = _scope.row.carModels.map((_) => {
        return ["", String(_.modelId)];
      });
      nextTick(() => {
        carForm.url = _scope.row.url;
        carForm.modelCarIds = ids;
      });
    };
    // 打开编辑
    let openEdit = () => {
      detailDialogVisible.value = false;
      handleEdit();
    };
    const closeDetailDialog = () => {
      detailDialogVisible.value = false;
    };

    const operations: OPERATION[] = reactive([
      {
        label: "删除",
        icon: "el-icon-delete-solid",
        cb: (scope) => {
          p.$Modal.comfirm({
            title: "删除",
            content: `删除之后，该匹配关系将从此列表消失您还要继续吗？？`,
            okText: "继续",
            ok: async () => {
              try {
                await delMallUrl(scope.row.id);
                p.$refs.table.refresh(true);
                isModify = false;
                p.$ElMessage({
                  type: "success",
                  message: "删除成功!",
                });
              } catch (error) {
                p.$ElMessage({
                  type: "error",
                  message: "删除失败!",
                });
              }
            },
          });
        },
        disable: (scope) => {
          return scope.row.type == 1;
        },
      },
      {
        label: "编辑",
        icon: "el-icon-edit",
        cb: (scope) => {
          _scope = scope;
          handleEdit();
        },
      },
      {
        label: "查看",
        icon: "el-icon-search",
        cb: (scope) => {
          _scope = scope;
          detailDialogVisible.value = true;
          const { carModels, url, createTime } = scope.row;
          urlInfoDetail.value = { carModels, url, createTime };
        },
      },
    ]);
    return {
      openDialog,
      closeDialog,
      addCarUrl,
      submitForm,
      openEdit,
      afterClose,
      closeDetailDialog,
      handelFetchCarInfo,
      carDataLoading,
      tableColumns,
      queryForm,
      context,
      carTypeOptions,
      operations,
      formDialogVisible,
      dialogTitle,
      carFormRule,
      detailDialogVisible,
      urlInfoDetail,
      avilableCarOptions,
      filterForm,
      carForm,
      ...toRefs(filterForm),
      ...toRefs(carForm),
    };
  },
  methods: {
    loadData(query): Promise<any> {
      const { currentPage, pageSize } = query;
      return mallPageList({ ...query, ...this.queryForm }).then((res) => {
        const { data } = res;
        return data;
      });
    },

    search() {
      this.$formatQueryform(this.filterForm);
      const { carModelId } = this.$formatQueryform(this.filterForm);
      this.queryForm = {
        ...this.$formatQueryform(this.filterForm),
        carModelId: carModelId && carModelId.join(""),
      };
      this.$refs.table.refresh(true);
    },

    reset() {
      this.filterForm.carModelId = "";
      this.filterForm.url = "";
      this.filterForm.times._Time = [];

      this.queryForm.carModelId = "";
      this.queryForm.url = "";
      this.queryForm.endTime = "";
      this.queryForm.startTime = "";

      this.$refs.table.refresh(true);
    },
  },
});
</script>
<style lang="less" scoped>
.container {
  padding: 24px;
}
/deep/.el-dialog {
  padding: 30px 40px;
  .el-dialog__body {
    padding: 0;
  }
  .el-dialog__header {
    padding: 0;
    margin-bottom: 41px;
  }
}
.dialog-form {
  /deep/.el-form-item {
    display: flex;
    margin-right: 80px;

    .el-form-item__label {
      width: 90px;
    }
  }
}
.detail-item {
  margin-bottom: 16px;
  text-align: left;
  .label {
    font-size: 14px;
    font-family: SourceHanSansSC-Medium, SourceHanSansSC;
    font-weight: 500;
    line-height: 14px;

    color: #516076;
  }
  .value {
    font-size: 14px;
    font-family: ArialMT;
    color: #7a8899;
    line-height: 21px;
  }
}
</style>