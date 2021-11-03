<template>
  <div class="login">

    <el-row>
      <el-col :span="6">一个奇怪の邮件客户端</el-col>
      <el-col :span="12">
        <el-tag>Fuck</el-tag>
        <el-progress type="circle" :percentage="count"> </el-progress>

        <el-form ref="form" :model="form" :rule="rules" label-width="80px">

          <el-form-item label="邮箱地址" prop="mailaddress" required>
            <el-input v-model="form.mailaddress" prefix-icon="el-icon-message" @change="foo()">
              <template slot="append">.com</template>
            </el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" required>
            <el-input v-model="form.password" prefix-icon="el-icon-s-flag" placeholder="请输入密码" show-password @change="bar()">
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">login</el-button>
            <el-button @click="resetForm('form')">reset</el-button>
          </el-form-item>

        </el-form>
        
      </el-col>

      <el-col :span="6">Col2</el-col>
    </el-row>

  </div>
</template>


<script>
export default {
    name: 'Login',
    data() {
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000)};

      return {
        rules: {
          mailaddress: [
            {validator: checkEmail, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入', trigger: 'change'}
          ]
        },
        form: {
          mailaddress: '',
          password: ''
        },
        count: 0
      };
    },
    methods: {
      submitForm(formName) {
        console.log("Submit!");
      },
      resetForm(formName) {
        console.log("Reset complete!");
      },
      foo() {
        if (this.form.mailaddress !== '') {
          this.count += 50;
        }
        else {
          this.count -= 50;
        }
      },
      bar() {
        if (this.form.password !== '') {
          this.count += 50;
        }
        else {
          this.count -= 50;
        }
      }
    }
  }
</script>
