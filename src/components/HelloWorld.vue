<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { BuildPropType } from 'element-plus/es/utils'

defineProps<{ msg: string }>()

enum mySizeValues { default = "default", small = "small", large = "large" }

const count = ref(0)
const input = ref("element-plus");
const curDate = ref('')
const toast = () => {
  ElMessage.success('Hello')
}
//let size: unknown |  "" | "default" | "small" | "large" = ref(mySizeValues.default)
const size = ref(mySizeValues.default)
const labelPosition = ref('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  description: '',
})

function onSubmit() {
  console.log('form submited ! data :', sizeForm)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h3>{{ msg }}</h3>
      </el-header>
      <el-main>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-card>
              <template #header>
                <div class="card-header">
                  <span>Choose the size :</span>
                </div>
              </template>
              <el-radio-group v-model="size">
                <el-radio-button label="small">small</el-radio-button>
                <el-radio-button label="default">default</el-radio-button>
                <el-radio-button label="large">large</el-radio-button>
              </el-radio-group>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <template #header>
                <div class="card-header">
                  <span>Choose the label alignment :</span>
                </div>
              </template>
              <el-radio-group v-model="labelPosition">
                <el-radio-button label="left">Left</el-radio-button>
                <el-radio-button label="right">Right</el-radio-button>
                <el-radio-button label="top">Top</el-radio-button>
              </el-radio-group>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-divider></el-divider>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-card>
              <el-form
                ref="form"
                :model="sizeForm"                
                label-width="auto"
                :label-position="labelPosition"
                :size="size"
              >
                <el-form-item label="Activity name">
                  <el-input v-model="sizeForm.name" maxlength="25" show-word-limit />
                </el-form-item>
                <el-form-item label="Activity description">
                  <el-input
                    v-model="sizeForm.description"
                    type="textarea"
                    placeholder="Enter a description of the activity"
                  />
                </el-form-item>
                <el-form-item label="Activity zone">
                  <el-select v-model="sizeForm.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
                <el-form-item label="Activity time">
                  <el-col :span="11">
                    <el-date-picker
                      v-model="sizeForm.date1"
                      type="date"
                      placeholder="Pick a date"
                      style="width: 100%"
                    />
                  </el-col>
                  <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
                  <el-col :span="11">
                    <el-time-picker
                      v-model="sizeForm.date2"
                      placeholder="Pick a time"
                      style="width: 100%"
                    />
                  </el-col>
                </el-form-item>
                <el-form-item label="Activity type">
                  <el-checkbox-group v-model="sizeForm.type">
                    <el-checkbox-button label="Online activities" name="type" />
                    <el-checkbox-button label="Promotion activities" name="type" />
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources">
                  <el-radio-group v-model="sizeForm.resource">
                    <el-radio border label="Sponsor" />
                    <el-radio border label="Venue" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">Create</el-button>
                  <el-button>Cancel</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="1">
          <el-col :span="24">
            <el-divider></el-divider>
          </el-col>
        </el-row>
        <!-- example components -->
        <el-row>
          <el-col :span="24">
            <el-tabs type="border-card">
              <el-tab-pane label="Message">
                <el-card class="box-card">
                  <template #header>
                    <div class="card-header">
                      <span>el-button to display message on top :</span>
                      <el-button class="button" type="text">Operation button</el-button>
                    </div>
                  </template>
                  <div></div>
                  <el-button @click="toast">Click to send message on top of window</el-button>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="Buttons">
                <el-card class="box-card">
                  <template #header>
                    <div class="card-header">
                      <span>Nice buttons</span>
                    </div>
                  </template>
                  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
                  <el-button type="success" @click="count++">count is: {{ count }}</el-button>
                  <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
                  <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
                  <el-button type="info" @click="count++">count is: {{ count }}</el-button>
                </el-card>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
