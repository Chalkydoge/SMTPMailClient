<template>
  <div class="write_mail">
      <el-container>
        <el-header>
            <el-col :span="12">aaaa</el-col>
            <ul>
                <li>Header</li>
                <li>Mail To:</li>
                <li>Mail From:</li>
            </ul>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'WriteMail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>