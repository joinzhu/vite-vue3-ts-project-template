<template>
  <div>
    Home
    <el-button type="primary">aaaa</el-button>
  </div>
</template>

<script setup lang="ts">
import { testApi } from '../../api/app'

console.warn(testApi())
</script>

<style scoped></style>
