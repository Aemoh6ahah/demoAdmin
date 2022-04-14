<template>
  <div class="container">
    <card-header :name="'问题分类列表'">
      <template #operate-btns>
        <el-button size="default" type="primary" @click="dialogVisible = true"
          >新建分类</el-button
        >
        <el-button size="default" @click="search" type="primary"
          >查询</el-button
        >
        <el-button size="default" @click="reset">重置</el-button>
      </template>
      <template #filters>
        <div class="form_wapper">
          <el-form size="default" class="filter-form" label-position="left">
            <el-form-item label="分类名称">
              <el-input
                v-model="filterForm.categoryName"
                placeholder="请输入分类名称"
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
      :footerLabel="'列表数据'"
      :SSConfig="SSconfig"
    >
    </custom-table>
    <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle"
      top="25vh"
      width=" 600px"
    >
      <el-form
        v-if="dialogVisible"
        :model="categoryForm"
        ref="categoryFormRef"
        :rules="rules"
        label-width="120px"
        label-position="left"
      >
        <el-form-item label="分类名称" required prop="categoryName">
          <el-input v-model="categoryForm.categoryName" size="default">
            <template #suffix>
              {{ categoryForm.categoryName.length + "/30" }}
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="分类图片" required>
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action="https://club-test.xchanger.cn/carlinx/obs/file/upload"
            :on-success="handlCoverSuccess"
            :before-upload="beforeCoverUpload"
            method="put"
          >
            <img v-if="imageUrl" :src="imageUrl" class="upload-img" />
            <div v-else>
              <el-icon class="avatar-uploader-icon"
                ><Plus />
                <div class="text">上传图片</div>
                <div class="hint">
                  上传图片大小不超过2M,图片支持格式:png、jpg、jpeg
                </div>
              </el-icon>
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <div>
            <el-button type="primary" @click="save" style="margin-right: 12px"
              >确定</el-button
            >
            <el-button @click="dialogVisible = false">取消</el-button>
          </div>
        </div>
      </template>
    </el-dialog>
    <pm-select :preSelectRowKeys="[]" ref="pmSelectRef"></pm-select>
  </div>
</template>
<script lang="ts">
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
import {
  addCategory,
  categoryList,
  delCategory,
  modifyCategoryState,
  getPmList,
} from "@/services/question";
import { userRoles } from "@/services/medal";

import { Plus } from "@element-plus/icons-vue";
import { columns } from "./const";
import { getImageReact } from "@/utils/util";
import pmSelect from "./component/pmSelect.vue";

export default defineComponent({
  name: "listPage",
  components: { CustomTable, Plus, pmSelect },
  setup(context) {
    const { proxy } = getCurrentInstance();
    let _this: any = proxy;

    const tableColumns = reactive(columns);
    const table = ref();
    const categoryFormRef = ref();

    const filterForm = reactive({ categoryName: "" });
    const queryForm = reactive({ categoryName: "" });

    const categoryForm = reactive({ categoryName: "" });
    const rules = {
      categoryName: [
        { required: true, message: "请输入分类名称", trigger: "blur" },
      ],
    };

    // 上传图片
    const imageUrl = ref("");

    const handlCoverSuccess = (res) => {
      imageUrl.value = res.data;
    };
    const beforeCoverUpload = async (r) => {
      let res = await getImageReact(r);
      console.log(res);

      if (r.size / 1024 / 1024 > 2 || res.proportionPass != 1) {
        _this.$message.error("请上传格式大小符合的图片");
        return false;
      }
    };

    const operations: OPERATION[] = reactive([
      {
        label: "删除",
        icon: "el-icon-delete-solid",
        cb: (scope) => {
          _this.$Modal.comfirm({
            title: "删除",
            content: `是否删除这条数据`,
            okText: "确定",
            ok: async () => {
              try {
                await delCategory(scope.row.id);
                _this.$refs.table.refresh(true);
                _this.$ElMessage({
                  type: "success",
                  message: "删除成功!",
                });
              } catch (error) {
                _this.$ElMessage({
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
          beforeModify(scope);
        },
      },
      {
        label: "查看",
        icon: "el-icon-search",
        cb: async (scope) => {
          let p = await getPmList(scope.row.id);
          pmList.value = pmSelectRef.value.showDialog();
        },
      },
    ]);

    // 弹窗
    let isModify = false;
    const dialogVisible = ref(false);
    let id = "";
    const dialogTitle = ref("新建分类");
    const beforeModify = (scope) => {
      imageUrl.value = scope.row.icon;
      categoryForm.categoryName = scope.row.categoryName;
      dialogTitle.value = "编辑分类";
      id = scope.row.id;
      isModify = true;
      dialogVisible.value = true;
    };

    const afterColse = () => {
      imageUrl.value = "";
      categoryForm.categoryName = "";
      dialogTitle.value = "新建分类";
    };

    const save = async () => {
      await categoryFormRef.value.validate();
      if (!imageUrl.value) {
        _this.$message.error("请上传图片");
        return;
      }
      if (isModify) {
        await addCategory({ ...categoryForm, icon: imageUrl.value });
      } else {
        await addCategory({ ...categoryForm, icon: imageUrl.value, id });
      }
      _this.$message.success(`${isModify ? "编辑" : "新建"}分类成功`);
      dialogVisible.value = false;
      reset();
      afterColse();
    };

    const search = () => {
      queryForm.categoryName = filterForm.categoryName;
      table.value.refresh(true);
    };

    const reset = () => {
      filterForm.categoryName = "";
      queryForm.categoryName = "";
      table.value.refresh(true);
    };

    const SSconfig = {
      key: "id",
      interface: modifyCategoryState,
      onlineText: "该问题分类将在移动端展示，您确定上线吗",
      offlineText: "该问题分类将不在移动端展示，您确定下线吗",
      onlineState: 1,
      offlineState: 0,
    };

    const pmRole = ref({});
    const pmList = ref([]);
    const getPMRole = async () => {
      let roles = await userRoles();
      pmRole.value = roles.find((_) => _.display_name == "产品经理");
    };
    getPMRole();
    const pmSelectRef = ref();

    return {
      tableColumns,
      table,
      reset,
      search,
      queryForm,
      context,
      filterForm,
      operations,
      ...toRefs(filterForm),
      categoryForm,
      ...toRefs(categoryForm),
      dialogVisible,
      dialogTitle,
      categoryFormRef,
      rules,
      save,
      handlCoverSuccess,
      imageUrl,
      beforeCoverUpload,
      SSconfig,
      pmRole,
      pmSelectRef,
      pmList,
    };
  },
  methods: {
    loadData(query): Promise<any> {
      return categoryList({ ...query, ...this.queryForm }).then((res) => {
        const { data } = res;
        data.rows = data.rows.map((_) => ({
          ..._,
          state: _.status,
        }));
        return data;
      });
    },
  },
});
</script>
<style lang="less" scoped>
.dialog-footer {
  display: flex;
  justify-content: space-around;
}
.upload-img {
  width: 118px;
  height: 118px;
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 118px;
  height: 118px;
  background-color: #f4f6fa;
  text-align: center;
  border: 1px dashed #888;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 24px;
  .hint {
    position: absolute;
    bottom: -24px;
    font-size: 12px;
    left: 5px;
    width: 350px;
    text-align: left;
  }
  .text {
    font-size: 14px;
  }
  &:hover {
    border-color: #4662e6;
  }
}
</style>